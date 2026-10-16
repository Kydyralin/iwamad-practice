import { Link, useParams } from "react-router";
import { events } from "../data/events.ts";
import EventSignupForm from "../components/EventSignupForm.tsx";
export default function EventDetailsPage() {
  const { eventId } = useParams();
  // useParams() gives a string ("2"); the ids in the array are numbers.
  const event = events.find((item) => item.id === Number(eventId));

  if (!event) {
    return (
      <section>
        <h1>Event not found</h1>
        <p>No event with id {eventId}.</p>
        <Link to="/events">Back to all events</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>{event.title}</h1>
      <p>
        {event.date} · {event.place}
      </p>
      <EventSignupForm event={event} />
      <p>
        <Link to="/events">Back to all events</Link>
      </p>
    </section>
  );
}
