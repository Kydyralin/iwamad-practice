import EventCard from "../components/EventCard.tsx";
import { events } from "../data/events.ts";

export default function EventsPage() {
  return (
    <section>
      <h1>Events</h1>
      <div className="card-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
