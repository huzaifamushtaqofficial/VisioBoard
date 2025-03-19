import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Archive, ChevronDown, Flag, LayoutGrid, LayoutGridIcon, LogOut, Menu, Settings, Users, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogoutLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Separator } from "@/components/ui/separator"
import { useConvex, useMutation } from "convex/react";

import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import SideNavBottomSection from "./SideNavBottomSection";
import { toast } from "sonner";
import { FileListContext } from "@/app/_context/FilesListContext";
export interface TEAM{
  createdBy:String,
  teamName:String,
  _id:String
}

function SideNav({setActiveTeamInfo}:any) { // Remove 'user' from props
  const createFile = useMutation(api.files.createFile);

  
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useKindeBrowserClient(); // Only use this user
  const menu = [
    {
      id: 1,
      name: 'Create Team',
      path: '/teams/create',
      icon: Users
    },
    {
      id: 2,
      name: 'Settings',
      path: '/settings',  // Add settings page route
      icon: Settings
    }
  ];
  
 const router=useRouter();
  const convex = useConvex();

<SideNav setActiveTeamInfo={setActiveTeamInfo} />

  const[activeTeam,setActiveTeam]=useState<TEAM>();
  const [teamList, setTeamList] = useState<TEAM[]>([]); // Fix variable name & initialize with an empty array

  useEffect(() => {
    if (user?.email) { // Ensure user and email exist before calling API
      getTeamList();
    }
  }, [user?.email]); // Use user?.email to prevent unnecessary re-renders

  useEffect(() => {
    if (activeTeam && typeof setActiveTeamInfo === "function") {
      setActiveTeamInfo(activeTeam);
    }
  }, [activeTeam]);
  const[totalFiles, setTotalFiles]=useState<Number>();
  const {FileList_,setFileList_}=useContext(FileListContext);

  const getTeamList = async () => {
    try {
      const result = await convex.query(api.teams.getTeam, { email: user?.email });
      console.log("TeamList", result);
      setTeamList(result);
      setActiveTeam(result[0]);
    } catch (error) {
      console.error("Error fetching team list:", error);
    }
  };

  const onMenuClick = (item: any) => {
    if (item.path) {
      router.push(item.path);
    }
  };
  useEffect(()=>{
    activeTeam&&getFiles();
  },[activeTeam])

  
  const onFileCreate=(fileName:string)=>{
    console.log(fileName)
    createFile({
      fileName:fileName,
      teamId: activeTeam?._id as string, 
      createdBy:user?.email,
      archive:false,
      document:'',
      whiteboard:''
    }).then(resp=>{
      if(resp){

        getFiles();
        toast('File created successfully!')
      }
    },(e)=>{
      toast('Error while creating file')
    })
  }
   const getFiles=async()=>{
    const result = await convex.query(api.files.getFiles, { teamId: activeTeam?._id as string });


console.log(result);
setFileList_(result);
setTotalFiles(result?.length)
   }

  return (
    <div>
    <Popover>
      <PopoverTrigger asChild>
        <div>
          {/* Toggle Button (Sirf Small Screens par dikhay) */}
          <button
            className={`fixed top-4 left-4 z-50 bg-gray-200 p-2 rounded-full shadow-md transition-transform duration-300 cursor-pointer 
          ${isOpen ? "translate-x-64" : ""} md:hidden`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Sidebar (Hamesha Large Screens par dikhay aur Small Screens par Toggle ho) */}
          <div
            className={`bg-gray-100 h-screen fixed top-0 left-0 w-72 border-r transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-80"} md:translate-x-0`}
          >
            {/* Logo + Team Name */}
            <div className="flex items-center gap-1 w-full mt-2 mr-2">
           
            <Link href="/" className="flex-shrink-0 pl-1">
              <Image 
  src="/logo.svg"
  alt="logo"
  width={200}
  height={200}
  className="cursor-pointer"
  style={{ width: "auto", height: "auto" }} // Ensure aspect ratio is maintained
/>

              </Link>
           
              {/* Team Name + Chevron Down (Proper Alignment) */}
              <div className="flex flex-col flex-grow min-w-0">
              <Popover >
                <PopoverTrigger asChild>
                  <div className="flex items-center cursor-pointer p-1 rounded-md mr-2 border-2  transition-all duration-300 hover:bg-gray-200">
                    <h2 className="text-sm italic font-bold select-none break-words whitespace-normal overflow-hidden">
                    {activeTeam?.teamName}
                    </h2>
                    <ChevronDown size={20} className="text-gray-600" />
                  </div>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-48">
                  <div className="cursor-pointer">
                    {/*Team section*/}
                    {teamList.map((team,index)=>(
           <h2 key={index}
           className={`p-2 hover:bg-primary
            hover:text-white
            rounded-lg mb-1 cursor-pointer break-words whitespace-normal
            ${activeTeam?._id==team._id&&'bg-primary text-white'}`}
            onClick={()=>setActiveTeam(team)}
           >{team.teamName}</h2>
                    ))}
                   
                  </div>
                  <Separator className="mt-2 bg-slate-100"/>
                  {/*Option section*/}
                  <div >
                    {menu.map((item) => (
                      <h2 key={item.id} className="flex gap-2 items-center cursor-pointer p-2 hover:bg-gray-100 rounded-lg text-sm " onClick={()=>onMenuClick(item)}>
                        <item.icon className="h-4 w-4"/>
                        {item.name}</h2>
                    ))}
                    <LogoutLink>
                     <h2  className="flex gap-2 items-center cursor-pointer p-2 hover:bg-gray-100 rounded-lg text-sm "
                     >
                        <LogOut className="h-4 w-4"/>
                        Logout</h2>
                        </LogoutLink>


                  </div>
                  <Separator className="mt-2 bg-slate-100"/>


                  {/*User info section*/}
                 
                    {/*User info section*/}
{/*User info section*/}
{/*User info section*/}
<div className="flex items-center gap-3 mt-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer w-full max-w-[220px]">
  {user?.picture ? (
    <Image
      src={user.picture}
      alt={user.given_name || "User"}
      width={40}
      height={40}
      className="rounded-full"
    />
  ) : (
    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold">
      {user?.given_name ? user.given_name.charAt(0) : "U"}
    </div>
  )}

  <div className="flex flex-col w-full overflow-hidden">
    {/* Full Name (Truncated if Long) */}
    <h2
      className="text-sm font-medium truncate w-full overflow-hidden"
      title={user?.given_name || "User"}
    >
      {user?.given_name || "User"}
    </h2>

    {/* Email (Truncated if Long) */}
    <p
      className="text-xs text-gray-500 truncate w-full overflow-hidden"
      title={user?.email || "No Email"}
    >
      {user?.email || "No Email"}
    </p>
  </div>
</div>



                </PopoverContent>
              </Popover>
            </div>
            </div>

            {/* Navigation Links (Yahan apne links add karen) */}


            <Button variant={"outline"}className=" bg-gray-200  font-bold mt-7 cursor-pointer ml-5 w-[250px] justify-start ">
      <LayoutGrid/>
    All Files
    </Button>

  <div className="mt-[230px] ml-4">
  <SideNavBottomSection  
  totalFiles={totalFiles}
  onFileCreate={onFileCreate} setActiveTeamInfo={setActiveTeamInfo} />

  
  </div>

          </div>
        </div>
      </PopoverTrigger>
    </Popover>

    {/*all files button  */}

 




    </div>
  );
}

export default SideNav;
