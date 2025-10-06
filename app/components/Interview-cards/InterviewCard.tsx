import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function InterviewCard() {
  return (
    <article className='border p-5 rounded-xl flex gap-5 flex-col'>
      <header>
        <Image src="/covers/hostinger.png" alt="logo" width={80} height={80} className='mb-7'/>
        <h3 className='text-white font-medium text-xl'>Frontend Dev Interview</h3>
        <p className='font-extralight text-gray-300'>You haven taken this interview yet. Take it now to improve your skills</p>
      </header>
      <div className='border py-2 px-3 w-fit bg-[#1A1A1A] rounded-3xl'>
        <span className='text-white text-md'>Technical</span>
      </div>
      <footer className='flex justify-between'>
        <div className='flex'>
          <Image src="/react.svg" alt="logo" width={20} height={20}/>
          <Image src="/tailwind.svg" alt="logo" width={20} height={20}/>
        </div>
        <Button className='w-3/4'>View interview</Button>
      </footer>
    </article>
  )
}
