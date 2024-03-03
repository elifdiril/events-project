import EventProps from "@/interfaces/EventProps";
import React from "react";
import EventItem from "./EventItem";

type EventListProps = {
    events: EventProps[];
  }

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div>
      {events.map((event: EventProps) => (
        <EventItem key={event?.id} {...event} />
      ))}
    </div>
  );
};

export default EventList;
