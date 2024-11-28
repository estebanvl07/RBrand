"use client";

import clsx from "clsx";
import React, { FC } from "react";
import { InputFileProps } from "../types/input.types";

const InputFile: FC<InputFileProps> = ({
  id,
  name,
  contentClass,
  labelClass,
  children,
  onChange,
  onClickInZone,
  disabled,
  onDragOver,
  onDragLeave,
  onDrop,
  ...props
}) => {
  return (
    <div className={clsx("flex w-full items-center", contentClass)}>
      <label
        htmlFor={id}
        className={clsx(
          "flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-default-100 py-8 hover:bg-default-200 hover:bg-default-200/50 dark:border-white/10",
          labelClass,
        )}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={onClickInZone}
      >
        <div className="flex h-full w-full flex-col items-center justify-center">
          {children}
        </div>
        <input
          type="file"
          id={id}
          name={name}
          className="hidden"
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
      </label>
    </div>
  );
};

export default InputFile;
