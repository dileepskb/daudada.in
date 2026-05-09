import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      
    >
      <body className={cn(inter.variable, "font-sans")}>
        <ThemeProvider>
          <TooltipProvider>
           
            {children}
        
            </TooltipProvider>
        </ThemeProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
