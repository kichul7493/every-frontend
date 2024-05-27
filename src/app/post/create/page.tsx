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
import { useSearchParams } from "next/navigation";
import { getPostWithSlug } from "@/actions/posts/getPostWithSlug";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const CustomEditor = dynamic(
  () => {
    return import("@/components/post/editor/CustomEditor");
  },
  { ssr: false }
);

const Page = () => {
  const searchParams = useSearchParams();

  const [state, formAction] = useFormState(createPost, initialState);
  const slug = searchParams.get("slug");

  const { data, isLoading } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => axios.get(`/api/post/update/${slug}`),
    enabled: !!slug,
  });

  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    if (state.message) {
      toast.error(state.message);
    }
  }, [state]);

  useEffect(() => {
    if (data) {
      setTitle(data?.data.post.title);
      setTag(data?.data.post.tag.name);
    }
  }, [data]);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <form action={formAction} className="mb-2">
      <input type="hidden" name="slug" value={slug || ""} />
      <Input
        title="제목"
        name="title"
        required
        type="text"
        errors={state.fieldErrors.title}
        placeholder="제목을 입력해주세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        title="태그"
        name="tag"
        required
        type="text"
        errors={state.fieldErrors.tag}
        placeholder="태그를 입력해주세요."
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <div className="h-full mb-6">
        <span className="block ml-1 mb-1">본문</span>
        <CustomEditor initData={data?.data.post.content} />
      </div>
      <SubmitButton>글작성</SubmitButton>
    </form>
  );
};

export default Page;
