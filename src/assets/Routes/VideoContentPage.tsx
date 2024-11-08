import { Card, CardFooter } from "@/components/ui/card";
import MyNavBar from "../My Components/NavBar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function VideoContentPage() {
  return (
    <>
      <MyNavBar></MyNavBar>
      <div className="h-screen flex items-center justify-center">
        <div className="w-[70rem] h-full mt-[10rem]">
          <h1 className="text-4xl font-bold text-center">
            Beginner Chess Videos
          </h1>
          <h3 className="text-1xl text-center">
            videos created to help beginner chess club members of the sport of
            chess
          </h3>
          <div className="flex flex-wrap justify-center">
            {videos.map((item) => {
              return (
                <>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button>
                        {" "}
                        <VideoContainer
                          title={item.title}
                          desc={item.desc}
                        ></VideoContainer>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[825px] bg-black border-none aspect-video">
                      <DialogHeader>
                        <DialogTitle className="text-white">
                          Video: {item.title}
                        </DialogTitle>
                        <DialogDescription>{item.desc}</DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
function VideoContainer(props: { title: string; desc: string }) {
  const { title, desc } = props;
  return (
    <div className="w-[300px] mx-2 mt-7">
      <Card className="aspect-video">
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
      <div className="">
        <div className="mt-2 text-2xl font-semibold lg:text-start text-center">
          {title}
        </div>
        <div className="lg:text-start text-center">{desc}</div>
      </div>
    </div>
  );
}

const videos = [
  {
    title: "Video one",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum magnam ex",
  },
  {
    title: "Video two",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum magnam ex",
  },
  {
    title: "Video three",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum magnam ex",
  },
  {
    title: "Video four",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum magnam ex",
  },
  {
    title: "Video five",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum magnam ex",
  },
  {
    title: "Video six",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum magnam ex",
  },
];
