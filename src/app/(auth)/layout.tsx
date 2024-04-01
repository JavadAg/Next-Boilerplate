import "../globals.css"

import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

import { Toaster } from "@/components/ui/toaster"
import Providers from "@/providers/layout.provider"
import { cn } from "@/utils/helpers"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const signInUrl = "/sign-in"
  const signUpUrl = "/sign-up"
  const dashboardUrl = "/dashboard"

  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", inter.variable)}>
        <Providers>
          <ClerkProvider
            signInUrl={signInUrl}
            signUpUrl={signUpUrl}
            afterSignInUrl={dashboardUrl}
            afterSignUpUrl={dashboardUrl}
          >
            {children}
          </ClerkProvider>
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}
