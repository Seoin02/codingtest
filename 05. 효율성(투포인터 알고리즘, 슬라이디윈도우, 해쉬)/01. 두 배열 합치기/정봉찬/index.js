/*
✅문제 제목: 두 배열 합치기

✅문제 유형: 효율성

✅문제 풀이 날짜: 2024-07-26

💡문제 분석 요약
  - 오름차순으로 정렬된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력한다.

💡알고리즘 설계
  - Array.prototype.concat() 메서드를 활용해서 두 배열을 합친다.
  - Array.prototype.sort() 메서드를 활용해서 오름차순 정렬한다.
*/

function solution(arr1, arr2) {
  let answer = [];

  answer = arr1.concat(arr2).sort((a, b) => a - b);

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
