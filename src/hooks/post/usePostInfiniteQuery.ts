import getPostsWithTag from "@/actions/posts/getPostsWithTag";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const usePostInfiniteQuery = () => {
  const searchParams = useSearchParams();

  const tag = searchParams.get("tag") || "all";

  const { fetchNextPage, hasNextPage, isFetching, data } =
    useSuspenseInfiniteQuery({
      queryKey: ["posts", tag],
      queryFn: ({ pageParam }) => getPostsWithTag(tag, pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.nextPage,
      staleTime: 0,
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

  return {
    pages: data.pages,
    isFetching,
  };
};

export default usePostInfiniteQuery;
