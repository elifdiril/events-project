"use client";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import EventList from "./EventList";
import EventProps from "@/interfaces/EventProps";

const HomePage: React.FC<{ events: EventProps[] }> = ({ events }) => {
  return <NextUIProvider>
    <EventList events={events} />
  </NextUIProvider>;
};

export default HomePage;
