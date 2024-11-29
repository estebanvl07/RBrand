import SideBar from "./_components/SideBar/SideBar";
import { HydrateClient } from "~/trpc/server";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <HydrateClient>
      <div className="flex bg-default-100 py-2 pr-2 md:h-screen">
        <SideBar />
        <main className="scrollbar-y-customize h-full flex-grow overflow-y-auto rounded-xl border bg-white px-6 py-4 shadow-lg shadow-stone-300 dark:border-white/10 dark:bg-default-50 dark:shadow-black/30">
          {children}
        </main>
      </div>
    </HydrateClient>
  );
};

export default MainLayout;
