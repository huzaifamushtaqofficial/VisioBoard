"use client";

import React, { useEffect, useState } from "react";
import { useKindeBrowserClient, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

function Settings() {
  const { user } = useKindeBrowserClient();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (user) {
      setUserName(user.given_name || "User");
      setUserEmail(user.email || "No Email");
    }
  }, [user]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 flex flex-col items-center relative">
        {/* Back Button */}
        <button onClick={() => router.back()} className="absolute top-4 left-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
          <ArrowLeft size={20} />
        </button>
        
        {/* Logo */}
        <Image 
          src="/logo-blank.png" 
          alt="Logo" 
          width={80} 
          height={80} 
          className="mb-4"
        />
        
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Settings</h1>
        <p className="text-gray-600 text-center">Manage your account settings and preferences here.</p>

        {/* User Info Section */}
        <div className="mt-6 border p-4 rounded-lg shadow-sm bg-gray-50 text-black flex flex-col items-center text-center w-full">
          {user?.picture ? (
            <Image
              src={user.picture}
              alt={userName}
              width={80}
              height={80}
              className="rounded-full mb-3"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold mb-3">
              {userName.charAt(0)}
            </div>
          )}
          <h2 className="text-lg font-semibold text-gray-800">{userName}</h2>
          <p className="text-sm text-gray-500">{userEmail}</p>
        </div>

        {/* Logout Button */}
        <div className="mt-6 flex justify-center w-full">
          <LogoutLink>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition w-full">
              Logout
            </button>
          </LogoutLink>
        </div>
      </div>
    </div>
  );
}

export default Settings;