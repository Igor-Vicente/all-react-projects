import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import { EventItem } from "../components/EventItem";
import { Suspense } from "react";
import EventsList from "../components/EventsList";

export const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

//client-side
export async function loader({ request, params }) {
  const id = params.id;

  return defer({ event: await loaderEvent(id), events: loaderEvents() });
}

export async function loaderEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok)
    throw json({ message: "Could not fetch event." }, { status: 500 });
  else {
    const data = await response.json();
    return data.event;
  }
}

export async function loaderEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok)
    throw json({ message: "Could not fetch events." }, { status: 500 });
  else {
    const data = await response.json();
    return data.events;
  }
}

export async function action({ params, request }) {
  const response = await fetch(`http://localhost:8080/events/${params.id}`, {
    method: request.method,
  });

  if (!response.ok)
    throw json({ message: "Could not delete event." }, { status: 500 });

  return redirect("/events");
}
