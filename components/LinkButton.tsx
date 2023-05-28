import Link from "next/link"
import { ReactNode } from "react"

type Props = {
  href: string
  children: ReactNode
  className?: string
}

export default function LinkButton({ href, className, children }: Props) {
  return (
    <Link href={href}>
      <div className={` m-3 text-black font-bold p-2 text-lg rounded-md cursor-pointer w-1/2 text-center ${className? className : "bg-secondary"}`} >{children}</div>
    </Link>
  )
}
