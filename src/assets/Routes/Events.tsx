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

export default function Events() {
  return (
    <>
      <MyNavBar></MyNavBar>

      <h1 className="mt-[5rem] container  lg:text-start text-center lg:text-5xl text-3xl font-extrabold">
        Chess Calender Events
      </h1>
      <h1 className=" mb-[1rem] container lg:text-start text-center lg:text-3xl text-2xl font-medium">
        Chess Calender Events
      </h1>
      <div className=" container h-screen flex mb-[10rem] lg:flex-row flex-col jusitfy-center items-center">
        <div className="basis-1/4 border h-full lg:m-0 m-3 w-full">
          <div className="lg:m-0 m-3 border text-center">PlaceHolder Text</div>
        </div>
        <div className="lg:basis-1/2 basis-4/2  border lg:ms-2 lg:m-0 m-3 p-7 h-full flex flex-col items-center overflow-scroll">
          <div className="flex w-full   items-center space-x-1">
            <Input className="" placeholder="Search Events.." />
            <Button type="submit">
              <SearchIcon></SearchIcon>
            </Button>
          </div>
          {EventArr.map((item) => {
            return (
              <div className=" w-full mt-3 ">
                <EventCard
                  title={item.title}
                  auxText={item.desc}
                  body={item.body}
                ></EventCard>
              </div>
            );
          })}
        </div>
        <div className="basis-3/4 h-full lg:m-2 border m-3 w-full">
          <Card className="h-40 lg:m-0 m-3"></Card>
        </div>
      </div>
    </>
  );
}

function EventCard(props: { title: string; auxText: string; body: string }) {
  const { title, auxText, body } = props;
  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold  m-0">{title}</h3>
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
    </>
  );
}

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
