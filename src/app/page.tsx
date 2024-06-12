import { auth } from "@/auth";
import Header from "@/components/home/header/Header";
import PostList from "@/components/home/postList/PostList";
import TagList from "@/components/home/tagList/TagList";
import PostListSkeleton from "@/components/skeleton/PostListSkeleton";
import TagListSkeleton from "@/components/skeleton/TagListSkeleton";
import { Suspense } from "react";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <Header isLogin={!!session} />
      <Suspense fallback={<TagListSkeleton />}>
        <TagList />
      </Suspense>
      <Suspense fallback={<PostListSkeleton />}>
        <PostList />
      </Suspense>
    </>
  );
}
