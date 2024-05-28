import { getPosts } from "@/actions/posts/getPosts";
import getTags from "@/actions/tags/getTags";
import { getSession } from "@/actions/users/auth";
import PostItem from "@/components/post/postItem/PostItem";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    tag: string;
  };
}) {
  const tag = searchParams.tag || "all";

  const session = await getSession();

  const posts = await getPosts(tag);

  const tags = await getTags();

  return (
    <>
      <div className="py-3 flex justify-between items-center mx-7">
        <span className="text-3xl font-bold leading-8">Every</span>
        {session ? (
          <Link
            href="/post/create"
            className="bg-main py-[6px] px-3 rounded-3xl font-bold "
          >
            글쓰기
          </Link>
        ) : (
          <Link
            href="/login"
            className="bg-main py-[6px] px-3 rounded-3xl font-bold "
          >
            로그인
          </Link>
        )}
      </div>
      <div className="px-7 flex gap-4 overflow-x-auto py-5 mb-5 scrollbar-hidden">
        <Link href={`/?tag=all`} className="text-xl font-medium text-gray100">
          All
        </Link>

        {tags.map((tag) => (
          <Link
            key={tag.id}
            href={`/?tag=${tag.name}`}
            className=" text-xl font-medium text-gray100"
          >
            {tag.name}
          </Link>
        ))}
      </div>
      <div>
        {posts.length === 0 && <div>게시글이 없습니다.</div>}
        {posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
      </div>
    </>
  );
}
