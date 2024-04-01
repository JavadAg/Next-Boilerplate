import "../globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Toaster } from "@/components/ui/toaster"
import Providers from "@/providers/layout.provider"
import { cn } from "@/utils/helpers"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Next.js Boilerplate",
  description:
    "Kickstart your React project with our Next.js Boilerplate. Get up and running quickly with this robust starter code, leveraging the power of Next.js framework to build dynamic and efficient applications."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", inter.variable)}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}
