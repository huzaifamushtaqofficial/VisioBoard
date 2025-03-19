import { Button } from '@/components/ui/button'
import { Archive, Github } from 'lucide-react'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { DialogClose } from '@radix-ui/react-dialog'
import constant from '@/app/_constant/Constant'
import PricingDialog from './PricingDialog'

function SideNavBottomSection({onFileCreate,totalFiles}:any ){
  const menuList=[
    {
      id:1,
      name:'Github',
      icon:Github,
      path:'',
      pro: true
    },
    {
      id:2,
      name:'Archive',
      icon:Archive,
      path:'',
      pro: true
    }
  ]
  const [fileInput,setFileInput]=useState('');
  return (
    <div>
      {menuList.map((menu,index)=>(
        <h2 key={index} className='flex gap-2 p-1 px-2 text-[14px] 
        hover:bg-gray-300 rounded-md cursor-pointer w-[200px] relative'>
          <menu.icon className='h-5 w-5'/>
          {menu.name} 
          {menu.pro && <span className='absolute top-1 right-2 px-1 py-0.5 text-[8px] text-white bg-primary rounded'>Pro</span>}
        </h2>
      ))}

       {/* Add New File Button  */}
       <Dialog>
  <DialogTrigger asChild>
  <Button className='w-[230px] bg-primary/100 hover:bg-primary/60 cursor-pointer mt-3 justify-start'>New File</Button>
  </DialogTrigger>
   {totalFiles<constant.MAX_FREE_FILE?<DialogContent >
    <DialogHeader >
      <DialogTitle>Create new File</DialogTitle>
      <DialogDescription>
       <Input placeholder='Enter File Name'  className='mt-3'
       onChange={(e)=>setFileInput(e.target.value)}
       />
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="">
          <DialogClose asChild>
            <Button type="button" 
            className='bg-primary/100
            hover:bg-primary/60 cursor-pointer'
            disabled={!(fileInput&&fileInput.length>3)}
            onClick={()=>onFileCreate(fileInput)} >
              Create
            </Button>
          </DialogClose>
        </DialogFooter>
  </DialogContent>:
  <PricingDialog/>}
</Dialog>

     {/* progress bar */}
     <div className='h-4 w-[230px] bg-gray-200 rounded-full mt-5'>
     <div className={`h-4  bg-primary rounded-full`}
          style={{ width: `${(totalFiles/5)*100}%` }}
         >
          </div>
      </div>
<h2 className='text-[12px] mt-3'><strong>{totalFiles}</strong> out of <strong>{constant.MAX_FREE_FILE}</strong> files used</h2>
<h2 className='text-[12px] mt-1'>Upgrade your plan for unlimited access.</h2>
    </div>
  )
}

export default SideNavBottomSection
