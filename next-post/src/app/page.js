"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const HandleNavigation = () => {
    router.push("/posts");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Home Page</h1>
      <button onClick={HandleNavigation} className="p-2  bg-blue-600 ">
        Go to Posts
      </button>
    </div>
  );
}
