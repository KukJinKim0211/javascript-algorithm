function solution(x, n) {
  var answer = [];
  let num = 0;
  for (let i = 0; i < n; i++) {
    num += x;
    answer.push(num);
  }
  console.log(answer);
  return answer;
}

solution(2, 5);
