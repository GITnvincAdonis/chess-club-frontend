import { Button } from "@/components/ui/button";
import MyNavBar from "../My Components/NavBar";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function HOF() {
  const isOnDesk = useMediaQuery({ minWidth: 1040 });
  return (
    <>
      <MyNavBar></MyNavBar>
      <div className="  flex flex-col justify-center space-y-5 items-center mt-[10rem] ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Impactful Members</h1>
          <h1 className="text-xl font-bold text-center ">
            Club Members that have made a name for themselves
          </h1>
        </div>
        <Button variant="ghost" className="shadow-xl">
          Hover over Cards to interact
        </Button>
        <div className=" grid gap-1 lg:pb-0 pb-[15rem] lg:grid-cols-4 grid-cols-2 jusitfy-center items-center w-max h-max text-4xl mt-8 font-bold text-center">
          {Array.from({ length: 12 }).map(() => {
            const [isHover, setHovered] = useState(false);
            return (
              <>
                {isOnDesk && (
                  <HOFToolTip
                    content={
                      <motion.div
                        onHoverStart={() => {
                          setHovered(true);
                        }}
                        onHoverEnd={() => {
                          setHovered(false);
                        }}
                        className=" rounded-md overflow-hidden h-[10rem] w-[10rem] card text-bg-dark  shopping-options mix-blend-multiply"
                      >
                        <div>
                          <div className="h-0">
                            <div className="h-[10rem]  bg-black p-1 w-[10rem] border flex items-center justify-center">
                              <motion.div
                                animate={
                                  isHover
                                    ? { opacity: 1, y: "0" }
                                    : { opacity: 0, y: "200%" }
                                }
                                transition={{ type: "tween" }}
                                className="w-max text-sm text-white"
                              >
                                current
                              </motion.div>
                            </div>
                          </div>
                          <motion.div
                            animate={
                              isHover ? { opacity: 0.7 } : { opacity: 1 }
                            }
                          >
                            <img
                              className=" "
                              src="https://res.cloudinary.com/drh91o9pt/image/upload/v1731460031/default-profile-picture1_emnyvl.jpg"
                            ></img>
                          </motion.div>
                        </div>
                      </motion.div>
                    }
                  ></HOFToolTip>
                )}
                {!isOnDesk && (
                  <HOFPopover
                    content={
                      <motion.div className=" rounded-md overflow-hidden h-[10rem] w-[10rem] card text-bg-dark  shopping-options mix-blend-multiply">
                        <div>
                          <motion.div
                            animate={
                              isHover ? { opacity: 0.7 } : { opacity: 1 }
                            }
                          >
                            <img
                              className=" "
                              src="https://res.cloudinary.com/drh91o9pt/image/upload/v1731460031/default-profile-picture1_emnyvl.jpg"
                            ></img>
                          </motion.div>
                        </div>
                      </motion.div>
                    }
                  ></HOFPopover>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export function HOFToolTip(props: { content: any }) {
  const { content } = props;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{content}</TooltipTrigger>
        <TooltipContent className="w-[20rem] p-4 space-y-5 ">
          <img
            className=" "
            src="https://res.cloudinary.com/drh91o9pt/image/upload/v1731460031/default-profile-picture1_emnyvl.jpg"
          ></img>
          <div>
            <h1 className="text-xl">Student-Name:</h1>
            <p>
              {" "}
              <span className="text-lg">Achievement:</span> Lorem ipsum dolor
              sit amet consectetur, adipisicing elit.
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function HOFPopover(props: { content: any }) {
  const { content } = props;
  return (
    <Popover>
      <PopoverTrigger asChild>{content}</PopoverTrigger>
      <PopoverContent className="w-[15rem] p-4 space-y-5 ">
        <img
          className=" "
          src="https://res.cloudinary.com/drh91o9pt/image/upload/v1731460031/default-profile-picture1_emnyvl.jpg"
        ></img>
        <div>
          <h1 className="text-lg">Student-Name:</h1>
          <p className="text-sm">
            <span className="text-sm">Achievement:</span> Lorem ipsum dolor sit
            amet consectetur, adipisicing elit.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
