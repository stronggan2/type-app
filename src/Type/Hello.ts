function add(a: number, b: number): number {
  return a + b;
}

let result = add(a, b);
console.log(result);

// type 폴더
// Hello.ts -> 브라우저가 읽을 수 있게
// Hello.ts -> Hello.js -> 브라우저
// tsc 피일명.ts -> 파일명.js
// 새로 만든 폴더 경로로 나와서 컴파일 tsc 파일명.js