import React from "react";
import Image from "next/image";

interface AvatarProps {
  src: string | null;
}

const Avatar = ({ src }: AvatarProps) => {
  if (!src) return <div className="w-8 h-8 rounded-full bg-gray-400"></div>;

  return <Image src={src} alt="thumbnail" className="w-8 h-8 rounded-full" />;
};

export default Avatar;
