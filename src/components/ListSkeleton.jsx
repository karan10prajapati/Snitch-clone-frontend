import React from "react";
import Skeleton from '@mui/material/Skeleton';



const ListSkeleton = ({listsToRender}) => {
  return (
    <>
      {Array(listsToRender)
        .fill(1)
        .map((card,i) => (
          <div key={i}>
          <Skeleton variant="rectangular" height={150} />
          <Skeleton />
          <Skeleton className="w-24" />
        </div>
        ))}
    </>
  );
};

export default ListSkeleton;
