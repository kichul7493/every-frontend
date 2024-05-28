import Avatar from "@/components/shared/avatar/Avatar";
import formatDate from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PostItemProps {
  post: {
    id: number;
    title: string;
    slug: string;
    createdAt: Date;
    tag: {
      id: number;
      name: string;
    };
    author: {
      id: number;
      name: string;
      thumbnail: string | null;
    };
  };
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <div className="mx-7 pb-4 mb-4 border-b-[1px] border-b-white">
      <Link href={`/post/${post.slug}`}>
        <div className="flex items-center gap-2 mb-3">
          <Avatar src={post.author.thumbnail} />
          <p className="text-xs">{post.author.name}</p>
          <p className="text-xs text-gray100">
            {formatDate(new Date(post.createdAt))}
          </p>
        </div>
        <h2 className="font-bold line-clamp-2 mb-5">{post.title}</h2>
        <div>
          <div className="py-1 px-2 rounded-xl bg-gray300 inline-block">
            <p className="text-black text-sm font-semibold">{post.tag.name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
