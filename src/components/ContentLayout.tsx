import React from "react";
import ButtonHandlerTheme from "./ButtonHandlerTheme";
import UserButton from "~/app/main/_components/UserButton";
import GoBackBottom from "./GoBackBottom";
import { HydrateClient } from "~/trpc/server";

interface ContentLayoutProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const ContentLayout = ({
  children,
  description,
  title,
}: ContentLayoutProps) => {
  return (
    <HydrateClient>
      <header className="mb-4 flex items-center justify-between">
        <aside className="flex items-center gap-4">
          <GoBackBottom />
          <div>
            <h4 className="text-2xl font-bold">{title}</h4>
            <span className="text-base">{description}</span>
          </div>
        </aside>
        <aside className="flex items-center gap-3">
          <ButtonHandlerTheme />
          <UserButton />
        </aside>
      </header>
      {children}
    </HydrateClient>
  );
};

export default ContentLayout;
