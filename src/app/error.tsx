"use client";

import H1 from "@/components/h1";
import React from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const error = ({ error, reset }: Props) => {
  return (
    <main className="flex-center flex-col h-[70vh] text-center gap-10">
      <H1>{error.message}</H1>
      <button onClick={reset} className="text-lg border-2 p-4 rounded-lg">
        Try again
      </button>
    </main>
  );
};

export default error;
