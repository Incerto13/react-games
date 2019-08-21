const fillRange = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((item, index) => start + index);
};

const a = fillRange(1, 25);

console.log(a);
