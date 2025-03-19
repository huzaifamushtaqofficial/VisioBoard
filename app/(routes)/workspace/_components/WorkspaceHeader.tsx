import { Button } from '@/components/ui/button'
import { Link, Save } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function WorkspaceHeader({onSave}:any) {
  return (
    <div className='p-3 border-b flex justify-between items-center'>
      <div className='flex gap-2 items-center'>
        <Image src={'/logo-blank.png'}
          alt='logo'
          height={100}
          width={100} />
      </div>
      <div className='flex items-center gap-4'>
        <Button className='h-8 text-[12px]
        gap-2 bg-blue-500 hover:bg-blue-800'
        onClick={()=>onSave()}
        > 
        <Save className='h-4 w-4' /> Save </Button>
        <Button variant="outline" className='h-8 text-[12px]
        gap-2 '>
          Share <span className='text-primary font-bold'>pro</span> <Link className='h-4 w-4' /> </Button>
      </div>
    </div>
  )
}

export default WorkspaceHeader