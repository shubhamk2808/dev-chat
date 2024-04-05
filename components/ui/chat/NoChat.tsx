import React from 'react'
import { Button } from '../button'

function NoChat() {
  return <>
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Chat</h1>
            </div>
            <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
                <div className="flex flex-col items-center gap-1 text-center">
                <h3 className="text-2xl font-bold tracking-tight">
                    There is no active chat
                </h3> 
                <Button className="mt-4">Start chat</Button>
                </div>
            </div>  
        </>
}

export default NoChat
