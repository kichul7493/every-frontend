"use client";

import Input from "@/components/shared/input/Input";
import React, { useState } from "react";
import "./editer.css";
import { useFormState } from "react-dom";
import createPost from "@/actions/posts/createPost";
import SubmitButton from "@/components/shared/submitButton/SubmitButton";
import dynamic from "next/dynamic";

const CustomEditor = dynamic(
  () => {
    return import("@/components/blog/editor/CustomEditor");
  },
  { ssr: false }
);

const initialState: {
  fieldErrors: {
    title?: string[];
    tag?: string[];
    content?: string[];
  };
  message?: string;
} = {
  fieldErrors: {},
  message: "",
};

const Page = () => {
  const [content, setContent] = useState("");
  const [state, formAction] = useFormState(createPost, initialState);

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
      <div className="h-full">
        <span className="block ml-1 mb-1">본문</span>
        <input className="hidden" name="content" readOnly value={content} />
        <CustomEditor initialData={content} setData={setContent} />
      </div>
      <SubmitButton>글작성</SubmitButton>
    </form>
  );
};

export default Page;
