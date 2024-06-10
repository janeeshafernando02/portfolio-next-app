"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { certifications } from "@/data/index";

const Certifications = () => {
  return (
    <div className="py-28 md:py-10 lg:py-0" id="certifications">
      <h1 className="heading text-center lg:mb-5">
        My <span className="text-purple justify-center">Certifications</span>
      </h1>
      <div className="flex items-center justify-center md:-ml-20">
        <div className="flex items-center justify-center h-[300px] md:w-[500px] md:h-[350px] md:ml-24 lg:w-[700px] lg:h-[450px] rounded-lg bg-transparent border border-indigo-300 mt-16">
          <ImagesSlider
            images={certifications}
            className="h-[200px] w-[260px] md:w-[400px] md:h-[300px] lg:w-[550px] lg:h-[400px]"
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center items-center"
            ></motion.div>
          </ImagesSlider>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
