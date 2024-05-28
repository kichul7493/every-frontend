import Header from "@/components/home/header/Header";
import PostList from "@/components/home/postList/PostList";
import TagList from "@/components/home/tagList/TagList";
import PostListSkeleton from "@/components/skeleton/PostListSkeleton";
import TagListSkeleton from "@/components/skeleton/TagListSkeleton";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Header />
      <Suspense fallback={<TagListSkeleton />}>
        <TagList />
      </Suspense>
      <Suspense fallback={<PostListSkeleton />}>
        <PostList />
      </Suspense>
    </>
  );
}
