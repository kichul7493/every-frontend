import React, { DetailsHTMLAttributes } from "react";

interface TitleProps extends DetailsHTMLAttributes<HTMLHeadingElement> {
  children: string;
}

const Title = ({ children, ...rest }: TitleProps) => {
  return (
    <h1 {...rest} className="text-4xl font-semibold text-center mb-14">
      {children}
    </h1>
  );
};

export default Title;
