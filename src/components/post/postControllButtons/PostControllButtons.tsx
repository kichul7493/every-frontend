"use client";

import React from "react";
import DeleteButton from "../deleteButton/DeleteButton";
import EditButton from "../editButton/EditButton";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import deletePost from "@/actions/posts/deletePost";

interface PostControllButtonsProps {
  slug: string;
}

export const initialState: {
  fieldErrors: any;
  message?: string;
} = {
  fieldErrors: {},
  message: "",
};

const PostControllButtons = ({ slug }: PostControllButtonsProps) => {
  const router = useRouter();
  const [state, formAction] = useFormState(deletePost, initialState);

  const onMoveEditPage = () => {
    router.push(`/post/create?slug=${slug}`);
  };

  return (
    <div className="flex gap-2 items-center">
      <EditButton onClick={onMoveEditPage} />
      <DeleteButton formAction={formAction} slug={slug} />
    </div>
  );
};

export default PostControllButtons;
