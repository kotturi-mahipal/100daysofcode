function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) return [];
  const rangeNum = rangeOfNumbers(startNum, endNum - 1);
  rangeNum.push(endNum);
  return rangeNum;
}

console.log(rangeOfNumbers(5, 15));
