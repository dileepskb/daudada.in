"use client"
import { useEffect, useState } from "react";
import FormBuilder from "../formBuilder/formBuilder";
import { useAxios } from "@/utils/useAxios";
interface props {
  formId: string;
  formIntData?: any;
}
const FormGenerator = ({ formId, formIntData }: props) => {
  const { res, mutate, isPending, error } = useAxios({
    url: "/api/form",
  });
  useEffect(() => {
    if (formId) {
      mutate({ formId });
    }
  }, [formId]);

  if (isPending) {
    return <div>Loading</div>;
  }
  return (
     <FormBuilder
                  getformData={res?.data?.data}
                  // editdata={dataHide ? {} : editRes?.data?.data}
                  // listShow={listShow}
                />
  );
};

export default FormGenerator