import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <div className='flex flex-col gap-12'>
      <nav className='bg-[#262626] py-3 border-b max-sm:px-3'>
        <Link href="/" className='flex items-center mx-auto container gap-2'>
          <Image src="/logo.svg" alt="logo" height={38} width={44}/>
          <h2 className='text-white font-bold text-2xl'>IntervAI</h2>
        </Link>
      </nav>
      <div className='mx-auto container max-lg:px-5 max-md:px-3'>
        {children}
      </div>
    </div>
  )
}
