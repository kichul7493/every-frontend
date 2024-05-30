import axiosInstance from "@/utils/axios";

export default async function getPostsWithTag(tag: string) {
  const res = await axiosInstance.get(`/post?tag=${tag}`);

  if (res.status !== 200) throw new Error(res.statusText);

  return res.data;
}
