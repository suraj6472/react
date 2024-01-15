import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  console.log(data);
  return <EventForm event={data.event} method="PATCH" />;
}

export default EditEventPage;
