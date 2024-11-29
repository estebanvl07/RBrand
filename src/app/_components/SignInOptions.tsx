"use client";

import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";

import { CALLBACK_SIGN_IN_URL } from "~/lib/constants/enviroment";

import { signIn } from "next-auth/react";
import { useThemeContext } from "~/lib/context/Theme.context";

const SignInOptions = () => {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  const onSignWithGoogle = () => {
    signIn("google", {
      redirect: false,
      redirectTo: CALLBACK_SIGN_IN_URL,
    });
  };

  const onSignWithGithub = () => {
    signIn("github", {
      redirect: false,
      redirectTo: CALLBACK_SIGN_IN_URL,
    });
  };

  return (
    <div className="flex w-full flex-col gap-1">
      <Button
        onClick={onSignWithGoogle}
        className="flex items-center gap-3"
        color="primary"
        fullWidth
      >
        <Icon
          icon="prime:google"
          color={isDark ? "text-black" : "text-white"}
          width="24"
        />
        Iniciar con Google
      </Button>
      <Button
        onClick={onSignWithGithub}
        className="flex items-center gap-3"
        color="primary"
        fullWidth
      >
        <Icon
          icon="mdi:github"
          className={isDark ? "text-black" : "text-white"}
          width="24"
        />
        Iniciar con Gihub
      </Button>
    </div>
  );
};

export default SignInOptions;
