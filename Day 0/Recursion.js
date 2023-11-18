const sum = (arr, n) => {
  if (n == 0) return 0;
  return sum(arr, n - 1) + arr[n - 1];
};

console.log(sum([5, 3, 2], 1));
