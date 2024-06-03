import { render, screen } from "@testing-library/react";
import SubmitButton from "./SubmitButton";

let pending = false;

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormStatus: () => ({ pending }),
}));

describe("SubmitButton", () => {
  it("버튼이 pending 상태가 아니면 텍스트를 출력한다.", () => {
    const buttonText = "Submit";
    render(<SubmitButton>{buttonText}</SubmitButton>);
    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  it("버튼이 pending 상태이면 로딩 svg를 출력한다.", () => {
    pending = true;

    const buttonText = "Submit";
    render(<SubmitButton>{buttonText}</SubmitButton>);
    const loaderElement = screen.getByTestId("loader");

    expect(loaderElement).toBeInTheDocument();
  });
});
