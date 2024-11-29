"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/button";

import { signOut } from "next-auth/react";
import { useResize } from "~/hooks/useResize";

const LogoutButton = () => {
  const { isDesktop } = useResize();

  if (isDesktop) return null;

  return (
    <>
      <Button
        onClick={() => signOut({ redirectTo: "/" })}
        isIconOnly
        radius="full"
        fullWidth
      >
        <Icon icon="line-md:logout" width={20} />
      </Button>
    </>
  );
};

export default LogoutButton;
