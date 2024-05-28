import React from "react";

const TagListSkeleton = () => {
  return (
    <div className="px-7 flex gap-4 overflow-x-auto py-5 mb-5 scrollbar-hidden">
      <div className="h-7 w-7 bg-gray-400 rounded-xl animate-pulse"></div>
      <div className="h-7 w-7 bg-gray-400 rounded-xl animate-pulse"></div>
      <div className="h-7 w-14 bg-gray-400  rounded-xl animate-pulse"></div>
      <div className="h-7 w-20 bg-gray-400 rounded-xl  animate-pulse"></div>
    </div>
  );
};

export default TagListSkeleton;
