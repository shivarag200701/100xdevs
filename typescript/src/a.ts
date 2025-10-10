function firstEl<T>(arg: T[]) {
  return arg[0];
}

const value1 = firstEl<string>(["shiva", "raghav"]);
const value2 = firstEl<number>([1, 2]);

console.log(value1?.toUpperCase());
