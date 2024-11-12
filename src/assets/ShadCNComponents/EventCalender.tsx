import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

type Event = {
  event_name: string;
  event_description: string;
  event_display_description: string;
  event_details: string;
  event_venue: string;
  event_duration: string;
};
export function EventCalender(props: { FetchedEvents: Event[] }) {
  const { FetchedEvents } = props;
  const [selected, setSelected] = useState<Date[]>([
    new Date(2024, 10, 5), // Example preexisting date
    new Date(2024, 10, 12), // Another example date
  ]);


  const eventDates = FetchedEvents.map((item) => new Date(item.event_duration));
  setSelected((prevSelected) => [...prevSelected, ...eventDates]);

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
