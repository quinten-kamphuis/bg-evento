import H1 from "@/components/h1";
import { getEvent } from "@/lib/server-utils";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const event = await getEvent(params.slug);
  return {
    title: `${event.name} - Evento`,
    description: `Details about the event ${event.name}`,
  };
};

export const generateStaticParams = async () => {
  const events = ["comedy-extravaganza", "dj-practice-session"];
  return events.map((event) => ({
    params: {
      slug: event,
    },
  }));
};

const EventPage = async ({ params }: Props) => {
  const event = await getEvent(params.slug);

  return (
    <main>
      <section
        className="relative overflow-hidden flex justify-center 
      items-center py-14 md:py-20"
      >
        <Image
          src={event.imageUrl}
          className="object-cover z-0 blur-3xl"
          alt=""
          fill
          quality={10}
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />

        <div className="z-1 flex flex-col lg:flex-row gap-6 lg:gap-16 relative">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>

            <button
              className="bg-white/20 text-lg capitalize bg-blur mt-5 lg:mt-auto w-[95vw] sm:w-full 
            rounded-md border-white/10 border-2 py-2 state-effects"
            >
              Get tickets
            </button>
          </div>
        </div>
      </section>

      <div className="text-center">
        <section className="max-w-[1100px] mx-auto px-[20px] my-16">
          <h2 className="text-2xl">About this event</h2>
          <p className="text-lg leading-8 text-white/75">{event.description}</p>
        </section>
        <section className="max-w-[1100px] mx-auto px-[20px]">
          <h2 className="text-2xl">Location</h2>
          <p className="text-lg leading-8 text-white/75">{event.location}</p>
        </section>
      </div>
    </main>
  );
};

export default EventPage;
