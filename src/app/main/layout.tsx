import { HydrateClient } from "~/trpc/server";
import Navigator from "./_components/Navigator";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <HydrateClient>
      <div className="relative flex overflow-hidden bg-default-100 md:h-screen md:py-2 md:pr-2">
        <Navigator />
        <main className="scrollbar-y-customize pb:28 h-screen min-h-screen flex-grow overflow-y-auto border bg-white px-6 py-4 shadow-lg shadow-stone-300 scrollbar-hide md:h-full md:rounded-xl md:pb-0 dark:border-white/10 dark:bg-default-50 dark:shadow-black/30">
          {children}
        </main>
      </div>
    </HydrateClient>
  );
};

export default MainLayout;
