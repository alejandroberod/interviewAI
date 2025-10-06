import InterviewCard from './InterviewCard'

export default function InterviewCards() {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8'>
      <InterviewCard />
      <InterviewCard />
      <InterviewCard />
    </div>
    
  )
}
