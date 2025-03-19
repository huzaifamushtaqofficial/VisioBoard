"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const CreateTeam = () => {
  const [teamName, setTeamName] = useState('');

  const CreateTeam = useMutation(api.teams.createTeam);
  const { user }: any = useKindeBrowserClient();
  const router = useRouter();

  const createNewTeam = () => {
    CreateTeam({
      teamName: teamName,
      createdBy: user?.email
    }).then(resp => {
      console.log(resp);
      if (resp) {
        console.log("Redirecting to /dashboard...");
        router.push('/dashboard');
        toast('Team created successfully!!!');
      }
      
    })
  }
  return (
    <div className="flex flex-col items-center min-h-screen py-16 px-6">
      <Link href="/" className="self-start">
        <Image
          src="/logo-blank.png"
          alt="Company Logo"
          width={150}
          height={150}
          className="cursor-pointer"
        />
      </Link>
      <div className="text-center mt-12 max-w-lg w-full">
        <h2 className=" font-bold text-3xl text-[40px] text-primary">Create Your Team</h2>
        <p className="text-gray-600 mt-2">You can always change the team name later in settings.</p>
        <div className="mt-6">
          <label htmlFor="team-name" className="block text-gray-700 font-medium">Team Name</label>
          <Input id="team-name" placeholder="Enter your team name" className="mt-2 w-full"
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <Button className="mt-6 w-full shadow-md  cursor-pointer" disabled={!(teamName && teamName?.length > 0)}
          onClick={()=>createNewTeam()}
          >Create Team</Button>
      </div>
    </div>
  );
};

export default CreateTeam;
