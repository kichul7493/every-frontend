"use client";

import getPostsWithTag from "@/actions/posts/getPostsWithTag";
import PostItem from "@/components/post/postItem/PostItem";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React from "react";

const PostList = () => {
  const searchParams = useSearchParams();

  const tag = searchParams.get("tag") || "all";

  const { data } = useSuspenseQuery({
    queryKey: ["posts", tag],
    queryFn: () => getPostsWithTag(tag),
  });

  return (
    <div>
      {data.posts.length === 0 && <p>게시글이 없습니다.</p>}
      {data.posts?.map((post: any) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostList;
