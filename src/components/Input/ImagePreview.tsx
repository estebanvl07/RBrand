"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FC } from "react";
import { MouseEventHandlerType } from "~/types/common";

interface ImagePreviewProps {
  mode?: "principal" | "secondary";
  isHover: boolean;
  url: string;
  onDeleteImage: VoidFunction;
}

const ImagePreview: FC<ImagePreviewProps> = ({
  mode = "secondary",
  isHover,
  url,
  onDeleteImage,
}) => {
  const handlePreviewDeleteImage: MouseEventHandlerType = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onDeleteImage();
  };

  if (url) {
    return (
      <div className="relative flex h-full w-full cursor-default rounded-lg">
        <button
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border-0 bg-black/70 p-1 backdrop-blur-xl"
          onClick={handlePreviewDeleteImage}
          type="button"
        >
          <Icon icon="material-symbols:close" className="h-5 w-5 text-white" />
        </button>
        <img
          src={url}
          alt={url}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
    );
  }

  if (mode === "secondary") {
    return (
      <Icon
        icon="fluent:image-add-20-regular"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-300 text-white"
        width={32}
      />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Icon
        icon="fluent:image-add-20-regular"
        className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-gray-300 text-white"
        width={30}
      />
      {isHover ? (
        <p className="font-bold text-gray-500 dark:text-gray-400">
          Suelte aquí
        </p>
      ) : (
        <>
          <p className="font-bold text-gray-500 dark:text-gray-400">
            Añadir foto principal
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">PNG y JPG</p>
        </>
      )}
    </div>
  );
};

export default ImagePreview;
