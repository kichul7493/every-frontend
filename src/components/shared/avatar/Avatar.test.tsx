import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";

describe("Avatar", () => {
  it("아바타 이미지 경로가 없으면 이미지 썸네일을 출력하지 않는다.", () => {
    render(<Avatar src={null} />);
    const imageElement = screen.queryByAltText("thumbnail");
    expect(imageElement).not.toBeInTheDocument();
  });

  it("아바타 이미지 경로가 있으면 이미지 썸네일을 출력한다.", () => {
    const src = "https://example.com/avatar.jpg";
    render(<Avatar src={src} />);
    const imageElement = screen.getByAltText("thumbnail");
    expect(imageElement).toBeInTheDocument();
  });
});
