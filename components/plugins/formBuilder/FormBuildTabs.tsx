import { useEffect, useState } from "react";
import { useAxios } from "../../utils/useAxios";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import InfoModal from "../components/Info/InfoModal";
import { useNavigate } from "react-router";
import MuiModel from "../../components/Mui/model/MuiModel";
import { useModal } from "../../hooks/useModal";
import { Bootstrap } from "../../components/bootstrap/Bootstrap";
import { SectionDrawer } from "./SectionDrawer";
import { encryptObject } from "../../utils/crypt";
import { useData } from "../../context/GetDataContext";
import { isEmpty } from "lodash";

interface Props {
  getformData: any;
  source?: any;
  openlist?: any;
  crudOp?: any;
  isFilterForm?: boolean;
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

interface FormState {
  formid?: string;
  sections?: Section[];
  columns?: any;
  redirect_on_submit?: string;
  source_key?: string;
}

export default function FormBuilder({
  getformData,
  source,
  openlist,
  crudOp,
  isFilterForm = false,
}: Props) {
  const [form, setForm] = useState<FormState>({});
  const [sections, setSections] = useState<Section[]>([]);
  const [columns, setColumns] = useState<Column[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const { isOpen, openModal, closeModal } = useModal();
  const [popFormId, setPopFromId] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [operation, setOperation] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const formData = useForm({
    mode: "onSubmit",
  });

  const { handleSubmit, reset } = formData;
  const { setData } = useData();

  useEffect(() => {
    if (getformData) {
      setForm(getformData);
      reset(getformData);
    }
  }, [getformData]);

  useEffect(() => {
    if (form?.sections) {
      setSections(form?.sections);
      setColumns(form?.columns || []);
    }
  }, [form?.sections]);

  //* Start --> Submit Data features

  const {
    res: formRes,
    mutate: formMutate,
    isPending: formIsPending,
  } = useAxios({
    url: "/api/auth/submitdata",
    onSuccess: (e) => {
      if (e?.data?.success) {
        closeModal();
        enqueueSnackbar(e?.data?.message, {
          variant: "success",
        });
        reset();
        let datasource;
        if (getformData?.source_key) {
          const source_key = getformData?.source_key;
          datasource = encryptObject({
            [source_key]: e?.data?.data?.id,
          });
        }
        if (getformData?.redirect_on_submit && getformData?.source_key) {
          navigate(getformData?.redirect_on_submit + datasource);
        } else if (getformData?.redirect_on_submit) {
          navigate(getformData?.redirect_on_submit);
        } else {
          openlist(true);
        }
      } else {
        enqueueSnackbar(e?.data?.message, {
          variant: "error",
        });
      }
    },
  });

  const onSubmit = async (data: any) => {
    const formColumns =
      getformData?.columns?.length > 0
        ? getformData.columns
        : getformData?.sections?.flatMap((section: any) => section.columns) ||
          [];

    Object.keys(data).forEach((key) => {
      const fieldConfig = formColumns.find((col: any) => col.field === key);

      if (fieldConfig) {
        const isMultiSelect = fieldConfig.component === "select-multi";

        if (fieldConfig.type === "number") {
          if (isMultiSelect) {
            if (Array.isArray(data[key])) {
              data[key] = data[key].map((val: any) => Number(val));
            } else if (!isNaN(data[key]) && data[key] !== "") {
              data[key] = [Number(data[key])];
            } else {
              data[key] = [];
            }
          } else {
            if (
              data[key] === "" ||
              data[key] === undefined ||
              data[key] === null
            ) {
              data[key] = null;
            } else if (!isNaN(data[key])) {
              data[key] = Number(data[key]);
            }
          }
        }
      }
    });

    let finaldata = {} as any;
    if (source) {
      finaldata = { ...data, ...source };
    } else {
      finaldata = data;
    }

    delete finaldata.formid;
    delete finaldata.sections;
    delete finaldata.title;
    delete finaldata.classes;
    delete finaldata.columns;
    delete finaldata.redirect_on_submit;
    delete finaldata.source_key;

    formMutate({
      formId: getformData?.formid,
      formData: finaldata,
      ...(operation && { operationType: "edit" }),
    });
  };

  const sectionsMerge: Section[] = [
    ...sections,
    { sectionid: null, title: "New Section", columns: columns },
  ];

  //* End --> Submit Data features

  //* Start --> View And Update Data Features

  const { res: editRes, mutate: editMatate } = useAxios({
    url: "/api/auth/geteditdata",
    onSuccess: (e) => {
      const getData = e?.data?.data;
      if (form?.formid === "load") {
        setData(getData);
      }
      // reset({ ...getData });
      // if (form?.formid === "LoadDispatch") {
      //   setIsEditMode(false);
      // } else {
      //   setIsEditMode(true);
      // }

      if (getData && Object.keys(getData).length > 0) {
        reset({ ...getData });
        setIsEditMode(true);
        if (crudOp?.action === "view") {
          setIsEditMode(true);
        }
        if (crudOp?.action === "edit") {
          setOperation(true);
          setIsEditMode(false);
        }
        if (crudOp?.action === "create") {
          reset({});
          setOperation(false);
          setIsEditMode(false);
        }
      }
    },
  });

  useEffect(() => {
    const id =
      source?.carrier_id ||
      source?.trailer_id ||
      source?.driver_id ||
      source?.vehicle_id ||
      source?.load_id ||
      crudOp?.id;
    // console.log(id);
    // console.log(crudOp?.action);
    if (crudOp?.action !== "create") {
      if (source || !isEmpty(crudOp)) {
        if (getformData?.formid) {
          editMatate({
            editId: Number(id),
            formId: `${getformData?.formid}`,
            target: "edit",
          });
        }
      }
    }
  }, [source, crudOp, getformData?.formid]);
  //* End --> View And Update Data Features

  return (
    <Bootstrap>
      <form
        key={getformData?.formid || "default"}
        className="space-y-4"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <SectionDrawer
          sectionsMerge={sectionsMerge}
          formData={formData}
          isEditMode={isEditMode}
          setModalContent={setModalContent}
          setModalHeader={setModalHeader}
          setModalOpen={setModalOpen}
          setPopFromId={setPopFromId}
          openModal={openModal}
          formId={form?.formid}
        />
        {!isEditMode && (
          <>
            {!isFilterForm && (
              <div className="flex border-t pt-3 justify-end gap-2">
                <button
                  type="reset"
                  className="rounded bg-gray-200 px-6 py-2 text-black font-medium hover:bg-gray-300"
                  disabled={isEditMode}
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="rounded bg-indigo-500 px-6 py-2 text-white font-medium hover:bg-indigo-700"
                  disabled={isEditMode}
                >
                  {formIsPending ? "Submitting" : "Submit"}
                </button>
              </div>
            )}
          </>
        )}
        <InfoModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={modalHeader}
          content={modalContent}
        />
      </form>
      {isOpen && (
        <MuiModel isOpen={isOpen} onClose={closeModal} formId={popFormId} />
      )}
    </Bootstrap>
  );
}
