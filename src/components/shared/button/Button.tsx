import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";

type ButtonVariant = "filled" | "outlined";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /**
   * The variant of the button
   * @default filled
   */
  variant?: ButtonVariant;
}

const ButtonStyles: { [key in ButtonVariant]: string } = {
  filled: "bg-main border-[1px] border-opacity-60 border-black",
  outlined: "bg-black100 border-[1px] border-opacity-60 border-black",
};

const Button = ({ children, variant = "filled", ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx([
        "w-full h-12 flex items-center justify-center gap-2 rounded-xl",
        ButtonStyles[variant],
      ])}
    >
      {children}
    </button>
  );
};

export default Button;
