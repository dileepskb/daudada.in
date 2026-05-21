import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { get } from "lodash";
import { useModal } from "../../hooks/useModal";
import { Bootstrap } from "../../components/bootstrap/Bootstrap";
import { SectionDrawer } from "./SectionDrawer";
import { useAxios } from "../../utils/useAxios";
import { Box, Stack, Skeleton } from "@mui/material";
import Button from "../../components/ui/button/Button";
import { MyDataTable } from "../dataTable/styles/DataTable.style";

interface Props {
  filterFormId: string;
  formListId: string;
}

interface Column {
  title: string;
  field: string;
  component: string;
  placeholder?: string;
}

interface Section {
  sectionid?: string | null;
  title?: string;
  columns: Column[];
  colsize?: string;
  tab?: number;
}

export default function Filterform({ filterFormId, formListId }: Props) {
  const [sections, setSections] = useState<Section[]>([]);
  const [columns, setColumns] = useState<Column[]>([]);

  const {
    mutate: formListMutate,
    isPending: isPendingFormList,
    res: formListRes,
  } = useAxios({
    url: "/api/auth/form-list",
  });

  const { res, mutate, isPending, error } = useAxios({
    url: "/api/auth/form",
    onSuccess: () => {
      formListMutate({ formId: formListId });
    },
  });

  const { openModal } = useModal();

  const formData = useForm({
    mode: "all",
    shouldUseNativeValidation: false,
    shouldFocusError: true,
    criteriaMode: "all",
  });

  useEffect(() => {
    mutate({ formId: filterFormId });
  }, []);
  const {
    handleSubmit,
    formState: { isValid },
  } = formData;

  const getformData = useMemo(() => res?.data?.data, [res]);

  useEffect(() => {
    if (getformData?.sections) {
      setSections(getformData?.sections);
      setColumns(getformData?.columns || []);
    }
  }, [getformData?.sections]);

  const onSubmit = (data: any) => {
    formListMutate({
      formId: formListId,
      filterData: { shipper: data.shipper },
    });
  };

  const sectionsMerge: Section[] = [
    ...sections,
    { sectionid: null, title: "New Section", columns: columns },
  ];

  const removeEmptyValues = (obj: any) => {
    // Create a new object to store the filtered properties
    const newObj = {} as any;

    // Iterate over each key-value pair in the original object
    for (const key in obj) {
      // Check if the property belongs to the object itself (not inherited)
      // and if its value is not an empty string
      if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== "") {
        // If the value is not an empty string, add it to the new object
        newObj[key] = obj[key];
      }
    }

    // Return the new object without empty string properties
    return newObj;
  };

  // if (isPending) {
  //   return (
  //     <Box sx={{ p: 2 }}>
  //       <Stack spacing={2}>
  //         {/* Skeleton for a form field label */}
  //         <Skeleton variant="text" sx={{ fontSize: "1rem" }} width="40%" />

  //         {/* Skeleton for a text input field */}
  //         <Skeleton variant="rounded" height={56} />

  //         {/* Skeleton for another form field label */}
  //         <Skeleton variant="text" sx={{ fontSize: "1rem" }} width="40%" />

  //         {/* Skeleton for another text input field */}
  //         <Skeleton variant="rounded" height={56} />

  //         {/* Skeleton for a submit button */}
  //         <Skeleton variant="rounded" height={40} sx={{ mt: 2 }} />
  //       </Stack>
  //     </Box>
  //   );
  // }

  return (
    <Bootstrap>
      <form
        className=""
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <SectionDrawer
          sectionsMerge={sectionsMerge}
          formData={formData}
          isEditMode={false}
          openModal={openModal}
        />
        <div className="flex py-3 pt-0 justify-end gap-2">
          <button
            type="reset"
            className="rounded border border-indigo-500 px-6 py-1 text-indigo-500 font-medium hover:bg-gray-300"
            // disabled={isEditMode}
          >
            Reset
          </button>
          <button
            type="submit"
            className="rounded bg-indigo-500 px-6 py-1 text-white font-medium hover:bg-indigo-700"
            // disabled={isEditMode}
          >
            Submit
            {/* {formIsPending ? "Submitting" : "Submit"} */}
          </button>
        </div>
      </form>
      {/* 
      <MyDataTable
        sx={{
          height: "450px",
          width: `100%`,
        }}
        rows={get(formListRes, "data.data.data", [])}
        columns={get(formListRes, "data.data.columns", [])}
        getRowId={(row: any) => row.id}
        pageSizeOptions={[10]}
        pagination
        paginationMode="client"
        rowHeight={40}
        columnHeaderHeight={30}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 8, page: 0 }, // Default to 5 records per page
          },
          columns: {
            columnVisibilityModel: {
              // Hide columns status and traderName
              // id: formIntData?.idShow || false,
            },
          },
        }}
        getRowClassName={(params: any) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
      /> */}
    </Bootstrap>
  );
}
