import Skeleton from "@/components/skeleton";
import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="animate-pulse flex flex-col items-center gap-4 pt-28">
      <Skeleton className="w-[550px]" />
      <Skeleton className="w-[400px]" />
      <Skeleton className="w-[430px]" />
    </div>
  );
};

export default Loading;
