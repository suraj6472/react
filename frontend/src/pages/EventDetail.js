import { useParams } from "react-router";
import { Link } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>{params.eventId}</h1>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default EventDetailPage;
