const repeatArr = [10, 20, 10, 20, 100, 100, 30, 50, 60, 100, 100];

const mode = (a) => {
  Object.entries(
    a.reduce((b, c) => ({ ...b, [c]: isNaN(b[c]) ? 1 : b[c] + 1 }, {}))
  ).sort(([, f1], [, f2]) => f2 - f1)[0][0];
};

// const mode = (a) => {
//     Object.entries(
//       a.reduce((b, c) => ({b[c] ? 1 : b[c] + 1 }, {}))
//     ).sort(([, f1], [, f2]) => f2 - f1)[0][0];
//   };

console.log(mode(repeatArr));
