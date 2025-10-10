function runFun(fn: () => void) {
  setTimeout(() => {
    fn;
  }, 1000);
}
runFun(function () {
  console.log("hi");
});
