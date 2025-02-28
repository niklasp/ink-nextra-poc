import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen  dark:bg-gradient-to-b dark:from-purple-900 dark:via-black dark:to-purple-400">
      <h1 className="text-4xl font-bold">Hello ink!</h1>
      <div className="flex flex-row gap-4">
        <Link
          href="/docs"
          className="text-purple-300 underline hover:text-purple-400"
        >
          docs →
        </Link>
        <Link
          href="/ubator"
          className="text-purple-300 underline hover:text-purple-400"
        >
          ink!ubator →
        </Link>
      </div>
    </div>
  );
}
