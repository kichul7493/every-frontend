import { getPostWithSlug } from "@/actions/posts/getPostWithSlug";
import formatDate from "@/lib/formatDate";
import React from "react";
import "@/components/post/editor/customEditor.css";
import Avatar from "@/components/shared/avatar/Avatar";
import DeleteButton from "@/components/post/deleteButton/DeleteButton";

const Page = async ({ params }: { params: { slug: string } }) => {
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
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-3">
            <Avatar src={post.author.thumbnail} />
            <div className="flex flex-col">
              <span className="text-xs">{post.author.name}</span>
              <span className="text-xs text-gray100">
                {formatDate(post.createdAt)}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_120_41)">
                  <path
                    d="M3.5 20.125V24.5H7.875L20.7783 11.5967L16.4033 7.22165L3.5 20.125ZM24.1617 8.21332C24.6167 7.75832 24.6167 7.02332 24.1617 6.56832L21.4317 3.83832C20.9767 3.38332 20.2417 3.38332 19.7867 3.83832L17.6517 5.97332L22.0267 10.3483L24.1617 8.21332Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_120_41">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <DeleteButton slug={decodedSlug} />
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

export default Page;
