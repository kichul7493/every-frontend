import { getPostBySlug } from "@/apis/posts/getPostBySlug";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface useGetPostBySlugProps {
  slug: string | null;
}

const useGetPostBySlug = ({ slug }: useGetPostBySlugProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPostBySlug(slug!),
    enabled: !!slug,
    gcTime: 0,
  });

  return { data, isLoading };
};

export default useGetPostBySlug;
