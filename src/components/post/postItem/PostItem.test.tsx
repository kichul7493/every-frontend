import { render, screen } from "@testing-library/react";
import PostItem from "./PostItem";
import formatDate from "@/utils/formatDate";

const mockPost = {
  id: 1,
  title: "Sample Post",
  slug: "sample-post",
  createdAt: new Date(),
  tag: {
    id: 1,
    name: "Sample Tag",
  },
  author: {
    id: 1,
    name: "John Doe",
    thumbnail: "",
  },
};

describe("PostItem", () => {
  it("renders the post title, author name, post time, tag name", () => {
    render(<PostItem post={mockPost} />);
    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    expect(
      screen.getByText(formatDate(mockPost.createdAt))
    ).toBeInTheDocument();
    expect(screen.getByText(mockPost.author.name)).toBeInTheDocument();
    expect(screen.getByText(mockPost.tag.name)).toBeInTheDocument();
  });
});
