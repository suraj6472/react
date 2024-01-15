import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import EditEventPage from "./pages/EditEvent";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as eventDetailAction,
} from "./pages/EventDetail";
import EventList, { loader as eventLoader } from "./pages/Events";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import EventLayout from "./pages/EventLayout";
import ErrorPage from "./pages/Error";
import { action as manipulateEventAction } from "./components/EventForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/events",
          element: <EventLayout />,
          children: [
            {
              path: "",
              element: <EventList />,
              loader: eventLoader,
            },
            {
              path: "new",
              element: <NewEventPage />,
              action: manipulateEventAction,
            },
            {
              path: ":eventId",
              id: "event-detail",
              loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: eventDetailAction,
                },
                {
                  path: "edit",
                  element: <EditEventPage />,
                  action: manipulateEventAction,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
