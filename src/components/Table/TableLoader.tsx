import { Skeleton } from "@nextui-org/skeleton";

const TableLoader = () => {
  return (
    <div className="flex w-full flex-col">
      <header className="flex w-full items-center justify-between">
        <Skeleton className="h-8 w-56 rounded-xl" />
        <aside className="flex gap-2">
          <Skeleton className="h-12 w-32 rounded-xl" />
          <Skeleton className="h-12 w-32 rounded-xl" />
        </aside>
      </header>
      <nav className="my-3 flex justify-between">
        <Skeleton className="h-6 w-16 rounded-xl" />
        <Skeleton className="h-6 w-10 rounded-xl" />
      </nav>
      <main className="w-full rounded-xl border px-6 py-4 pb-6 shadow-sm dark:border-white/10">
        <Skeleton className="h-12 w-full rounded-xl" />
        <div className="mt-4 flex items-center justify-between px-4">
          <Skeleton className="h-4 w-6 rounded-xl" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-12 w-12 rounded-full" />
            <aside>
              <Skeleton className="mb-1 h-4 w-32 rounded-xl" />
              <Skeleton className="h-4 w-24 rounded-xl" />
            </aside>
          </div>
          <Skeleton className="mb-1 h-4 w-16 rounded-xl" />
          <Skeleton className="mb-1 h-4 w-24 rounded-xl" />
          <Skeleton className="mb-1 h-4 w-48 rounded-xl" />
        </div>
        <div className="mt-4 flex items-center justify-between px-4">
          <Skeleton className="h-4 w-6 rounded-xl" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-12 w-12 rounded-full" />
            <aside>
              <Skeleton className="mb-1 h-4 w-32 rounded-xl" />
              <Skeleton className="h-4 w-24 rounded-xl" />
            </aside>
          </div>
          <Skeleton className="mb-1 h-4 w-16 rounded-xl" />
          <Skeleton className="mb-1 h-4 w-24 rounded-xl" />
          <Skeleton className="mb-1 h-4 w-48 rounded-xl" />
        </div>
        <div className="mt-4 flex items-center justify-between px-4">
          <Skeleton className="h-4 w-6 rounded-xl" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-12 w-12 rounded-full" />
            <aside>
              <Skeleton className="mb-1 h-4 w-32 rounded-xl" />
              <Skeleton className="h-4 w-24 rounded-xl" />
            </aside>
          </div>
          <Skeleton className="mb-1 h-4 w-16 rounded-xl" />
          <Skeleton className="mb-1 h-4 w-24 rounded-xl" />
          <Skeleton className="mb-1 h-4 w-48 rounded-xl" />
        </div>
      </main>
      <footer className="mt-4 flex w-full items-center justify-between">
        <Skeleton className="h-12 w-40 rounded-xl" />
        <aside className="flex gap-2">
          <Skeleton className="h-8 w-24 rounded-xl" />
          <Skeleton className="h-8 w-24 rounded-xl" />
        </aside>
      </footer>
    </div>
  );
};

export default TableLoader;
