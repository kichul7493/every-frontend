import React from "react";

interface PostTitleProps {
  title: string;
}

const PostTitle = ({ title }: PostTitleProps) => {
  return (
    <h1 className="text-2xl tracking-[-2.5%] mb-3 line-clamp-2">{title}</h1>
  );
};

export default PostTitle;
