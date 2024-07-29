import BoxCard from "@/components/box/BoxCard";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function HomeMainCard() {
  const isLogin = false;

  return (
    <BoxCard>
      <CardHeader>
        <CardTitle>안녕하세요 🐶</CardTitle>
        <CardDescription>마지막 인사를 전하는 곳, 무지개로입니다 🌈</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex flex-col items-center gap-4 rounded-md border p-4">
          <Button className="w-full">무지개 글 보기</Button>
          {isLogin && (
            <Button variant={"secondary"} className="w-full">
              무지개 글 쓰기
            </Button>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center w-full gap-2">
        {isLogin && (
          <Button variant="outline" className="px-6">
            로그아웃
          </Button>
        )}
        {!isLogin && (
          <>
            <Button variant="ghost" className="px-2">
              로그인
            </Button>
            <Button variant="ghost" className="px-2">
              회원가입
            </Button>
          </>
        )}
      </CardFooter>
    </BoxCard>
  );
}
