"use client"

import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor"

type Props = {
  value: string
  onChange: (value: string) => void
}

export default function MyEditor({
  value,
  onChange,
}: Props) {

  return (
    <div className="rounded-md border">
      <SimpleEditor
        content={value}
        onChange={onChange}
      />
    </div>
  )
}