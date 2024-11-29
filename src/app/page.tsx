import { HydrateClient } from "~/trpc/server";

import Image from "next/image";
import { Link } from "next-view-transitions";

import SignInOptions from "./_components/SignInOptions";

export default function Home() {
  return (
    <HydrateClient>
      <main className="flex h-screen min-h-screen items-center justify-between p-4">
        <aside className="relative hidden h-full flex-1 overflow-hidden rounded-xl border border-stone-300/20 bg-stone-100 py-8 pl-8 shadow-md shadow-stone-300 md:block dark:border-white/10 dark:bg-default-200 dark:shadow-black">
          <h1 className="text-4xl font-semibold">RBrand.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            soluta eligendi adipisci.
          </p>
          <Image
            src={"/image.png"}
            alt="ee"
            className="absolute right-0 top-28 rounded-tl-2xl shadow-2xl"
            width={600}
            height={960}
          />
        </aside>
        <aside className="flex h-full flex-1 items-center justify-center">
          <div className="m-auto flex max-w-xl flex-col items-center justify-center">
            <h1 className="py-10 text-2xl font-semibold md:hidden">RBrand</h1>
            <h2 className="text-3xl font-bold">¡Quiero Iniciar!</h2>
            <p className="mb-4">Inica sisión con alguna de éstas opciones</p>
            <SignInOptions />
            <Link
              href={"https://viloriaj-dev.netlify.app/"}
              target="_blank"
              className="mt-4 text-sm text-primary/70 transition-colors hover:text-primary"
            >
              Desarrollado por Esteban vl
            </Link>
          </div>
        </aside>
      </main>
    </HydrateClient>
  );
}
