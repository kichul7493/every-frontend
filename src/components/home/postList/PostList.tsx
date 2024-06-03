"use client";

import getPostsWithTag from "@/actions/posts/getPostsWithTag";
import Loader from "@/components/icons/Loader";
import PostItem from "@/components/post/postItem/PostItem";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const PostList = () => {
  const searchParams = useSearchParams();

  const tag = searchParams.get("tag") || "all";

  const { fetchNextPage, hasNextPage, isPending, isFetching, data } =
    useSuspenseInfiniteQuery({
      queryKey: ["posts", tag],
      queryFn: ({ pageParam }) => getPostsWithTag(tag, pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + window.innerHeight >= document.body.scrollHeight &&
        hasNextPage
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  return (
    <div>
      {data.pages[0].items.length === 0 && <p>게시글이 없습니다.</p>}
      {data.pages.map((page) => {
        return page.items.map((post: any) => {
          return <PostItem key={post.id} post={post} />;
        });
      })}
      {isFetching && (
        <div className="flex justify-center pb-4">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default PostList;
