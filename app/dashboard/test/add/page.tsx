
import FormGenerator from "@/components/plugins/formGenerator/form";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <FormGenerator
          formId="testform"
        //   formIntData={{
        //     topMenus: false,
        //     tabs: true,
        //   }}
        />
        </Suspense>
    )
}