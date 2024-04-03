import Image from 'next/image'
import React from 'react'
import dummyUser from '@/assets/dummyUser.jpeg' 
import Link from 'next/link'
function UserPic() {
  return (
    <div className='w-10 h-10 rounded-full'>
       <Link href='/user/1'>
         <Image className='w-10 h-10 rounded-full' src={dummyUser} alt='User Pic'/>
       </Link> 
    </div>
  )
}

export default UserPic
