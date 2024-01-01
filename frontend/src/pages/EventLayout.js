import { Outlet } from "react-router";
import EventsNavigation from '../components/EventsNavigation'
function EventLayout() {
  return (
    <>
      <EventsNavigation></EventsNavigation>
      <Outlet />
    </>
  );
}

export default EventLayout;
