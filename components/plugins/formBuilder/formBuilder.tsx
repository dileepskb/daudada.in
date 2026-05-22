"use client"
import { useEffect, useState } from "react"
import { useForm, FieldError } from "react-hook-form"
import { SectionDrawer } from "./SectionDrawer"
import { useAxios } from "@/utils/useAxios"
import { Button } from "@/components/ui/button"

interface Props {
  getformData: any
  // editdata: any;
  // listShow?: any;
  // isFilterForm?: boolean;
}

interface Column {
  title: string
  field: string
  component: string
  placeholder?: string
}

interface Section {
  sectionid?: string | null
  title?: string
  columns: Column[]
}

// interface FormState {
//   formid?: string;
//   sections?: Section[];
//   columns?: any;
// }

export default function FormBuilder({ getformData }: Props) {
  const formData = useForm({
    mode: "onSubmit",
  })

  const {
    handleSubmit,
    reset,
    watch,
    control,
    register,
    formState: { errors },
    setValue,
  } = formData

  const {
    res: formRes,
    mutate: formMutate,
    isPending: formIsPending,
  } = useAxios({
    url: "/api/form/submit",
  })

  const onSubmit = (data: any) => {
    console.log("top submit", getformData)
    const formColumns =
      getformData?.columns?.length > 0
        ? getformData.columns
        : getformData?.sections?.flatMap((section: any) => section.columns) ||
          []

    Object.keys(data).forEach((key) => {
      const fieldConfig = formColumns.find((col: any) => col.field === key)

      if (fieldConfig) {
        const isMultiSelect = fieldConfig.component === "select-multi"

        if (fieldConfig.type === "number") {
          if (isMultiSelect) {
            if (Array.isArray(data[key])) {
              data[key] = data[key].map((val: any) => Number(val))
            } else if (!isNaN(data[key]) && data[key] !== "") {
              data[key] = [Number(data[key])]
            } else {
              data[key] = []
            }
          } else {
            if (
              data[key] === "" ||
              data[key] === undefined ||
              data[key] === null
            ) {
              data[key] = null
            } else if (!isNaN(data[key])) {
              data[key] = Number(data[key])
            }
          }
        }
      }
    })
    console.log("on submit -1",getformData?.formid)
    console.log("onSubmit -2", data)
    formMutate({
      formId: getformData?.form?.formid,
      data: data,
    })
  }

  useEffect(() => {
    if (formRes) {
      if (formRes?.data?.success) {
        reset()
      } else {
      }
    }
  }, [formRes])

  // useEffect(() => {
  //   if (editdata && Object.keys(editdata).length > 0) {
  //     reset({ ...editdata });
  //   }
  // }, [editdata, reset]);

  const form = getformData || {}
  const sections = form?.sections || []
  const columns = form?.columns || []
  const sectionsMerge: Section[] =
    sections.length > 0
      ? sections
      : [
          {
            sectionid: null,
            title: "",
            columns,
          },
        ]

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <SectionDrawer
        sectionsMerge={sectionsMerge}
        formData={formData}
        formId={form?.formid}
        // isEditMode={isEditMode}
        // setModalContent={setModalContent}
        // setModalHeader={setModalHeader}
        // setModalOpen={setModalOpen}
        // setPopFromId={setPopFromId}
        // openModal={openModal}
      />
      <div className="flex justify-end gap-2 border-t pt-3">
        <Button
          type="reset"
          // className="rounded bg-gray-200 px-6 py-2 text-black font-medium hover:bg-gray-300"
          // disabled={isEditMode}
          variant="outline"
        >
          Reset
        </Button>
        <Button
          type="submit"

          // disabled={isEditMode}
        >
          {formIsPending ? "Submitting" : "Submit"}
        </Button>
      </div>
    </form>
  )
}
