import Avatar from "@/components/shared/avatar/Avatar";
import React from "react";

interface AuthorInfoProps {
  thumbnail: string | null;
  authorName: string;
  createdAt: string;
}

const AuthorInfo = ({ thumbnail, authorName, createdAt }: AuthorInfoProps) => {
  return (
    <div className="flex gap-3">
      <Avatar src={thumbnail} />
      <div className="flex flex-col">
        <span className="text-xs">{authorName}</span>
        <span className="text-xs text-gray100">{createdAt}</span>
      </div>
    </div>
  );
};

export default AuthorInfo;
