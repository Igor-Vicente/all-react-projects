import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { EventsPage, loader as loaderEvents } from "./pages/Events";
import {
  EventDetailPage,
  loader as loaderEvent,
  action as deleteEventAction,
} from "./pages/EventDetail";
import { NewEventPage } from "./pages/NewEvent";
import { EditEventPage } from "./pages/EditEvent";
import { RootLayout } from "./pages/Root";
import { EventsRootLayout } from "./pages/EventsRoot";
import { ErrorPage } from "./pages/Error";
import { NewsletterPage, action as newsletterAction } from "./pages/Newsletter";
import { action as manipulateEventAction } from "./components/EventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: loaderEvents,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: loaderEvent,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
