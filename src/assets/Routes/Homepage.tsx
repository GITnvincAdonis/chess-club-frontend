import { CardDemo } from "../ShadCNComponents/CardDemo";
import MyNavBar from "../My Components/NavBar";
import { VideoComponent } from "./VideoContentPage";
import QCLOGO from "@/SVGS/QCLOGO";
import { Blocks, CalendarCheck2, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Homepage() {
  return (
    <>
      <MyNavBar></MyNavBar>
      <div className="container lg:w-full  w-96 lg:px-5  flex flex-col items-center justify-center pt-5 mt-32 mb-20 ">
        <div className="container lg:min-h-80 min-h-60 px-[5rem] flex lg:flex-row flex-col items-center justify-between  ">
          <div className="flex lg:flex-row flex-col ustify-center items-center lg:space-x-5">
            <div className="flex flex-col ">
              <h1 className="scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl">
                QC ChessClub
              </h1>
              <h4 className="scroll-m-20 w-80 mb-5  text-xl text-center font-semibold tracking-tight">
                Website built to keep students up to date with Club Activities
              </h4>
              <Button className="lg:mb-0 mb-10" variant="default">
                <a target="_blank" href="https://queenscollege.edu.gy">
                  Visit School Website
                </a>
              </Button>
            </div>
            <div className="mb-8">
              <QCLOGO size={150}></QCLOGO>
            </div>
          </div>

          <div className=" lg:w-[35rem] lg:h-[19.5rem]  overflow-hidden rounded-lg m-0  w-0 bg-black aspect-video ">
            <VideoComponent
              disableControls={true}
              noInteract={true}
            ></VideoComponent>
          </div>
        </div>
        <div className="flex  justify-center flex-col w-fit flex-wrap lg:flex-row md:items-start">
          {Options.map((item, index) => {
            return (
              <>
                {!(index == 2) && (
                  <CardDemo
                    icon={item.icon}
                    card_desc={item.card_desc}
                    className={
                      "lg:m-5  my-2 basis-2/5  flex flex-col justify-between"
                    }
                    card_title={item.card_title}
                    card_body_text={item.card_body}
                    navigation_link={item.linkString}
                  ></CardDemo>
                )}
                {index == 2 && (
                  <CardDemo
                    icon={item.icon}
                    card_desc={item.card_desc}
                    className={
                      "lg:m-5  my-2 basis-2/5 flex flex-col justify-between"
                    }
                    card_title={item.card_title}
                    card_body_text={item.card_body}
                    index={1}
                  ></CardDemo>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
const Options = [
  {
    card_title: "Chess events",
    card_desc: "A hub for all chess club events, tounaments, etc",
    card_body:
      "  Join exciting chess events, Compete in tournaments, participate in workshops, and sharpen your skills with students and other players",
    linkString: "Events",
    icon: (
      <>
        <svg width="100" height="100" viewBox="0 0 24 24">
          <defs>
            {/* Animated gradient definition */}
            <linearGradient
              id="animatedGradient3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#12072b">
                <animate
                  attributeName="stop-color"
                  values="#12072b; #F687B3; #12072b"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#F687B3">
                <animate
                  attributeName="stop-color"
                  values="#F687B3; #12072b; #F687B3"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            {/* Mask to apply gradient to entire icon stroke */}
            <mask id="iconMask3">
              <CalendarCheck2 size={20} strokeWidth={1.4} stroke="white" />
            </mask>
          </defs>

          {/* Background rectangle with animated gradient, masked by the icon */}
          <rect
            width="100%"
            height="200%"
            fill="url(#animatedGradient3)"
            mask="url(#iconMask3)"
          />
        </svg>
      </>
    ),
  },
  {
    card_title: "Executive Body",
    card_desc: "Learn the represenatives (teacher and students) of the club",
    card_body:
      " Meet the Executive Body of our chess club—your go-to team of dedicated representatives, teachers, and student leaders. Here, you'll find contact information and profiles for each official, connecting you with those who help guide and support our club’s vision.",
    linkString: "ExecPage",
    icon: (
      <>
        <svg width="100" height="100" viewBox="0 0 24 24">
          <defs>
            {/* Animated gradient definition */}
            <linearGradient
              id="animatedGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#12072b">
                <animate
                  attributeName="stop-color"
                  values="#12072b; #F687B3; #12072b"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#F687B3">
                <animate
                  attributeName="stop-color"
                  values="#F687B3; #12072b; #F687B3"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            {/* Mask to apply gradient to entire icon stroke */}
            <mask id="iconMask2">
              <Crown size={20} strokeWidth={1.4} stroke="white" />
            </mask>
          </defs>

          {/* Background rectangle with animated gradient, masked by the icon */}
          <rect
            width="100%"
            height="200%"
            fill="url(#animatedGradient2)"
            mask="url(#iconMask2)"
          />
        </svg>
      </>
    ),
  },
  {
    card_title: "Chess Club Learning Content",
    card_desc: "member training",
    card_body:
      " Explore our Chess Club Learning Content—your resource for mastering chess strategies, techniques, and game analysis. Dive into guides, tutorials, and expert insights, all crafted to help players of all levels enhance their skills and deepen their understanding of the game.",
    icon: (
      <>
        <svg width="100" height="100" viewBox="0 0 24 24">
          <defs>
            {/* Animated gradient definition */}
            <linearGradient
              id="animatedGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#12072b">
                <animate
                  attributeName="stop-color"
                  values="#12072b; #F687B3; #12072b"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#F687B3">
                <animate
                  attributeName="stop-color"
                  values="#F687B3; #12072b; #F687B3"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            {/* Mask to apply gradient to entire icon stroke */}
            <mask id="iconMask">
              <Blocks size={20} strokeWidth={1.4} stroke="white" />{" "}
            </mask>
          </defs>

          {/* Background rectangle with animated gradient, masked by the icon */}
          <rect
            width="100%"
            height="100%"
            fill="url(#animatedGradient)"
            mask="url(#iconMask)"
          />
        </svg>{" "}
      </>
    ),
  },
  {
    card_title: "Prominent Chess Members",
    card_desc: "'HALL of FAME'",
    card_body:
      " Celebrate the achievements of our standout members who have left a lasting mark in the chess community. These past students have demonstrated exceptional skill and dedication, rising to the top of the chess world. Their stories inspire the next generation of players. Join us in honoring their legacy.",
    linkString: "HOF",
    icon: (
      <>
        <svg width="100" height="100" viewBox="0 0 24 24">
          <defs>
            {/* Animated gradient definition */}
            <linearGradient
              id="animatedGradient4"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#12072b">
                <animate
                  attributeName="stop-color"
                  values="#12072b; #F687B3; #12072b"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#F687B3">
                <animate
                  attributeName="stop-color"
                  values="#F687B3; #12072b; #F687B3"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            {/* Mask to apply gradient to entire icon stroke */}
            <mask id="iconMask4">
              <Sparkles size={20} strokeWidth={1.4} stroke="white" />{" "}
            </mask>
          </defs>

          {/* Background rectangle with animated gradient, masked by the icon */}
          <rect
            width="100%"
            height="100%"
            fill="url(#animatedGradient3)"
            mask="url(#iconMask4)"
          />
        </svg>{" "}
      </>
    ),
  },
];
