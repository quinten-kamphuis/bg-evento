import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

type Props = {
  city: string;
  page: number;
  eventsCount: number;
};

const btnClasses = `text-white flex items-center gap-2 px-5 py-3 bg-white/5 rounded-md 
opacity-75 hover:opacity-100 transition text-xs`;

const PaginationControls = ({ city, page, eventsCount }: Props) => {
  const totalPages = Math.ceil(eventsCount / 6);
  return (
    <section className="flex justify-between w-full">
      {page > 1 ? (
        <Link href={`/events/${city}?page=${page - 1}`} className={btnClasses}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {page < totalPages ? (
        <Link href={`/events/${city}?page=${page + 1}`} className={btnClasses}>
          Next
          <ArrowRightIcon />
        </Link>
      ) : (
        <div />
      )}
    </section>
  );
};

export default PaginationControls;
