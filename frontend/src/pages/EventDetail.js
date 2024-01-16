import { Suspense } from "react";
import EventItem from "../components/EventItem";
import { useRouteLoaderData, json, redirect, Await, defer } from "react-router-dom";
import EventsList from "../components/EventsList";
function EventDetailPage() {
  const {event, events} = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={event}>
        { eventData => <EventItem event={eventData} /> }
      </Await>
    </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        { eventData => <EventsList events={eventData} /> }
      </Await>
    </Suspense>
    </>
  );
}

export default EventDetailPage;

async function loadEvents()
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

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could fetch details" },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

export async function loader({ request, params }) {
  const id = params.eventId;
    return defer({
      event: await loadEvent(id), // using await to control data rendering
      events: loadEvents()
    })
  
}

export async function action({request, params}) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method
  })

  if (!response.ok) {
    throw json(
      { message: "Could not delete the event" },
      {
        status: 500,
      }
    );
  }

  return redirect('/events')

}
