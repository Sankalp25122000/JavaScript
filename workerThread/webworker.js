self.onmessage = (msg) => {
  let sum = 0;
  for (let i = 1; i <= 10000000000; i++) {
    sum += i;
  }
  postMessage(sum);
};
