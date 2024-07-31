/*
✅문제 제목: 연속부분수열1

✅문제 유형: 효율성(투포인터 알고리즘)

✅문제 풀이 날짜: 2024-07-29

💡문제 분석 요약
  - 연속부분수열의 합이 특정 숫자 M이 되는 경우가 몇 번 있는지 구한다.

💡알고리즘 설계
  - 끝점이 되는 포인터를 0로 선언한다.
  - 연속부분수열의 합을 계산하는 변수를 선언한다.
  - 시작점이 되는 포인터를 반복문의 변수로 둔다.
  - 시작점 반복문 안에서 중첩 반복문을 (끝점 < 배열의 길이) && (합 < M)의 조건으로 반복한다. 조건을 만족하면 합을 더하고 끝점을 1 더한다.
  - 중첩 반복문이 끝났을 때 합 === m이면 answer를 1 더한다.
  - 시작점 반복문이 다음 차례로 넘어가기 때문에 합에서 배열에서 현재 시작점 인덱스의 값만큼 빼준다.
  
💡참고
  - https://velog.io/@9ummy/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%ED%88%AC-%ED%8F%AC%EC%9D%B8%ED%84%B0-%EA%B5%AC%EA%B0%84-%ED%95%A9-JavaScript
*/

function solution(m, arr) {
  let answer = 0;

  let endPointer = 0;
  let sum = 0;

  for (let startPointer = 0; startPointer < arr.length; startPointer++) {
    while (sum < m && endPointer < arr.length) {
      sum += arr[endPointer++];
    }

    if (sum === m) {
      answer++;
    }

    sum -= arr[startPointer];
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
