import { Calendar } from "@/components/ui/calendar";
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

export function EventCalender(props: { FetchedEvents: Event[] }) {
  const { FetchedEvents } = props;
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
          if (
            selected.find((item) => item.toDateString() === day.toDateString())
          ) {
            console.log(day.toDateString());
          }
        }}
      />
    </div>
  );
}
