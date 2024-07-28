import { LogoKoreanColorIcon } from "@/asset/svg";
import { HomeMainCard } from "./_components/HomeMainCard";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-full p-4 gap-10">
      <LogoKoreanColorIcon />
      <HomeMainCard />
    </main>
  );
}
