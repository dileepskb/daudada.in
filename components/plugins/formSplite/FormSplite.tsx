import { useEffect, useState } from "react";
import { useAxios } from "../../utils/useAxios";
import FormBuildTabs from "../formBuilder/FormBuildTabs";
import DataTableTabs from "../dataTable/dataTableTabs";

import FormLoading from "../../Loaders/formLoading";
import InfoModal from "../components/Info/InfoModal";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/ui/modal";
import styled from "styled-components";
import LoadSideBarform from "../../components/Load/LoadSideBarform";
import LoadCount from "../../components/Load/LoadCount";
import LoadPage from "../../components/Load/LoadPage";

import { PlusIcon } from "../../icons";
import { Button } from "@mui/material";
import { useData } from "../../context/GetDataContext";
import SplitLoad from "../../components/Load/SplitLoad";
// import Button from "../../components/button/Button";

interface props {
  tabsDetails: any;
  source?: any;
  crudOp?: any;
}

const FormSplite = ({ tabsDetails, source, crudOp: backCrudOP }: props) => {
  const [changeSplite, setChangeSplite] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();
  const [crudOp, setCrudOP] = useState({});
  const { res, mutate, isPending } = useAxios({
    url: "/api/auth/form",
  });

  let { formid, list, title } = tabsDetails;

  // Fetch initial form on mount
  useEffect(() => {
    if (formid) {
      setChangeSplite(false);
      mutate({ formId: formid });
    }
  }, [formid]);

  const openlist = () => {
    setChangeSplite(false);
  };

  const crud = (event: any) => {
    openModal();
    setCrudOP(event);
  };

  // useEffect(() => {
  //   if (backCrudOP) {
  //     openModal();
  //     setCrudOP(backCrudOP);
  //   }
  // }, [backCrudOP]);

  const { data } = useData();
  if (isPending) {
    return <FormLoading />;
  }

  return (
    <>
      {list === 0 || changeSplite ? (
        <div>
          {source && formid === "load" ? (
            <div>
              <LoadPage source={source} />

              <div className="grid grid-cols-2 gap-2 hidden">
                <Div>
                  <FormBuildTabs
                    getformData={res?.data?.data}
                    source={source}
                    openlist={openlist}
                  />
                </Div>
                <div>
                  <LoadSideBarform
                    source={source}
                    getformData={res?.data?.data}
                  />
                </div>
              </div>
              {/* <div>
                {data?.child_loads.length > 0 && (
                  <SplitLoad childLoad={data?.child_loads} />
                )}
              </div> */}
            </div>
          ) : (
            <>
              <FormBuildTabs
                getformData={res?.data?.data}
                source={source}
                openlist={openlist}
                crudOp={crudOp}
              />
            </>
          )}
        </div>
      ) : (
        <>
          <DataTableTabs
            formId={formid}
            source={source}
            crud={crud}
            addbtn={
              <Button
                variant="contained"
                sx={{
                  boxShadow: "none",
                  background: "#000",
                  color: "#fff!important",
                }}
                onClick={() => {
                  setChangeSplite(true);
                }}
                size="small"
                startIcon={<PlusIcon width={16} height={16} />}
              >
                Add {title}
              </Button>
            }
          />
        </>
      )}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="max-w-[1000px] m-4"
        header={"Information"}
      >
        <div className="no-scrollbar relative w-full max-w-[1000px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <FormBuildTabs
            getformData={res?.data?.data}
            openlist={openlist}
            crudOp={crudOp}
          />
        </div>
      </Modal>
    </>
  );
};

export default FormSplite;

const Div = styled("div")`
  .col-1 {
    width: 16.66666667% !important;
  }
  .row .row .col-2,
  .row .row .col-3 {
    width: 33.33333333% !important;
  }
`;
