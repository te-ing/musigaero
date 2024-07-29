import { LogoKoreanColorIcon } from "@/asset/svg";
import { HomeMainCard } from "./_components/LoginMainCard";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-full p-4 gap-10">
      <LogoKoreanColorIcon />
      <HomeMainCard />
    </div>
  );
}
