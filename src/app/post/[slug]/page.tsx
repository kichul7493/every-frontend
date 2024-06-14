import { getPostWithSlug } from "@/actions/posts/getPostWithSlug";
import formatDate from "@/utils/formatDate";
import React from "react";
import PostContent from "@/components/post/detail/postContent/PostContent";
import AuthorInfo from "@/components/post/detail/authorInfo/AuthorInfo";
import PostTitle from "@/components/post/detail/postTitle/PostTitle";
import PostControllButtons from "@/components/post/postControllButtons/PostControllButtons";
import { auth } from "@/auth";

const Page = async ({ params }: { params: { slug: string } }) => {
  const decodedSlug = decodeURIComponent(params.slug);

  const post = await getPostWithSlug(decodedSlug);

  const user = await auth();

  const isAuthor = post?.author.name === user?.user?.name;

  if (!post) {
    return <div className="text-center">포스트를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="mt-8 mb-7">
      <PostTitle title={post.title} />
      <div className="w-full mb-3 flex items-center justify-between">
        <AuthorInfo
          thumbnail={post.author.thumbnail}
          authorName={post.author.name}
          createdAt={formatDate(post.createdAt)}
        />
        {isAuthor && <PostControllButtons slug={decodedSlug} />}
      </div>

      <PostContent content={post.content} />
    </div>
  );
};

export default Page;
