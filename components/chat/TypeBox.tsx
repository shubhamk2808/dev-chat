import React from 'react'
import { Input } from '../ui/input'
import { Smile, FileInput } from 'lucide-react'

function TypeBox() {
    return (
        <div className='h-10 flex flex-row items-center justify-center gap-2 bg-muted/40 rounded-full'>
            <div>
                <Smile />
            </div>
            <input
                type="search"
                placeholder="Type..."
                className="bg-transparent h-10 focus-visible:outline-none w-[calc(100%-80px)]"
            />
            <div>
                <FileInput />
            </div>
        </div>
    )
}

export default TypeBox
