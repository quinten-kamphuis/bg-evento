import "server-only"

import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import prisma from "./db";
import { EventType } from "./types";
import { capitalize } from "./utils";

export const getEvents = unstable_cache(async (city: string, page: number): Promise<{ events: EventType[], eventsCount: number }> => {
  const events = await prisma.event.findMany({
    where: {
      city: city === 'all' ? undefined : capitalize(city),
    },
    orderBy: {
      date: 'asc',
    },
    take: 6,
    skip: (page - 1) * 6,
  })

  const eventsCount = await prisma.event.count({
    where: {
      city: city === 'all' ? undefined : capitalize(city),
    },
  })

  return { events, eventsCount };
});

export const getEvent = unstable_cache(async (slug: string): Promise<EventType> => {
  const event = await prisma.event.findUnique({
    where: {
      slug: slug,
    },
  })

  if (!event) {
    return notFound()
  }
  return event
})