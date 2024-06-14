import { render, screen } from "@testing-library/react";
import { useSearchParams } from "next/navigation";
import PostList from "./PostList";
import usePostInfiniteQuery from "@/hooks/post/usePostInfiniteQuery";

jest.mock("next/navigation");

jest.mock("@/hooks/post/usePostInfiniteQuery");

jest.mock("@/actions/posts/getPostsWithTag");

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

    (usePostInfiniteQuery as jest.Mock).mockReturnValue({
      pages: [{ items: mockPosts }],
      isFetching: false,
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

    (usePostInfiniteQuery as jest.Mock).mockReturnValue({
      pages: [{ items: [] }],
      isFetching: false,
    });

    render(<PostList />);

    expect(screen.getByText("게시글이 없습니다.")).toBeInTheDocument();
  });
});
