import Hero from "@/components/my_ui/Hero/Hero"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"

export default function Page() {
  //redirect("/login")
  return(
    <>
    <Hero />
    </>
  )
}
