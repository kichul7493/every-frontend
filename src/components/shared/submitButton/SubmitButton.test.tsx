import { render, screen } from "@testing-library/react";
import SubmitButton from "./SubmitButton";

describe("SubmitButton", () => {
  it("버튼이 pending 상태가 아니면 텍스트를 출력한다.", () => {
    const buttonText = "Submit";
    render(<SubmitButton isPending={false}>{buttonText}</SubmitButton>);
    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  it("버튼이 pending 상태이면 로딩 svg를 출력한다.", () => {
    const buttonText = "Submit";
    render(<SubmitButton isPending>{buttonText}</SubmitButton>);
    const loaderElement = screen.getByTestId("loader");

    expect(loaderElement).toBeInTheDocument();
  });
});
