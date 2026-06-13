"use client"
import TableGenerator from "@/components/plugins/tableGenerator/TableGenerator";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { useRouter } from "next/navigation"

export default function AddHomeSeo(){
      const router = useRouter()
    return(
        <>
        
          <div className="border p-3">
       <ButtonGroup>
               <Button onClick={() => router.push("/dashboard/pages/add/")}>Add Pages</Button>
               <Button>Search</Button>
            </ButtonGroup>
      </div>
        <TableGenerator
          formId="page"
        //   formIntData={{
        //     topMenus: false,
        //     tabs: true,
        //   }}
        />
        </>
    )
}