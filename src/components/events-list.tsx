import EventCard from "./event-card";
import { getEvents } from "@/lib/server-utils";
import PaginationControls from "./pagination-controls";

type Props = {
  city: string;
  page?: number;
};

const EventsList = async ({ city, page = 1 }: Props) => {
  const { events, eventsCount } = await getEvents(city, page);

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls city={city} page={page} eventsCount={eventsCount} />
    </section>
  );
};

export default EventsList;
