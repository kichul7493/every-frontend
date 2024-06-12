import React from "react";
import Image from "next/image";

interface AvatarProps {
  src: string | null;
  diameter?: number;
}

const Avatar = ({ src, diameter = 32 }: AvatarProps) => {
  const getClassName = () => {
    if (!src)
      return `w-[${diameter}px] h-[${diameter}px] rounded-full bg-gray-400`;

    return `w-[${diameter}px] h-[${diameter}px] rounded-full`;
  };

  if (!src) return <div className={getClassName()}></div>;

  return (
    <Image
      src={src}
      width={diameter}
      height={diameter}
      alt="thumbnail"
      className={getClassName()}
    />
  );
};

export default Avatar;
