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

export default function RepCarousel() {
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
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="lg:px-3  md:basis-1/2 lg:basis-1/2"
            >
              <div className="px-1">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-start justify-end p-6 ">
                    <div className="">
                      <div className="lg:text-xl text-xs">position</div>
                      <span className="lg:text-xl text-sm   font-semibold">
                        {item.title}
                      </span>
                      <div>
                        <span className="lg:text-xl text-xs">
                          {item.value} / example@gmail.com / #592-6111
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

const items = [
  { value: "a", title: "First Item", text: "Some value 1..." },
  { value: "b", title: "Second Item", text: "Some value 2..." },
  { value: "c", title: "Third Item", text: "Some value 3..." },
  { value: "a", title: "fouth Item", text: "Some value 1..." },
  { value: "b", title: "fifth Item", text: "Some value 2..." },
  { value: "c", title: "sixth Item", text: "Some value 3..." },
];
