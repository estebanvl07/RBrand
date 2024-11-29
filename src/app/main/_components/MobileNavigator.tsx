"use client";

import { Link } from "next-view-transitions";
import { Icon } from "@iconify/react/dist/iconify.js";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const routes = [
  {
    url: "/main",
    name: "Dashboard",
    icon: "tabler:layout-dashboard",
  },
  {
    url: "/main/brand",
    name: "Marcas",
    icon: "tabler:brand-adobe-xd",
  },
  {
    url: "/main/products",
    name: "Mis Productos",
    icon: "fluent-mdl2:product",
    active: false,
  },
];

const MobileNavigator = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 z-50 flex h-20 w-screen border-t bg-white dark:border-white/10 dark:bg-zinc-950">
      {routes.map(({ icon, name, url, active }) => {
        if (active === false) return null;
        return (
          <Link
            key={url}
            href={url}
            className={clsx(
              "flex h-full flex-1 flex-col items-center justify-center text-zinc-700 dark:text-white/80",
              {
                "text-primary": pathname === url,
                "opacity-80": pathname !== url,
              },
            )}
          >
            <Icon
              icon={icon}
              width={26}
              className={clsx("text-zinc-700 dark:text-white/80", {
                "text-primary": pathname === url,
              })}
            />
            <span
              className={clsx("text-black dark:text-white/80", {
                "font-semibold text-primary": pathname === url,
              })}
            >
              {name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileNavigator;
