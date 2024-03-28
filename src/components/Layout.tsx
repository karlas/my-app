import Link from 'next/link'
import { ReactNode, useState } from 'react'

export function Layout({ children }: { children: ReactNode }) {
  const [value, setValue] = useState(0)

  const links = [0, 1, 2, 3, 4, 5].map(i => (
    <Link key={i} href={`/${i}`} className="hover:underline p-1 border">
      {i}
    </Link>
  ))

  return (
    <div className="container h-screen mx-auto">
      <nav className="flex justify-between p-5">
        <div className="flex items-center gap-4">
          <h2 className="text-xl">Global state:{value}</h2>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => setValue(value + 1)}
          >
            +
          </button>
        </div>
        <div className="flex gap-4">{links}</div>
      </nav>
      <main>{children}</main>
    </div>
  )
}
