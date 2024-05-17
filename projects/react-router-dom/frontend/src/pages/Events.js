import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";
import { Suspense } from "react";

export function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loaderEvents) => <EventsList events={loaderEvents} />}
      </Await>
    </Suspense>
  );
}

//client-side
export async function loaderEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok)
    // return { success: false, message: "could not fetch events." };
    // throw new Response(JSON.stringify({ message: "could not fetch events" }), {
    //   status: 500,
    // });

    throw json({ message: "Could not fetch events." }, { status: 500 });
  else {
    const data = await response.json();
    return data.events;
  }
}

export function loader() {
  return defer({ events: loaderEvents() });
}
