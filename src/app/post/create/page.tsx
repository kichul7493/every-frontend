"use client";

import Input from "@/components/shared/input/Input";
import React, { useMemo, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import "./editer.css";
import { useFormState } from "react-dom";
import createPost from "@/actions/posts/createPost";
import SubmitButton from "@/components/shared/submitButton/SubmitButton";
import dynamic from "next/dynamic";
import { PutBlobResult } from "@vercel/blob";
import axios from "axios";

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return function comp({ forwardedRef, ...props }: any) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false }
);

const quillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "align",
  "color",
  "code-block",
];

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
  const quillRef = useRef<any>(null);

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };

  const imageHandler = (quill: any) => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files ? input.files[0] : null;

      if (file) {
        const response = await axios.post<PutBlobResult>(
          `/api/blog/upload?filename=${file.name}`,
          file
        );

        const url = response.data.url;

        const range = quillRef.current.getEditor().getSelection();

        quillRef.current.editor.insertEmbed(range?.index ?? 0, "image", url);
      }
    };
  };

  const quillModules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          [{ align: [] }],
          [{ color: [] }],
          ["code-block"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

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
        <ReactQuill
          value={content}
          onChange={handleEditorChange}
          modules={quillModules}
          formats={quillFormats}
          className="w-full bg-black100 mb-7"
          forwardedRef={quillRef}
        />
      </div>
      <SubmitButton>글작성</SubmitButton>
    </form>
  );
};

export default Page;
