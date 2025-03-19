"use client"
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";
import UseCases from "./_components/usecase";
import Layout from "./_components/Layout";
import Pricing from "./_components/pricing";
import Footer from "./_components/Footer";

export default function Home() {

  const {user}=useKindeBrowserClient();

  useEffect(()=>{
    console.log("--",user)
  },[user])
  return (
    <div>
      <Header/>

<Hero/>
<UseCases/>
<Layout/>
<Footer/>
    </div>
  );
}
