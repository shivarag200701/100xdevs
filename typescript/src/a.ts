function runFun(fn: (name: string) => string) {
  setTimeout(() => {
    console.log(fn("shiva"));
  }, 1000);
}
runFun(fun);

function fun(name: string): string {
  return `shiva is ${name}`;
}
