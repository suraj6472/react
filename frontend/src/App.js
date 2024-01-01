import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import EditEventPage from "./pages/EditEvent";
import EventDetailPage, {
  loader as eventDetailLoader,
} from "./pages/EventDetail";
import EventList, { loader as eventLoader } from "./pages/Events";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import EventLayout from "./pages/EventLayout";
import ErrorPage from "./pages/Error";

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
            { path: "new", element: <NewEventPage /> },
            {
              path: ":eventId",
              element: <EventDetailPage />,
              loader: eventDetailLoader,
            },
            { path: ":eventId", element: <EditEventPage /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
