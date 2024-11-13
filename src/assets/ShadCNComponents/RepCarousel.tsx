import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

type Repofficials = {
  name: string;
  club_position: string;
  email_contact: string;
  image_cloud_id: string;
};
export default function RepCarousel(props: { officials: Repofficials[] }) {
  const { officials } = props;
  const [api, setApi] = React.useState<CarouselApi>();
  const [_current, setCurrent] = React.useState(0);
  const [_count, setCount] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  );
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-s">
      <Carousel
        plugins={[plugin.current]}
        setApi={setApi}
        className="p-1 lg:w-[60rem] w-[15rem]"
      >
        <CarouselContent>
          {officials.flat(1).map((item, index) => (
            <>
              {/* {console.log(item.name)}
              {console.log(item.club_position)}
              {console.log(item.email_contact)} */}
              <CarouselItem
                key={index}
                className="lg:px-3  md:basis-1/2 lg:basis-1/2"
              >
                <div className="p-8">
                  <Card className="drop-shadow-xl overflow-hidden border-dashed border-2">
                    <div className="h-0">
                      <img src="https://res.cloudinary.com/drh91o9pt/image/upload/v1731460031/default-profile-picture1_emnyvl.jpg"></img>
                    </div>
                    <CardContent className="flex flex-col aspect-square items-start justify-end p-6 ">
                      <div className="">
                        <div className="lg:text-xl text-xs">
                          {item.club_position}
                        </div>
                        <span className="lg:text-2xl text-sm   font-semibold">
                          {item.name}
                        </span>
                        <div>
                          <span className="lg:text-xl text-xs">
                            a / {item.email_contact}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export function DefaultOfficialCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [_current, setCurrent] = React.useState(0);
  const [_count, setCount] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  );
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-s">
      <Carousel
        plugins={[plugin.current]}
        setApi={setApi}
        className="p-1 lg:w-[60rem] w-[15rem]"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_item, index) => (
            <CarouselItem
              key={index}
              className="lg:px-3 md:basis-1/2 lg:basis-1/2"
            >
              <div className="p-8">
                <Card className="drop-shadow-xl border-dashed border-2">
                  <CardContent className="flex flex-col aspect-square items-start justify-end p-6 ">
                    <div className="">
                      <div className="lg:text-xl text-xs my-1">
                        <Skeleton className="lg:w-[100px] w-[50px] h-[20px] rounded-full" />
                      </div>
                      <div className="lg:text-xl text-sm   font-semibold my-1">
                        <Skeleton className="lg:w-[300px] w-[100px] h-[20px] rounded-full" />
                      </div>
                      <div>
                        <span className="lg:text-xl text-xs my-1">
                          <Skeleton className="lg:w-[200px] w-[70px] h-[20px] rounded-full" />
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
