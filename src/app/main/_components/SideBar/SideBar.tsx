"use client";
import React, { useState } from "react";
import SideBarNavigation from "./SideBarNavigation";
import { Button } from "@nextui-org/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { signOut } from "next-auth/react";

const SideBar = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="relative flex h-full w-56 flex-col px-4 pt-6">
      <h2 className="mb-10 text-2xl font-semibold">Brand</h2>
      <SideBarNavigation />
      <footer className="group mb-4">
        <Button
          onClick={() => signOut({ redirectTo: "/" })}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="!border-1 border-black/10 px-6 transition-colors group-hover:border-black dark:border-white/10 dark:group-hover:border-white"
          variant="bordered"
          color="primary"
          endContent={
            <div className="relative">
              <Icon icon="line-md:logout" className="opacity-25" width={20} />
              {isHover && (
                <Icon
                  icon="line-md:logout"
                  width={20}
                  className="absolute top-0"
                />
              )}
            </div>
          }
          fullWidth
        >
          Cerrar Sesión
        </Button>
      </footer>
      <p className="text-xs">Desarrollado por Esteban vl</p>
    </div>
  );
};

export default SideBar;
