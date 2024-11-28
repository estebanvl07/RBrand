"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";

const GoBackBottom = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <Icon icon="icon-park-outline:left" width={36} />
    </button>
  );
};

export default GoBackBottom;
