import { Button } from '@/components/ui/button';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Search, Send } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Header() {
    const {user}:any=useKindeBrowserClient();
  return (
    <div className='flex justify-end w-full gap-2 items-center'>
        <div className='flex gap-2 items-center border rounded-md p-1'>
            <Search className='h-4 w-4 cursor-pointer'/>
            <input type='text' placeholder='Search' className=' w-24 sm:w-40'/>
        </div>
        <div>
        <Image
                    src={user?.picture || '/default-avatar.png'}
                    alt="User"
                    width={35}
                    height={35}
                    className="rounded-full border border-gray-300 cursor-pointer"
                />
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    Profile
                </span>
        </div>
        <Button  variant="outline" className='gap-2 flex text-sm
        h-8'> <Send className='h-4 w-4'/> Invite <span className='text-primary font-bold'>pro</span></Button>
    </div>
  )
}

export default Header