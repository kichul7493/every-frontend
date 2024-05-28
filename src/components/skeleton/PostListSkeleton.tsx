import React from "react";

const PostListSkeleton = () => {
  return (
    <div>
      <PostItemSkeleton />
      <PostItemSkeleton />
      <PostItemSkeleton />
      <PostItemSkeleton />
      <PostItemSkeleton />
    </div>
  );
};

const PostItemSkeleton = () => {
  return (
    <div className="mx-7 pb-4 mb-4 border-b-[1px] border-b-white">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-gray-400  animate-pulse"></div>
        <div className="w-8 h-4 rounded-xl bg-gray-400 animate-pulse"></div>
        <p className="w-16 h-4 rounded-xl bg-gray-400 animate-pulse"></p>
      </div>
      <h2 className="w-[300px] h-6 mb-5 rounded-xl bg-gray-400 animate-pulse"></h2>
      <div className="w-20 h-7 rounded-xl bg-gray-400 animate-pulse"></div>
    </div>
  );
};

export default PostListSkeleton;
