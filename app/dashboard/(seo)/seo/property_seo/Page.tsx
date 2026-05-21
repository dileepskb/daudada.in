"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {  useEffect, useState } from "react"

import axios from "axios"
import { ButtonGroup } from "@/components/ui/button-group"
import { useRouter } from "next/navigation"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { FaRegEdit } from "react-icons/fa"
import { FaEye } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import { Lead } from "@/types/lead"
export default function Property() {
  const [properties, setProperties] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  
  const router = useRouter()
useEffect(() => {
  const fetchData = async () => {
    try {
      setIsLoading(true)

      const res = await axios.post("/api/lead")
      console.log(res)
      setProperties(res?.data?.data)
      setError("")
    } catch (err) {
      setError("Failed to fetch data")
    } finally {
      setIsLoading(false)
    }
  }

  fetchData()
}, [])

  // 🔥 delete function
  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Are you sure?")
    if (!confirmDelete) return

    try {
      const res = await fetch(`/api/lead/delete/${id}`, {
        method: "DELETE",
      })

      if (res.ok) {
        // ⚡ instant UI update (best UX)
        setProperties((prev) => prev.filter((s:Lead) => s.id !== id))
      } else {
        alert("Delete failed")
      }
    } catch (err) {
      alert("Something went wrong")
    }
  }

  // 🔥 Loading UI
  if (isLoading) return <div>Loading...</div>

  // ❌ Error UI
  if (error) return <div className="text-red-500">{error}</div>

  return (
    <div>
      <div className="border p-3">
       <ButtonGroup>
               <Button onClick={() => router.push("/dashboard/lead/add/")}>Add Lead</Button>
               <Button>Search</Button>
            </ButtonGroup>
      </div>
      <Table className="border">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {properties?.map((lead:Lead, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{lead.name}</TableCell>
              <TableCell>{lead.phone}</TableCell>
              <TableCell>{lead.email}</TableCell>
              <TableCell>{lead.status}</TableCell>
              <TableCell className="text-right flex gap-1 justify-end">
                {/* <Tooltip>
                  <TooltipTrigger>
                    {" "}
                    <Button onClick={() => router.push(`/dashboard/property/add?id=${lead.id}`)} className="border bg-gray-200 text-black">
                      <FaRegEdit />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Edit</p>
                  </TooltipContent>
                </Tooltip> */}
                <Tooltip>
                  <TooltipTrigger>
                    {" "}
                    <Button className="border bg-gray-200 text-black">
                      <FaEye />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Button onClick={() => handleDelete(lead.id)} className="border bg-gray-200 text-black">
                      <MdDelete />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Delete</p>
                  </TooltipContent>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
