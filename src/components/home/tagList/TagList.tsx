import getTags from "@/actions/tags/getTags";
import Link from "next/link";
import React from "react";

const TagList = async () => {
  const tags = await getTags();

  return (
    <div className="px-7 flex gap-4 overflow-x-auto py-5 mb-5 scrollbar-hidden">
      <Link
        href={`/?tag=all`}
        className="min-w-7 text-center text-xl font-medium text-gray100"
      >
        All
      </Link>

      {tags.map((tag) => (
        <Link
          key={tag.id}
          href={`/?tag=${tag.name}`}
          prefetch={true}
          className="min-w-7 text-center text-xl font-medium text-gray100"
        >
          {tag.name}
        </Link>
      ))}
    </div>
  );
};

export default TagList;
