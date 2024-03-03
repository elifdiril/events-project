import EventList from "@/components/EventList";
import Header from "@/components/Header";
import EventProps from "@/interfaces/EventProps";

async function getData() {
  const res = await fetch("http://localhost:5000/events");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data: EventProps[] = await getData();
  return (
    <main>
      <Header />
      <EventList events={data} />
    </main>
  );
}
