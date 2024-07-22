import Skeleton from "@/components/skeleton";
import SkeletonCard from "@/components/skeleton-card";
import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="flex flex-wrap justify-center max-w-[1100px] mx-auto px-[20px] py-24 gap-20">
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default Loading;
