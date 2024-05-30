import { render, screen } from "@testing-library/react";
import { useSearchParams } from "next/navigation";
import { useSuspenseQuery } from "@tanstack/react-query";
import PostList from "./PostList";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

jest.mock("@tanstack/react-query", () => ({
  useSuspenseQuery: jest.fn(),
}));

jest.mock("@/actions/posts/getPostsWithTag", () => jest.fn());

const mockPosts = [
  {
    id: 1,
    title: "Sample Post 1",
    slug: "sample-post-1",
    createdAt: new Date(),
    tag: {
      id: 1,
      name: "Sample Tag 1",
    },
    author: {
      id: 1,
      name: "John Doe",
      thumbnail: "",
    },
  },
  {
    id: 2,
    title: "Sample Post 2",
    slug: "sample-post-2",
    createdAt: new Date(),
    tag: {
      id: 2,
      name: "Sample Tag 2",
    },
    author: {
      id: 2,
      name: "Jane Smith",
      thumbnail: "",
    },
  },
];

describe("PostList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the list of posts", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue("all"),
    });

    (useSuspenseQuery as jest.Mock).mockReturnValue({
      data: { posts: mockPosts },
    });

    render(<PostList />);

    expect(screen.getByText("Sample Post 1")).toBeInTheDocument();
    expect(screen.getByText("Sample Post 2")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("Sample Tag 1")).toBeInTheDocument();
    expect(screen.getByText("Sample Tag 2")).toBeInTheDocument();
  });

  it("renders '게시글이 없습니다.' when there are no posts", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue("all"),
    });

    (useSuspenseQuery as jest.Mock).mockReturnValue({
      data: { posts: [] },
    });

    render(<PostList />);

    expect(screen.getByText("게시글이 없습니다.")).toBeInTheDocument();
  });
});
