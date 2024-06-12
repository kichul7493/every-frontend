import axios from "axios";

export const getPostBySlug = async (slug: string) => {
  return axios.get(`/api/post/${slug}`);
};
