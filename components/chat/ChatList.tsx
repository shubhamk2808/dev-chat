import React from 'react'
import UserPic from '../ui/Common/UserPic'
import UserStatus from '../ui/Common/UserStatus'
import { statusList } from '@/lib/contant' 
import { Input } from '../ui/input'
import TypeBox from './TypeBox'
import Message from './Message'
import { Messagetype } from '@/lib/types'

let messages = [
   {
     "id": 1,
     "sender": "John Doe",
     "message": "Hey there! How are you doing?",
     "timestamp": "2024-04-03T10:15:30Z"
   },
   {
      "id": 2,
      "sender": "John Doe",
      "message": "Hey there! How are you doing?",
      "timestamp": "2024-04-03T10:15:30Z"
    },
    {
      "id": 3,
      "sender": "Alice Smith",
      "message": "Hi John! I'm doing great, Hi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. Howthanks. How about you?",
      "timestamp": "2024-04-03T10:20:45Z"
    },
    {
      "id": 4,
      "sender": "John Doe",
      "message": "I'm doing fine too. Just busy with wHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. Howork.",
      "timestamp": "2024-04-03T10:25:10Z"
    },
    {
      "id": 5,
      "sender": "Alice Smith",
      "message": "UnderstandabHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. Howle. Don't forget to take breaks!",
      "timestamp": "2024-04-03T10:30:20Z"
    },
    {
      "id": 6,
      "sender": "John Doe",
      "message": "ThanksHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. How for the reminder!",
      "timestamp": "2024-04-03T10:35:15Z"
    },
    {
      "id": 7,
      "sender": "Jane Brown",
      "message": "Hey everyone! What's up?",
      "timestamp": "2024-04-03T10:40:05Z"
    },
    {
      "id": 8,
      "sender": "Alice Smith",
      "message": "Not much, just chatting with John.",
      "timestamp": "2024-04-03T10:45:30Z"
    },
    {
      "id": 9,
      "sender": "Jane Brown",
      "message": "Cool! Mind if I join?",
      "timestamp": "2024-04-03T10:50:40Z"
    },
    {
      "id": 10,
      "sender": "John Doe",
      "message": "Of course not, Jane! The more, the merrier.",
      "timestamp": "2024-04-03T10:55:55Z"
    },
    {
      "id": 11,
      "sender": "Jane Brown",
      "message": "Thanks, John!",
      "timestamp": "2024-04-03T11:00:10Z"
    },
   {
     "id": 12,
     "sender": "Alice Smith",
     "message": "Hi John! I'm doing great, Hi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. Howthanks. How about you?",
     "timestamp": "2024-04-03T10:20:45Z"
   },
   {
     "id": 13,
     "sender": "John Doe",
     "message": "I'm doing fine too. Just busy with wHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. Howork.",
     "timestamp": "2024-04-03T10:25:10Z"
   },
   {
     "id": 14,
     "sender": "Alice Smith",
     "message": "UnderstandabHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. Howle. Don't forget to take breaks!",
     "timestamp": "2024-04-03T10:30:20Z"
   },
   {
     "id": 15,
     "sender": "John Doe",
     "message": "ThanksHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. HowHi John! I'm doing great, thanks. How for the reminder!",
     "timestamp": "2024-04-03T10:35:15Z"
   },
   {
     "id": 16,
     "sender": "Jane Brown",
     "message": "Hey everyone! What's up?",
     "timestamp": "2024-04-03T10:40:05Z"
   },
   {
     "id": 17,
     "sender": "Alice Smith",
     "message": "Not much, just chatting with John.",
     "timestamp": "2024-04-03T10:45:30Z"
   },
   {
     "id": 18,
     "sender": "Jane Brown",
     "message": "Cool! Mind if I join?",
     "timestamp": "2024-04-03T10:50:40Z"
   },
   {
     "id": 19,
     "sender": "John Doe",
     "message": "Of course not, Jane! The more, the merrier.",
     "timestamp": "2024-04-03T10:55:55Z"
   },
   {
        "id": 20,
        "sender": "Jane Brown",
        "message": "Thanks, John!",
        "timestamp": "2024-04-03T11:00:10Z"
   }
 ]
 
function ChatList() {
  return (
    <div className='max-w-[1200px] w-full max-h-[calc(100vh-60px-3rem)]'>
       <div className='chat-container h-[calc(100%-40px)] max-h-[calc(100%-40px)] mb-2'>
          <div className='flex gap-4 flex-col h-[100%] overflow-y-scroll scrollbar-none '>
            {
             messages.map((msg ) => {
                console.log(msg)
               return <div key={msg.id}>
                  <Message message={msg}/>
               </div>
               })
            }
          </div>
       </div>
       <div className='action-container d-flex flex-row'>
            <TypeBox/> 
       </div>
    </div>
  )
}

export default ChatList
