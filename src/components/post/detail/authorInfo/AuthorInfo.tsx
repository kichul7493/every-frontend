import Avatar from "@/components/shared/avatar/Avatar";
import React from "react";
import DeleteButton from "../../deleteButton/DeleteButton";
import EditButton from "../../editButton/EditButton";

interface AuthorInfoProps {
  thumbnail: string | null;
  authorName: string;
  createdAt: string;
  isAuthor: boolean;
  slug: string;
}

const AuthorInfo = ({
  thumbnail,
  authorName,
  createdAt,
  isAuthor,
  slug,
}: AuthorInfoProps) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex gap-3">
        <Avatar src={thumbnail} />
        <div className="flex flex-col">
          <span className="text-xs">{authorName}</span>
          <span className="text-xs text-gray100">{createdAt}</span>
        </div>
      </div>
      {isAuthor && (
        <div className="flex gap-2 items-center">
          <EditButton slug={slug} />
          <DeleteButton slug={slug} />
        </div>
      )}
    </div>
  );
};

export default AuthorInfo;
