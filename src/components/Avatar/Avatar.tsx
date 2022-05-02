import React, { useMemo } from 'react';

export interface AvatarProps {
  url: string;
  size: string;
}

export const Avatar = ({
  url,
  size,
}: AvatarProps) => {
  const sizeClass = useMemo(() => {
    switch (size) {
      case "xs":
        return "w-6 h-6"
      case "sm":
        return "w-8 h-8"
      case "md":
        return "w-10 h-10"
      case "lg":
        return "w-12 h-12"
      case "xl":
        return "w-14 h-14"
      default:
        return "w-10 h-10"
    }
  }, [
    size,
  ])
  return (
    <>
      <img
        className={`inline-block ${sizeClass} rounded-full`}
        src={url}
        alt="avatar for user"
        data-testid="avatar"
      />
    </>
  )
}
