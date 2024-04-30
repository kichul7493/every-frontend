"use client";

import Input from "@/components/shared/input/Input";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import "./editer.css";

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ align: [] }],
    [{ color: [] }],
    ["code-block"],
    ["clean"],
  ],
};

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

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const Page = () => {
  const [content, setContent] = useState("");

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };

  return (
    <div className="mb-2">
      <Input name="제목" placeholder="제목을 입력해주세요." />
      <Input name="태그" placeholder="태그를 입력해주세요." />
      <div className="h-full">
        <span className="block ml-1 mb-1">본문</span>
        <QuillEditor
          value={content}
          onChange={handleEditorChange}
          modules={quillModules}
          formats={quillFormats}
          className="w-full bg-black100 mb-7"
        />
      </div>
      <button className="w-full bg-main py-3 rounded-xl">회원가입</button>
    </div>
  );
};

export default Page;
