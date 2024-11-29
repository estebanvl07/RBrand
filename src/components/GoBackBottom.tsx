"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { usePathname, useRouter } from "next/navigation";

const GoBackBottom = () => {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/main") return null;

  return (
    <button onClick={() => router.back()}>
      <Icon icon="icon-park-outline:left" width={36} />
    </button>
  );
};

export default GoBackBottom;
