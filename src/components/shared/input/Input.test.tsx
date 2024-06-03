import { render, screen } from "@testing-library/react";
import Input from "./Input";
import { userEvent } from "@testing-library/user-event";

describe("Input", () => {
  it("입력 창에 타이틀이 함께 출력된다.", () => {
    const title = "Username";
    render(<Input title={title} />);
    const inputElement = screen.getByLabelText(title);
    expect(inputElement).toBeInTheDocument();
  });

  it("입력 창에 플레이스 홀더가 출력된다.", () => {
    const placeholder = "Enter your username";
    render(<Input placeholder={placeholder} />);
    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
  });

  it("입력 창에 텍스트를 입력할 수 있다.", async () => {
    render(<Input />);

    const inputElement = screen.getByRole("textbox");
    await userEvent.type(inputElement, "test");

    expect(inputElement).toHaveValue("test");
  });

  it("에러 프로퍼티를 전달하면 에러 내용이 출력되고 입력창에 빨간 테두리가 생긴다.", () => {
    const errors = ["Invalid username"];
    render(<Input errors={errors} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("border-2 border-red-500");
  });
});
