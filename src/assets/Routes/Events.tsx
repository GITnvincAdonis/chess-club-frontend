import { Button } from "@/components/ui/button";
import MyNavBar from "../My Components/NavBar";
import { Input } from "@/components/ui/input";
import { CarTaxiFrontIcon, SearchIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { GetEvents, GetSearchEvents } from "@/APIs/Api";
import { EventCalender } from "../ShadCNComponents/EventCalender";
import { Skeleton } from "@/components/ui/skeleton";

type Pageditem = {
  title: string;
  desc: string;
  body: string;
  date: string;
};

export default function Events() {
  const [pagedEvent, setEvent] = useState<Pageditem | undefined>(undefined);
  const [searchInput, SetSearchInput] = useState("");

  const [eventLoadState, ToggleEventLoadState] = useState(true);

  const {
    data: fetchedEvents,
    isLoading,
    isError,
    error,
    isFetched: isFetched1,
  } = useQuery({
    queryFn: async () => GetEvents(),
    queryKey: ["events"],
    staleTime: Infinity,
  });

  if (isLoading) console.log("is loading events");
  if (isError) console.log(error);
  const {
    data: fetchedSearchEvents,
    isLoading: isLoading2,
    isError: isError2,
    error: error2,
    isFetched: isFetched2,
  } = useQuery({
    queryFn: async () => GetSearchEvents(searchInput),
    queryKey: ["events", searchInput],
    staleTime: Infinity,
    enabled: searchInput !== "", // Only fetch when searchInput is not empty
  });

  if (isLoading2) console.log("is loading events (2)");
  if (isError2) console.log(error2);

  useEffect(() => {
    if (isLoading2 || isLoading) ToggleEventLoadState(true);
  }, [isLoading2, isLoading]);
  useEffect(() => {
    if (isFetched1 || isFetched2) ToggleEventLoadState(false);
  }, [isFetched1, isFetched2]);
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
        <Card className="basis-1/6  h-[40rem] lg:me-2  ">
          <div className="lg:m-0 m-3 text-center">
            {fetchedEvents && (
              <EventCalender
                FetchedEvents={fetchedEvents}
                setPagedEvent={setEvent}
              ></EventCalender>
            )}
            {!fetchedEvents && <Calendar></Calendar>}
          </div>
        </Card>

        <Card className="lg:basis-2/5    lg:ms-2 lg:m-0 m-3  h-[40rem]  flex flex-col items-center ">
          <ScrollArea className="p-7 w-full">
            <div className="flex w-full  items-center space-x-1">
              <Input
                onChange={(e) => {
                  SetSearchInput(e.target.value || "");
                }}
                className="m-1"
                placeholder="Search Events.."
              />
              <Button type="submit">
                <SearchIcon></SearchIcon>
              </Button>
            </div>
            {!fetchedSearchEvents &&
              searchInput == "" &&
              fetchedEvents?.map((item) => {
                const eventParams: Pageditem = {
                  date: item.event_duration.split("T")[0],
                  title: item.event_name,
                  desc: item.event_details,
                  body: item.event_description,
                };
                return (
                  <div
                    className=" w-full mt-3 "
                    onClick={() => {
                      setEvent(eventParams);
                      toast({
                        title: `Selected Event: ${item.event_name}`,
                        description: "Check Paged Container",
                      });
                    }}
                  >
                    <EventCard
                      date={item.event_duration.split("T")[0]}
                      title={item.event_name}
                      auxText={item.event_details}
                      body={item.event_display_description}
                    ></EventCard>
                  </div>
                );
              })}

            {fetchedSearchEvents &&
              fetchedSearchEvents.length > 0 &&
              fetchedSearchEvents?.map((item) => {
                const eventParams: Pageditem = {
                  date: item.event_duration.split("T")[0],
                  title: item.event_name,
                  desc: item.event_details,
                  body: item.event_description,
                };
                return (
                  <div
                    className=" w-full mt-3 "
                    onClick={() => {
                      setEvent(eventParams);
                      toast({
                        title: `Selected Event: ${item.event_name}`,
                        description: "Check Paged Container",
                      });
                    }}
                  >
                    <EventCard
                      date={item.event_duration.split("T")[0]}
                      title={item.event_name}
                      auxText={item.event_details}
                      body={item.event_display_description}
                    ></EventCard>
                  </div>
                );
              })}
            {fetchedSearchEvents &&
              fetchedSearchEvents.length == 0 &&
              searchInput != "" && (
                <div className="w-full h-full p-5 flex flex-col justify-center items-center">
                  <CarTaxiFrontIcon size={60}></CarTaxiFrontIcon>
                  <h2 className="font-bold lg:text-3xl text-xl">
                    No Event mathcing search
                  </h2>
                </div>
              )}
            {eventLoadState &&
              Array.from({ length: 3 }).map(() => {
                return (
                  <div className=" w-full mt-3 ">
                    <DefaultEventCard></DefaultEventCard>
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

function EventCard(props: {
  title: string;
  auxText: string;
  body: string;
  date: string;
}) {
  const { title, auxText, body, date } = props;
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
              <div>{date}</div>
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
function DefaultEventCard() {
  return (
    <>
      <button className="flex justify-start text-start w-full">
        <Card className="w-full">
          <CardHeader>
            <div className="flex justify-between ">
              <div className="space-y-1">
                <h3 className="font-bold m-0">
                  <Skeleton className="w-[200px] h-[20px] rounded-full" />
                </h3>
                <h3 className="font-light text-sm m-0 ">
                  <Skeleton className="w-[200px] h-[10px] rounded-full" />
                </h3>
              </div>
              <div>
                <Skeleton className="w-[50px] h-[20px] rounded-full" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col space-y-2 ">
            <Skeleton className="w-[250px] h-[20px] rounded-full" />
            <Skeleton className="lg:w-[350px] h-[20px] rounded-full" />
            <Skeleton className="w-[130px] h-[20px] rounded-full" />
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
