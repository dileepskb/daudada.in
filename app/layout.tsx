import { Geist, Geist_Mono } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import Header from "@/components/my_ui/Header/Header"
import Footer from "@/components/my_ui/Footer/Footer"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        fontSans.variable
      )}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            <Header />
            {children}
            <Footer />
            </TooltipProvider>
        </ThemeProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
