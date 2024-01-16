import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { json, defer, Await, useLoaderData } from "react-router";
// import { useLoaderData } from "react-router";

function EventsPage() {
  const { events } = useLoaderData();
  return <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
    <Await resolve={events}>
      { eventData => <EventsList events={eventData} /> }
    </Await>
  </Suspense>
}

export default EventsPage;

async function eventData()
{
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch data" }), {
    //   status: 500,
    // });

    throw json({ message: "Could not fetch data" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader() {
  return defer({
    events: eventData()
  })
}
