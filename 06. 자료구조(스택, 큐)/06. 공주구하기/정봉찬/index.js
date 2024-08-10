/*
✅문제 제목: 공주구하기

✅문제 유형: 자료구조(큐)

✅문제 풀이 날짜: 2024-08-10

💡문제 분석 요약
  - N명의 왕자가 있다. 1번부터 시계 방향으로 동그랗게 앉아 있다.
  - 1번부터 1부터 시작하여 번호를 외치고 K(특정숫자)를 외치면 그 왕자는 제외되고 원에서 나오게 된다.
  - 그 다음 왕자부터 다시 1부터 시작하여 번호를 외친다.
  - 마지막까지 남은 왕자가 공주를 구하러 갈 수 있다.

💡알고리즘 설계
  - 큐 역할의 변수 queue를 선언하고 n만큼의 반복문을 돌며 큐에 n - index을 요소로 채운다.
  - 외친 숫자를 저장할 count를 선언하고 0으로 초기화한다.
  - while 문의 조건식으로 큐의 길이가 1보다 클 때로 반복문을 돈다.
  - 큐를 pop하고 count를 1 더한다.
  - count가 k보다 작으면 pop한 요소를 unshift하고 continue한다.
  - count가 k이면 count를 0으로 초기화한다.
  - 큐의 길이가 1이 되면 while 문은 종료된다. answer는 queue의 첫 번째 인덱스 값이다.
*/

function solution(n, k) {
  let answer;
  const queue = Array.from({ length: n }, (_, i) => n - i);
  let count = 0;

  while (queue.length > 1) {
    const el = queue.pop();
    count++;

    if (count < k) {
      queue.unshift(el);
      continue;
    }

    count = 0;
  }

  answer = queue[0];

  return answer;
}

console.log(solution(8, 3));
