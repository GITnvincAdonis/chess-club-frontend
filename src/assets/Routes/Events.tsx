import { Button } from "@/components/ui/button";
import MyNavBar from "../My Components/NavBar";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

type Pageditem = {
  title: string;
  desc: string;
  body: string;
};
const EventArr = [
  {
    title: "Event one NAME",
    desc: "Event number one auxilliary text in the array",
    body: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis expedita, laudantium totam recusandae nihil repudiandae voluptatem, aliquam porro alias quam, ex libero enim fuga. Ipsum obcaecati consequuntur quisquam rerum ipsam!",
  },
  {
    title: "Event two name",
    desc: "the auxillary fo rthe second event",
    body: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis expedita, laudantium totam recusandae nihil repudiandae voluptatem, aliquam porro alias quam, ex libero enim fuga. Ipsum obcaecati consequuntur quisquam rerum ipsam!",
  },
  {
    title: "Event 3 nameOaod",
    desc: "The third auxilliary tetxt for the event cards",
    body: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis expedita, laudantium totam recusandae nihil repudiandae voluptatem, aliquam porro alias quam, ex libero enim fuga. Ipsum obcaecati consequuntur quisquam rerum ipsam!",
  },
];
export default function Events() {
  const [pagedEvent, setEvent] = useState<Pageditem | undefined>(undefined);
  return (
    <>
      <MyNavBar></MyNavBar>

      <h1 className="mt-[5rem] container  lg:text-start text-center lg:text-5xl text-3xl font-extrabold">
        Chess Calender Events
      </h1>
      <h1 className=" mb-[1rem] container lg:text-start text-center lg:text-3xl text-2xl font-medium">
        Chess Calender Events
      </h1>
      <div className="container lg:h-[40rem] flex-reverse flex mb-[3rem] lg:flex-row flex-col jusitfy-center items-center">
        <Card className="basis-1/6 border h-[40rem] lg:me-2  px-[6rem] ">
          <div className="lg:m-0 m-3 text-center">PlaceHolder Text</div>
        </Card>

        <Card className="lg:basis-2/5  lg:ms-2 lg:m-0 m-3  h-[40rem]  flex flex-col items-center ">
          <ScrollArea className="p-7">
            <div className="flex w-full   items-center space-x-1">
              <Input className="m-1" placeholder="Search Events.." />
              <Button type="submit">
                <SearchIcon></SearchIcon>
              </Button>
            </div>
            {EventArr.map((item) => {
              const eventParams: Pageditem = {
                title: item.title,
                desc: item.desc,
                body: item.body,
              };
              return (
                <div
                  className=" w-full mt-3 "
                  onClick={() => {
                    setEvent(eventParams);
                    toast({
                      title: `Selected Event: ${item.title}`,
                      description: "Check Paged Container",
                    });
                  }}
                >
                  <EventCard
                    title={item.title}
                    auxText={item.desc}
                    body={item.body}
                  ></EventCard>
                </div>
              );
            })}
          </ScrollArea>
        </Card>
        <div className="basis-2/3 h-[40rem] flex flex-col lg:m-2  m-3 w-full">
          <Card className=" basis-1/5  h-[40rem] rounded-b-none lg:m-0 mx-3">
            {pagedEvent && (
              <CardHeader>
                <div>
                  <h2 className="text-3xl font-bold">{pagedEvent.title}</h2>
                  <h2 className="text-md font-light">{pagedEvent.desc}</h2>
                </div>
                <div className="space-x-2">
                  <Badge>recreational</Badge>
                  <Badge variant={"outline"}>recreational</Badge>
                </div>
              </CardHeader>
            )}
          </Card>
          <Card className="basis-4/5 rounded-t-none lg:m-0 mx-3">
            {pagedEvent && (
              <>
                <CardHeader></CardHeader>
                <CardContent>
                  <p className="text-xl">{pagedEvent.body}</p>
                </CardContent>
              </>
            )}
            {!pagedEvent && (
              <div className="w-full h-full p-5 flex flex-col justify-center items-center">
                <SearchIcon size={50}></SearchIcon>
                <h2 className="font-bold lg:text-3xl text-xl">
                  No Event Currently Selected
                </h2>
                <h3 className="lg:font-semibold">Choose an event to inspect</h3>
              </div>
            )}
          </Card>
        </div>
      </div>
    </>
  );
}

function EventCard(props: { title: string; auxText: string; body: string }) {
  const { title, auxText, body } = props;
  return (
    <>
      <button className="flex justify-start text-start">
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold m-0">{title}</h3>
                <h3 className="font-light text-sm m-0 ">{auxText}</h3>
              </div>
              <div>10/30/2006</div>
            </div>
          </CardHeader>
          <CardContent>
            <p>{body}</p>
          </CardContent>
          <CardFooter className="space-x-2">
            <Badge>recreational</Badge>
            <Badge variant="secondary">TOURNAMENT</Badge>
          </CardFooter>
        </Card>
      </button>
    </>
  );
}
