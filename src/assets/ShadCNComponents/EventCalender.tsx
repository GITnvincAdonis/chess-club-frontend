import { Calendar } from "@/components/ui/calendar";
import { toast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";

type Event = {
  event_name: string;
  event_description: string;
  event_display_description: string;
  event_details: string;
  event_venue: string;
  event_duration: string;
};

function createUTCDate(dateString: string) {
  const [year, month, day] = dateString.split("T")[0].split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day + 1));
}

export function EventCalender(props: {
  FetchedEvents: Event[];
  setPagedEvent: CallableFunction;
}) {
  const { FetchedEvents, setPagedEvent } = props;
  console.log(FetchedEvents);
  const [selected, setSelected] = useState<Date[]>([]);

  useEffect(() => {
    const eventDates = FetchedEvents.map((item) =>
      createUTCDate(item.event_duration)
    );
    setSelected((prev) => [...prev, ...eventDates]);
  }, [FetchedEvents]);

  return (
    <div className="flex flex-col">
      <Calendar
        mode="multiple"
        selected={selected}
        onDayClick={(day) => {
          let conditonMatched = selected.find(
            (item) => item.toDateString() === day.toDateString()
          );
          if (conditonMatched) {
            const eventMatched = FetchedEvents.find(
              (item) =>
                createUTCDate(item.event_duration).toDateString() ===
                day.toDateString()
            );

            if (eventMatched) {
              setPagedEvent({
                date: eventMatched.event_duration.split("T")[0],
                title: eventMatched.event_name,
                desc: eventMatched.event_details,
                body: eventMatched.event_description,
              });
              toast({
                title: `Selected Event: ${eventMatched.event_name}`,
                description: "Check Paged Container",
              });
            }
          }
        }}
      />
    </div>
  );
}
