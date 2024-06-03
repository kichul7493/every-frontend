import axiosInstance from "@/utils/axios";

export default async function getPostsWithTag(tag: string, page: number) {
  const res = await axiosInstance.get(`/post?tag=${tag}&page=${page}`);

  if (res.status !== 200) throw new Error(res.statusText);

  return res.data;
}
