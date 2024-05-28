import axios from "axios";

export default async function getPostsWithTag(tag: string) {
  const res = await axios.get(`http://localhost:3000/api/post?tag=${tag}`);

  if (res.status !== 200) throw new Error(res.statusText);

  return res.data;
}
