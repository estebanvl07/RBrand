"use client";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import React from "react";
import { useResize } from "~/hooks/useResize";

const UserButton = () => {
  const { data: session } = useSession();
  const { isDesktop } = useResize();

  return (
    <>
      {session?.user && (
        <Button
          radius="full"
          endContent={
            <Avatar
              src={session?.user.image || ""}
              name={session?.user.name || ""}
            />
          }
          className={clsx({
            "border !py-7 !pr-2 pl-5 dark:border-white/10": isDesktop,
            "!h-14 !w-14 rounded-full !px-0 !py-0": !isDesktop,
          })}
        >
          {isDesktop && (
            <aside className="flex flex-col">
              <h6 className="text-sm font-semibold">{session.user.email}</h6>
              <p className="text-xs">{session.user.name}</p>
            </aside>
          )}
        </Button>
      )}
    </>
  );
};

export default UserButton;
