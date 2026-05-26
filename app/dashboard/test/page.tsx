import TableGenerator from "@/components/plugins/tableGenerator/TableGenerator";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <TableGenerator  formId="testform" />
    </Suspense>
    )
}