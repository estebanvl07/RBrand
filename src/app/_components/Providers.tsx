"use client";

import React from "react";

import { NextUIProvider } from "@nextui-org/react";
import { ViewTransitions } from "next-view-transitions";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "~/lib/context/Theme.context";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ThemeProvider>
        <ViewTransitions>
          <NextUIProvider>{children}</NextUIProvider>
        </ViewTransitions>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;
