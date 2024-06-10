"use client"
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
import {techStacks} from "@/data/index";

const TechStack = () => {
      
  return (
    <div id="about">
      <h1 className="heading lg:mb-14">
        My
        <span className="text-purple"> Tech Stack</span>
      </h1>
      <div className="max-w-5xl mx-auto px-8 mt-10">
      <HoverEffect items={techStacks} />
    </div>
    </div>  
  )
}

export default TechStack



