import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { userId } = auth()

  if (userId) {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-dvh items-center justify-center">{children}</div>
  )
}
