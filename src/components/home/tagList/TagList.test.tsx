import { render, screen } from "@testing-library/react";
import TagList from "./TagList";

const mockTags = [
  { id: 1, name: "Tag 1" },
  { id: 2, name: "Tag 2" },
  { id: 3, name: "Tag 3" },
];

jest.mock("@/actions/tags/getTags", () => () => Promise.resolve(mockTags));

describe("TagList", () => {
  it("renders all tags correctly", async () => {
    render(await TagList());

    // Wait for API response
    await screen.findByText("Tag 1");

    // Check if all tags are rendered
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Tag 1")).toBeInTheDocument();
    expect(screen.getByText("Tag 2")).toBeInTheDocument();
    expect(screen.getByText("Tag 3")).toBeInTheDocument();
  });
});
