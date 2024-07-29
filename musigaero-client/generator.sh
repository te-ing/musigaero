#!/bin/bash

read -p "원하는 페이지명을 입력하세요: " pageName

mkdir -p "$pageName"

PascalName="$(tr '[:lower:]' '[:upper:]' <<< ${pageName:0:1})${pageName:1}"

# page.tsx 파일 생성
cat <<EOL > "$pageName/page.tsx"
export default function ${PascalName}() {
  return (
    <div>
      ${pageName}
    </div>
  );
}
EOL

# layout.tsx 파일 생성
cat <<EOL > "$pageName/layout.tsx"
export default function ${PascalName}Layout({ children }: { children: React.ReactNode }) {
  return <section className="h-full">{children}</section>;
}
EOL

echo "$pageName 폴더와 파일들이 생성되었습니다."