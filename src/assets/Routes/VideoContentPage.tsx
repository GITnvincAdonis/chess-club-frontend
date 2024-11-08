import { Card, CardFooter } from "@/components/ui/card";
import MyNavBar from "../My Components/NavBar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import "@vidstack/react/player/styles/base.css";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";

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
                    <DialogContent className="sm:max-w-[825px]  p-0 bg-black border-none aspect-video">
                      <VideoComponent></VideoComponent>
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
function VideoComponent() {
  return (
    <MediaPlayer
      src="https://res.cloudinary.com/drh91o9pt/video/upload/v1730135802/y8iuviswnbl0epscimhb.mp4"
      viewType="video"
      streamType="on-demand"
      logLevel="warn"
      crossOrigin
      playsInline
      title="Placeholder title"
      poster="https://files.vidstack.io/sprite-fight/poster.webp"
    >
      <MediaProvider></MediaProvider>
      <DefaultVideoLayout
        thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
        icons={defaultLayoutIcons}
      />
    </MediaPlayer>
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
