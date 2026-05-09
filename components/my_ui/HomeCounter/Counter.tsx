import { ReactNode } from "react"

interface props {
  icon: ReactNode
  head: string
  text: string
}

export default function Counter({ icon, head, text }: props) {
  return (
    <div className="flex items-left gap-3">
      <div className="text-yellow-600">{icon}</div>
      <div>
        <div className=" text-3xl font-bold">{head}</div>
        <div className="text-gray-700">{text}</div>
      </div>
    </div>
  )
}
