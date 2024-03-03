import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
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
    <main className="dark text-foreground bg-background">
      <Header />
      <HomePage events={data} />
    </main>
  );
}
