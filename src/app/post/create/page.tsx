"use client";

import Input from "@/components/shared/input/Input";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import "./editer.css";
import { quillFormats, quillModules } from "@/lib/quill";
import { useFormState } from "react-dom";
import createPost from "@/actions/posts/createPost";
import SubmitButton from "@/components/shared/submitButton/SubmitButton";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

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

  console.log(state);

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };

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
        <QuillEditor
          value={content}
          onChange={handleEditorChange}
          modules={quillModules}
          formats={quillFormats}
          className="w-full bg-black100 mb-7"
        />
      </div>
      <SubmitButton>글작성</SubmitButton>
    </form>
  );
};

export default Page;
