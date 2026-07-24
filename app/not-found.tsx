import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050B14] px-6 text-center text-white">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
          Hyper AI Force
        </p>
        <h1 className="mt-4 text-4xl font-black">Page not found</h1>
        <p className="mt-4 text-slate-400">Return to the main robotics site.</p>
        <Button asChild className="mt-8">
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </main>
  );
}
