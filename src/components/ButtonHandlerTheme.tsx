"use client";
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";

import { useThemeContext } from "~/lib/context/Theme.context";

const ButtonHandlerTheme = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useThemeContext();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      isIconOnly
      radius="full"
      className={className}
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Icon
          icon="akar-icons:sun-fill"
          width={20}
          className="text-slate-300"
        />
      ) : (
        <Icon width={20} icon="akar-icons:moon-fill" />
      )}
    </Button>
  );
};

export default ButtonHandlerTheme;
