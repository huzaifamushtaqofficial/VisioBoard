import { FileListContext } from '@/app/_context/FilesListContext'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useConvex, useMutation } from 'convex/react'
import { Archive, Files, MoreHorizontal } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';

import React, { useContext, useEffect, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';



export interface FILE{
  archive:boolean,
  createdBy:string,
  document:string,
  fileName:string,
  teamId:string,
  whiteboard:string,
  _id:string,
  _creationTime:number
}
function FileList() {
  const {fileList_,setFileList_}=useContext(FileListContext);
  const [fileList,setFileList]=useState<any>();
const {user}:any=useKindeBrowserClient();
const router=useRouter();
  useEffect(()=>{
   fileList_&&setFileList(fileList_);
   console.log(fileList_);
  },[fileList_])
  const toggleArchive = useMutation(api.files.toggleArchive);

  const handleArchive = async (fileId: Id<"files">, archive: boolean) => {
    await toggleArchive({ _id: fileId, archive });
    setFileList((prevFiles: FILE[]) => prevFiles.filter(file => file._id !== fileId));
  };
  return (
    <div className='lg:w-[900px] lg:ml-[300px] mt-9 md:ml-75'>
      <div className="max-w-full overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white text-sm">
            <thead>
              <tr className=" border-b border-gray-300">
                <th className="px-4 py-2 text-gray-900 text-left">File Name</th>
                <th className="px-4 py-2 text-gray-900 text-left">Created At</th>
                <th className="px-4 py-2 text-gray-900 text-left hidden lg:table-cell">Edited</th>
                <th className="px-4 py-2 text-gray-900 text-left hidden lg:table-cell">Author</th>
              </tr>
            </thead>
            <tbody>
  {fileList && fileList.map((file: FILE, index: number) => (
    <tr key={index} className="even:bg-white odd:bg-gray-50 border-b border-gray-200 cursor-pointer" onClick={()=>router.push('/workspace/'+file._id)}>
      <td className="px-4 py-2 text-gray-900">{file.fileName}</td>
      <td className="px-4 py-2 text-gray-700">{moment(file._creationTime).format('DD MMM YYYY')}</td>
      <td className="px-4 py-2 text-gray-700 hidden lg:table-cell">{moment(file._creationTime).format('DD MMM YYYY')}</td>
      <td className="px-6 py-2 text-gray-700 hidden lg:table-cell ">
      {user&& <Image src= {user?.picture}
          alt='user'
          width={30}
          height={30}
          className='rounded-full'
          />}
      </td>
      <td className="px-6 py-2 text-gray-700 hidden lg:table-cell ">

        <DropdownMenu>
  <DropdownMenuTrigger><MoreHorizontal/></DropdownMenuTrigger>
  <DropdownMenuContent>
  <DropdownMenuItem 
  onClick={(e) => {
    e.stopPropagation();  // Stop row click event
    handleArchive(file._id as Id<"files">, true);
  }} 
  className="gap-3"
>
  <Archive className="h-4 w-4" /> Delete
</DropdownMenuItem>


   
  </DropdownMenuContent>
</DropdownMenu>

        </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      </div>
    </div>
  )
}

export default FileList
