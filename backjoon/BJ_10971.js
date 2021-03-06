// 외판원 순회2 (미완)
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let data = [];
rl.on('line', (line) => {
  data.push(line);
}).on('close', () => {
  const N = Number(data.shift());
  let minCount = Infinity;    // 결과값 max로 초기화
  const visited = [];   // 방문 처리용 배열
  const array = [];     // 전체 데이터
  const select = [];    // 순회 마을 결과값
  for (let i = 0; i < N; i++) {
    visited[i] = false;
  }
  for (let i = 0; i < data.length; i++) {
    array.push(data[i].split(/\s/).map(v => +v));
  }
  dfs(0);
  console.log(minCount);
  function dfs(count) {
    if (count === N) {
      let num = 0;
      for (let i = 0; i < N - 1; i++) {
        num += array[select[i]][select[i + 1]]
      }
      if (array[select[select.length - 1]][select[0]] === 0) {
        return;
      }
      else {
        num += array[select[select.length - 1]][select[0]];
      }
      minCount = Math.min(minCount, num);
      return;
    }

    for (let i = 0; i < array.length; i++) {
      // 방문 검색
      if (!visited[i]) {
        if (select.length > 0 && array[select[select.length - 1]][i] === 0) continue;
        visited[i] = true;
        select.push(i);   // 결과 배열에 값 push
        dfs(count + 1);
        select.pop();     // 결과 배열에 값 pop
        visited[i] = false;
      }
    }
  }
});