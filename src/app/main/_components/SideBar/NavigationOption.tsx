import React from "react";
import clsx from "clsx";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { Options, NavigationOption } from "./options";

const Navigation = ({ name, routes }: Options) => {
  return (
    <>
      {name && (
        <h6 className="mb-2 pl-3 text-xs dark:text-default-500">{name}</h6>
      )}
      <div className="flex flex-col gap-y-2">
        {routes.map((props) => {
          return <NavigationOption key={props.url} {...props} />;
        })}
      </div>
    </>
  );
};

const NavigationOption = ({
  url,
  icon,
  name,
  active = true,
}: NavigationOption) => {
  const pathname = usePathname();
  return (
    <div className="relative">
      {!active && <div className="absolute z-10 h-full w-full"></div>}
      <Link
        href={active ? url : "#"}
        className={clsx("flex items-center gap-3 rounded-xl px-4 text-sm", {
          "border border-stone-400/40 bg-white py-1 font-semibold shadow-sm dark:text-black dark:shadow-zinc-950":
            pathname === url,
          "transition-transform hover:translate-x-4":
            pathname !== url && active,
          "opacity-15": active === false,
        })}
      >
        <Icon
          icon={icon}
          width={24}
          className={clsx({
            "opacity-60": pathname !== url,
          })}
        />
        {name}
      </Link>
    </div>
  );
};

export default Navigation;
