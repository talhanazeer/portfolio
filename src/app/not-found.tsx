import Link from "next/link";
import { Magnetic } from "@/components/magnetic/Magnetic";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-1 flex-col items-center justify-center px-5 py-32 text-center">
      <p className="text-sm font-mono text-zinc-500">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
        This page drifted off the grid.
      </h1>
      <p className="mt-3 text-zinc-400">
        The URL may be old, or the route was never here.
      </p>
      <Magnetic strength={0.4} className="mt-10 inline-flex">
        <Link
          href="/"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950"
        >
          Back home
        </Link>
      </Magnetic>
    </div>
  );
}
