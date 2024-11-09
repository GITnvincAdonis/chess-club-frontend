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
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { GetVideos } from "@/APIs/Api";
import { useEffect, useState } from "react";

type Video = {
  video_title: string;
  video_description: string;
  video_resoruce_id: string;
};

export default function VideoContentPage() {
  const [fetchedVideos, setVideos] = useState<Video[]>([]);
  const { data, isError, error, isLoading } = useQuery({
    queryFn: async () => GetVideos(),
    queryKey: ["chess-videos"],
  });

  if (isError) console.log(error.message);
  if (isLoading) console.log("current loading videos");

  useEffect(() => {
    if (data) setVideos(data);
  }, [data]);

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
            {fetchedVideos.length > 0 &&
              fetchedVideos.map((item) => {
                return (
                  <>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button>
                          {" "}
                          <VideoContainer
                            title={item.video_title}
                            desc={item.video_description}
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
            {fetchedVideos.length == 0 &&
              Array.from({ length: 4 }).map(() => {
                return <DefaultVideoContainer></DefaultVideoContainer>;
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
        <CardFooter className="flex justify-between "></CardFooter>
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

function DefaultVideoContainer() {
  return (
    <div className="w-[300px] mx-2 mt-7">
      <Card className="aspect-video">
        <CardFooter className="flex justify-between "></CardFooter>
      </Card>
      <div className="">
        <div className="mt-2 text-2xl font-semibold lg:text-start text-center">
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
        </div>
        <div className="lg:text-start text-center">
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
        </div>
      </div>
    </div>
  );
}
export function VideoComponent(props: {
  disableControls?: any;
  noInteract?: any;
}) {
  const { disableControls, noInteract } = props;
  return (
    <>
      {noInteract && (
        <MediaPlayer
          muted
          autoPlay
          loop
          className="border-inherit "
          src="https://res.cloudinary.com/drh91o9pt/video/upload/v1730135802/y8iuviswnbl0epscimhb.mp4"
          streamType="on-demand"
          logLevel="warn"
          crossOrigin
          title="Placeholder title"
          poster="https://files.vidstack.io/sprite-fight/poster.webp"
        >
          <MediaProvider className="border-inherit"></MediaProvider>
          {!disableControls && (
            <DefaultVideoLayout icons={defaultLayoutIcons} />
          )}
        </MediaPlayer>
      )}
      {!noInteract && (
        <MediaPlayer
          className="border-inherit "
          src="https://res.cloudinary.com/drh91o9pt/video/upload/v1730135802/y8iuviswnbl0epscimhb.mp4"
          streamType="on-demand"
          logLevel="warn"
          crossOrigin
          title="Placeholder title"
          poster="https://files.vidstack.io/sprite-fight/poster.webp"
        >
          <MediaProvider className="border-inherit"></MediaProvider>
          {!disableControls && (
            <DefaultVideoLayout icons={defaultLayoutIcons} />
          )}
        </MediaPlayer>
      )}
    </>
  );
}

