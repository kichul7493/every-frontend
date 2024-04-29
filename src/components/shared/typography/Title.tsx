import React from "react";

interface TitleProps {
  children: string;
}

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="text-4xl font-semibold text-center mb-14">{children}</h1>
  );
};

export default Title;
