import { CardDemo } from "../ShadCNComponents/CardDemo";
import MyNavBar from "../My Components/NavBar";
import { VideoComponent } from "./VideoContentPage";
import QCLOGO from "@/SVGS/QCLOGO";

export default function Homepage() {
  return (
    <>
      <MyNavBar></MyNavBar>
      <div className="container lg:w-full  w-96 lg:px-5  flex flex-col items-center justify-center pt-5 mt-32 ">
        <div className="container lg:min-h-80 min-h-60 px-5 flex lg:flex-row flex-col items-center justify-between  ">
          <div className="flex lg:flex-row flex-col ustify-center items-center lg:space-x-5">
            <div>
              <h1 className="scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl">
                QC ChessClub
              </h1>
              <h4 className="scroll-m-20 w-80 mb-5  text-xl text-center font-semibold tracking-tight">
                Website built to keep students up to date with Club Activities
              </h4>{" "}
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
        <div className="flex justify-center flex-col w-full  lg:flex-row md:items-start">
          {Options.map((item, index) => {
            return (
              <>
                {!(index == 2) && (
                  <CardDemo
                    card_desc={item.card_desc}
                    className={
                      "lg:m-5  my-2 basis-1/3  flex flex-col justify-between"
                    }
                    card_title={item.card_title}
                    card_body_text={item.card_body}
                    navigation_link={item.linkString}
                  ></CardDemo>
                )}
                {index == 2 && (
                  <CardDemo
                    card_desc={item.card_desc}
                    className={
                      "lg:m-5  my-2 basis-1/3  flex flex-col justify-between"
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
  },
  {
    card_title: "Executive Body",
    card_desc: "Learn the represenatives (teacher and students) of the club",
    card_body:
      " Meet the Executive Body of our chess club—your go-to team of dedicated representatives, teachers, and student leaders. Here, you'll find contact information and profiles for each official, connecting you with those who help guide and support our club’s vision.",
    linkString: "ExecPage",
  },
  {
    card_title: "Chess Club Learning Content",
    card_desc: "member training",
    card_body:
      " Explore our Chess Club Learning Content—your resource for mastering chess strategies, techniques, and game analysis. Dive into guides, tutorials, and expert insights, all crafted to help players of all levels enhance their skills and deepen their understanding of the game.",
  },
];
