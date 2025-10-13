import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation';
import { ReactNode } from 'react'

export default async function AuthLayout({children}: {children: ReactNode}) {

  const isUserAuthenticated = await isAuthenticated();

  if (isUserAuthenticated) redirect('/');

  return (
    <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
      <div className='w-full max-w-sm'>
        {children}
      </div>
    </div>
  )
}
