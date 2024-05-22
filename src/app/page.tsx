import { getPosts } from "@/actions/posts/getPosts";
import { getSession } from "@/actions/users/auth";
import PostItem from "@/components/post/postItem/PostItem";
import Link from "next/link";

export default async function Home() {
  const session = await getSession();

  const posts = await getPosts();

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
        <button className=" text-xl font-medium text-gray100">All</button>
        <button className=" text-xl font-medium text-gray100">Frontend</button>
        <button className=" text-xl font-medium text-gray100">Backend</button>
        <button className=" text-xl font-medium text-gray100">Devops</button>
        <button className=" text-xl font-medium text-gray100">Design</button>
      </div>
      <div>
        {posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
      </div>
      <div className="mx-7 pb-4 mb-4 border-b-[1px] border-b-white">
        <Link href="/post/test">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-gray-400"></div>
            <p className="text-xs">Verna Medhurst</p>
            <p className="text-xs text-gray100">2021-03-17</p>
          </div>
          <h2 className="font-bold line-clamp-2 mb-5">
            Lorem ipsum dolor sit amet consectetur. Feugiat nibh ultrices
            or...Lorem ipsum dolor sit amet consectetur. Feugiat nibh ultrices
            or...
          </h2>
          <div>
            <div className="py-1 px-2 rounded-xl bg-gray300 inline-block">
              <p className="text-black text-sm font-semibold">Reactjs</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
