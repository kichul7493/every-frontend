import { getPostWithSlug } from "@/actions/posts/getPostWithSlug";
import formatDate from "@/lib/formatDate";
import React from "react";
import "@/components/post/editor/customEditor.css";

const page = async ({ params }: { params: { slug: string } }) => {
  const decodedSlug = decodeURIComponent(params.slug);

  const post = await getPostWithSlug(decodedSlug);

  if (!post) {
    return <div>포스트를 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <div className="mt-8 mb-7">
        <h1 className="text-2xl tracking-[-2.5%] mb-3 line-clamp-2">
          {post.title}
        </h1>
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 rounded-full bg-gray100"></div>
          <div className="flex flex-col">
            <span className="text-xs">{post.author.name}</span>
            <span className="text-xs text-gray100">
              {formatDate(post.createdAt)}
            </span>
          </div>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
        className="pb-10"
      ></div>
    </>
  );
};

export default page;
