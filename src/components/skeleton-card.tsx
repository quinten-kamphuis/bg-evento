import React from "react";
import Skeleton from "./skeleton";

type Props = {};

const SkeletonCard = (props: Props) => {
  return (
    <div className="space-y-4">
      <Skeleton className="w-12 h-12 rounded-full" />
      <Skeleton className="w-[250px] h-4" />
      <Skeleton className="w-[200px] h-4" />
    </div>
  );
};

export default SkeletonCard;
