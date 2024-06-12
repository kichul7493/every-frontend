import React from "react";
import Image from "next/image";

interface AvatarProps {
  src: string | null;
  diameter?: number;
}

const Avatar = ({ src, diameter = 32 }: AvatarProps) => {
  if (!src)
    return (
      <div
        style={{ width: diameter, height: diameter }}
        className="rounded-full bg-gray-400"
      />
    );

  return (
    <Image
      src={src}
      width={diameter}
      height={diameter}
      alt="thumbnail"
      className="rounded-full"
    />
  );
};

export default Avatar;
