// src/app/page.tsx

import Hero from "./home/page";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-[#F6F3EC] text-[#1C261E]">
      <Hero/>
    </main>
  );
}