import { Messagetype } from '@/lib/types'
import React from 'react'


const Message = ({ message }: { message: Messagetype }) => {
  return (
    <div className={`w-full flex ${message.id % 2 == 0 ? 'justify-end' : 'justify-start'}`}>
      <div className={`rounded max-w-[80%] bg-muted/40 min-h-10 w-fit items-center px-4 flex justify-center`}>
        <span className='leading-loose'>{message.message}</span>
      </div>
    </div>
  )
}

export default Message
