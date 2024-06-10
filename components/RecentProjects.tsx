"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-10 lg:py-28" id="projects">
      <h1 className="heading lg:pb-10">
        My {" "}
        <span className="text-purple">Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-24">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] -mb-24 md:mb-5"
            key={item.id}
          >
            <PinContainer
              title="Projects"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[30vh] md:h-[45vh] lg:h-[35vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-[17px] md:text-[14px] text-[9px] text-center">
                {item.title}
              </h1>

              <p
                className="lg:text-[16px] md:text-[13px] lg:font-normal font-light text-[8px] text-center"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a href={item.link} target="blank">
                  <p className="flex lg:text-lg md:text-xs text-[10px] text-purple">
                    Live Demo
                  </p>
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
