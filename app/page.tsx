"use client";

import DataObjectIcon from "@mui/icons-material/DataObject";
import { mainColor } from "@/Colors";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import {  Search, Upload, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="poppins">
      <Navbar />
      <CTASection />
      <div className="w-full flex justify-center items-center mt-10">
        <Image
          src={"/snip-light.png"}
          alt="dashboard"
          width={900}
          height={400}
          className="shadow-xl aspect-auto sm:w-auto w-[398px] rounded-lg max-w-full   sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
        />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col  ">
      <Logo />
      <Buttons />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <div className={`bg-purple-600 p-[6px] rounded-md`}>
        <DataObjectIcon sx={{ fontSize: 27, color: "white" }} />
      </div>
      <div className="flex gap-1 text-[19px] ">
        <span className={`font-bold text-purple-600`}>Snippet</span>
        <span className="text-slate-600">Master</span>
      </div>
    </div>
  );
}

function Buttons() {
  const { userId } = useAuth();
  return (
    <div className="max-sm:w-full">
      {userId ? (
        <Link href="/my-notes">
          <button
            className={`max-sm:w-full  bg-purple-600 p-[8px] px-6 text-sm text-white rounded-md`}
          >
            Access To The App
          </button>
        </Link>
      ) : (
        <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
          <button
            className={`max-sm:w-full  bg-purple-600 p-[8px] px-6 text-sm text-white rounded-md`}
          >
            <Link href="/sign-in"> Sign In</Link>
          </button>

          <Link href="/sign-up">
            <button
              className={` max-sm:w-full text-sm border border-purple-600 text-purple-600 
      hover:bg-purple-600 hover:text-white p-[8px] px-6 rounded-md`}
            >
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

function CTASection() {
  return (
   <div className="flex flex-col items-center text-center px-6 md:px-12 lg:px-16 mt-24 md:mt-32 gap-6">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-purple-700 via-purple-500 to-pink-400 bg-clip-text text-transparent">
    Save & Organize Your Code
    <br />
    <span className="text-purple-600">Efficiently!</span>
  </h1>

  <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
    With our advanced tagging and search features, you can quickly find the snippet you need, right when you need it. Spend less time searching for code and more time writing it.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Link href="/my-notes" className="w-full sm:w-auto">
      <Button
        size="lg"
        className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 flex items-center justify-center"
      >
        <Upload className="w-5 h-5 mr-2" />
        Upload Snippet
      </Button>
    </Link>
  </div>
</div>

  );
}
