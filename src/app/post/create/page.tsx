"use client";

import Input from "@/components/shared/input/Input";
import React, { useEffect, useState } from "react";
import "./editer.css";
import { useFormState } from "react-dom";
import createPost from "@/actions/posts/createPost";
import SubmitButton from "@/components/shared/submitButton/SubmitButton";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import { initialState } from "@/constants/formInitialState";

const CustomEditor = dynamic(
  () => {
    return import("@/components/post/editor/CustomEditor");
  },
  { ssr: false }
);

const Page = () => {
  const [content, setContent] = useState("");
  const [state, formAction] = useFormState(createPost, initialState);

  useEffect(() => {
    if (state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction} className="mb-2">
      <Input
        title="제목"
        name="title"
        required
        type="text"
        errors={state.fieldErrors.title}
        placeholder="제목을 입력해주세요."
      />
      <Input
        title="태그"
        name="tag"
        required
        type="text"
        errors={state.fieldErrors.tag}
        placeholder="태그를 입력해주세요."
      />
      <div className="h-full mb-6">
        <span className="block ml-1 mb-1">본문</span>
        <input className="hidden" name="content" readOnly value={content} />
        <CustomEditor initialData={content} setData={setContent} />
      </div>
      <SubmitButton>글작성</SubmitButton>
    </form>
  );
};

export default Page;
