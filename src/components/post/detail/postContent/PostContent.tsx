import React from "react";
import "@/css/ck-content.css";

interface PostContentProps {
  content: string;
}

const PostContent = ({ content }: PostContentProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: content,
      }}
      className="pb-10 ck-content"
    />
  );
};

export default PostContent;
