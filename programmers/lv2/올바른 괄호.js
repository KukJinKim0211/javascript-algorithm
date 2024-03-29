function solution(s) {
  let count = 0;
  const newArray = s.split("");
  for (let i = 0; i < s.length; i++) {
    count += newArray[i] === "(" ? 1 : -1;
    if (count < 0) return false;
  }

  return count === 0 ? true : false;
}
