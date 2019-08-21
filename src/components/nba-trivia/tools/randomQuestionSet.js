// populate an array with consecutive integers
const fillRange = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((item, index) => start + index);
};

export const randomQuestionSet = () => {
  // const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  const a = fillRange(1, 25);
  let n;
  let random = [];
  for (n = 1; n <= 5; ++n) {
    // returns random integer(floor) from 0 to 25 --> returns random index from array above
    let i = Math.floor(Math.random() * (25 - n) + 1);
    // insert value at that index into r
    random.push(a[i]);
    // replaces index just chosen with different number?
    a[i] = a[25 - n];
    // console.log(`Inside loop: ${a}`);
  }

  return random;
};
