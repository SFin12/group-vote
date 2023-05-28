// Header.tsx
import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { signOut, useSession } from "next-auth/react"

const Header: React.FC = () => {
  const router = useRouter()
  const isActive: (pathname: string) => boolean = (pathname) => router.pathname === pathname

  const { data: session, status } = useSession()

  return (
    <nav className="flex p-7 items-center">
      {session ? (
      // User is logged in
      <>
        <div>
          <p>{session.user.name}</p>
        </div>
        <div className="ml-auto text-right">
          <button onClick={() => signOut()}>
            <a className="text-lg">Log out</a>
          </button>
        </div>
      </>
    ) : (
      // User not logged in
      <div className="ml-auto text-right">
        <Link href="/api/auth/signin">
          <a data-active={isActive("/signup")}>Log in</a>
        </Link>
      </div>
    )}
    </nav>
  )
}

export default Header
