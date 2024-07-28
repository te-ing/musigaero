import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function HomeMainCard() {
  return (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>안녕하세요 🐶</CardTitle>
        <CardDescription>마지막 인사를 전하는 곳, 무지개로입니다 🌈</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex flex-col items-center gap-4 rounded-md border p-4">
          <Button className="w-full">무지개 글 보기</Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center w-full">
        <Button variant="outline" className="px-6">
          로그인
        </Button>
      </CardFooter>
    </Card>
  );
}
