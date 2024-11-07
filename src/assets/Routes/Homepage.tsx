import { Button } from "@/components/ui/button";
import { CardDemo } from "../ShadCNComponents/CardDemo";
import MyNavBar from "../My Components/NavBar";

export default function Homepage() {
  return (
    <>
      <MyNavBar></MyNavBar>
      <div className="container lg:w-full  w-96 lg:px-5  flex flex-col items-center justify-center pt-5 mt-32 ">
        <div className="container lg:min-h-80 min-h-60 px-5 flex lg:flex-row flex-col items-center justify-between  ">
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              QC ChessClub Website
            </h1>
            <h4 className="scroll-m-20 w-80 mb-5  text-xl font-semibold tracking-tight">
              Website built to keep students up to date with Club Activities
            </h4>{" "}
            <Button>Buttons</Button>
          </div>
          <div className="lg:border lg:basis-1/2 lg:h-80 m-0 h-0 w-0  "></div>
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
      "  officiis consectetur obcaecati ipsam ducimus nisi fugiat necessitatibus possimus minima voluptatem sit sequi harum quia.",
    linkString: "Events",
  },
  {
    card_title: "Executive Body",
    card_desc: "Learn the represenatives (teacher and students) of the club",
    card_body:
      " Lorem consectetur  quidem aperiam laborumipsam ducimus nisi fugiat necessitatibus possimus minima voluptatem sit sequi harum quia.",
    linkString: "ExecPage",
  },
  {
    card_title: "Chess Club Learning Content",
    card_desc: "Novice member training",
    card_body:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, officiis consectetur obcaecati voluptatibus quidem aperiam laborum consequuntur iure ipsam ducimus nisi fugiat necessitatibus possimus minima voluptatem sit sequi harum quia.",
  },
];
