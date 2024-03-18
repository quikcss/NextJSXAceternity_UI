"use client";
import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Spotlight } from "./ui/Spotlight";


function LandindPage() {
    const words = [
        {
            text: "Build,",
            className: "text-white",
        },
        {
            text: "Design,",
            className: "text-white",
        },
        {
            text: "Innovate,",
            className: "text-white",
        },
        {
            text: "Create,",
            className: "text-white",
        },
        {
            text: "with",
            className: "text-white",
        },
        {
            text: "quikcss",
            className: "text-blue-500"
        },
    ]
  return (
    <div className="w-full h-screen overflow-hidden relative bg-black flex justify-center items-center">
      <Spotlight className="top-0 left-80" fill="blue"/>
      <div className="z-10">
        <TypewriterEffect words={words}></TypewriterEffect>
      </div>
    </div>
  )
}

export default LandindPage
