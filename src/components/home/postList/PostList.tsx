"use client";

import Loader from "@/components/icons/Loader";
import PostItem from "@/components/post/postItem/PostItem";
import usePostInfiniteQuery from "@/hooks/post/usePostInfiniteQuery";
import React from "react";

const PostList = () => {
  const { pages, isFetching } = usePostInfiniteQuery();

  return (
    <>
      {pages[0].items.length === 0 && <p>게시글이 없습니다.</p>}

      <ul>
        {pages.map((page) => {
          return page.items.map((post: any) => {
            return <PostItem key={post.id} post={post} />;
          });
        })}
      </ul>
      {isFetching && (
        <div className="flex justify-center pb-4">
          <Loader />
        </div>
      )}
    </>
  );
};

export default PostList;
