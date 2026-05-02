
import Header from "@/components/my_ui/Header/Header"
import Footer from "@/components/my_ui/Footer/Footer"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
