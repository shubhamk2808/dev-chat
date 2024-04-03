import { statusList } from '@/lib/contant'
import React, { useMemo } from 'react'

interface UserStatusProps {
    status: string;  
  }
const UserStatus: React.FC<UserStatusProps> = ({status}) =>  {

  const getBgColor = () => {
      if(status == statusList.Active){
        return 'bg-green-500';
      }
      return 'bg-red-500'
  }
  const bgColor = getBgColor()  
  return (
    <div className='flex flex-row items-center gap-1'>
        <div className={`w-2 h-2 rounded-full ${bgColor}`}>
        </div>
        <p className='text-xs'>{status}</p>
    </div>
  )
}

export default UserStatus
