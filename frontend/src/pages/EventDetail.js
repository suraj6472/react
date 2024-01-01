import EventItem from "../components/EventItem";
import { useRouteLoaderData, json } from "react-router-dom";
function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  console.log(data);
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could fetch details" },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
