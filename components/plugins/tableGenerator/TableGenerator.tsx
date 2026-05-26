"use client"

import { useEffect } from "react"

import { useAxios } from "@/utils/useAxios"
import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"

import { Eye, Pencil, Trash2 } from "lucide-react"
import { decrypt, encrypt } from "@/utils/storage";

interface Props {
  formId: string

  formIntData?: any

  onEdit?: (row: any) => void

  onDelete?: (row: any) => void

  onView?: (row: any) => void
}

const TableGenerator = ({
  formId,

  onEdit,

  onDelete,

  onView,
}: Props) => {
  const { res, mutate, isPending, error } = useAxios({
    url: "/api/form/table",
  })

  useEffect(() => {
    if (formId) {
      mutate({
        formId,
      })
    }
  }, [formId])

  /**
   * API data
   */

  const tableData = res?.data

  const columns = tableData?.columns || []

  const rows = tableData?.rows || []

  /**
   * Only show listview columns
   */

  const visibleColumns = columns.filter(
    (item: any) => item.listview === 1 && item.dbfield === 1
  )

  const deleteRecord = async (row: any) => {
    const res = await fetch("/api/form/delete", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        formId,

        rowId: row.id,
      }),
    })

    const data = await res.json()

    if (data.success) {
      mutate({ formId })
    }
  }



const router = useRouter();
const searchParams =
  useSearchParams();

const editId =
  decrypt(
searchParams.get("edit")
  );

console.log(editId);


  if (isPending) {
    return <div className="p-4">Loading...</div>
  }

  if (error) {
    return <div className="p-4 text-red-500">Something went wrong</div>
  }

  return (
    <div className="overflow-auto rounded-md border">
      <Table>
        {/* header */}

        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>

            {visibleColumns.map((column: any) => (
              <TableHead key={column.field}>{column.title}</TableHead>
            ))}

            {/* actions */}

            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        {/* body */}

        <TableBody>
          {rows.length > 0 ? (
            rows.map((row: any) => (
              <TableRow key={row.id}>
                {/* id */}

                <TableCell>{row.id}</TableCell>

                {/* dynamic fields */}

                {visibleColumns.map((column: any) => {
                  const value = row[column.field]

                  return (
                    <TableCell key={column.field}>
                      {renderValue(value, column)}
                    </TableCell>
                  )
                })}

                {/* actions */}

                <TableCell>
                  <div className="flex items-center gap-2">
                    {/* view */}

                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => {
                        onView?.(row)
                        console.log(row)
                      }}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>

                    {/* edit */}

                    <Button
  size="icon"
  variant="outline"
  onClick={() => {
    router.push(
      `/dashboard/test/add?edit=${encrypt(
        row.id
      )}`
    );
  }}
>
  <Pencil className="h-4 w-4" />
</Button>

                    {/* delete */}

                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => deleteRecord(row)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={visibleColumns.length + 2}
                className="h-24 text-center"
              >
                No data found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default TableGenerator

/**
 * Render field value
 */

function renderValue(value: any, column: any) {
  /**
   * Empty
   */

  if (value === null || value === undefined || value === "") {
    return "-"
  }

  /**
   * Checkbox
   */

  if (column.component === "checkbox") {
    if (typeof value === "string") {
      try {
        const parsed = JSON.parse(value)

        if (Array.isArray(parsed)) {
          return parsed.join(", ")
        }
      } catch {}
    }

    if (Array.isArray(value)) {
      return value.join(", ")
    }

    return String(value)
  }

  /**
   * File/Image
   */

  if (column.component === "file") {
    return <img src={value} alt="" className="h-12 w-12 rounded object-cover" />
  }

  /**
   * Key value
   */

  if (column.component === "MyKeyValue") {
    try {
      const items = typeof value === "string" ? JSON.parse(value) : value

      if (!Array.isArray(items)) {
        return "-"
      }

      return (
        <div className="space-y-1">
          {items.map((item: any, index: number) => (
            <div key={index}>
              <span className="font-medium">{item.key}</span>: {item.value}
            </div>
          ))}
        </div>
      )
    } catch {
      return "-"
    }
  }

  /**
   * Default
   */

  return String(value)
}
