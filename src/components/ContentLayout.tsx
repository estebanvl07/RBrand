import { HydrateClient } from "~/trpc/server";

import ButtonHandlerTheme from "./ButtonHandlerTheme";
import UserButton from "~/app/main/_components/UserButton";
import GoBackBottom from "./GoBackBottom";
import LogoutButton from "~/app/main/_components/LogoutButton";

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
            <span className="hidden text-base md:block">{description}</span>
          </div>
        </aside>
        <aside className="flex items-center gap-3">
          <ButtonHandlerTheme />
          <LogoutButton />
          <UserButton />
        </aside>
      </header>
      {children}
    </HydrateClient>
  );
};

export default ContentLayout;
