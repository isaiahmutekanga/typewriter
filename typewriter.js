const sentence = "hello there from lighthouse labs";
let count = 0;
for (const char of sentence) {
  count++;
  setTimeout(() => {
    process.stdout.write(char);
  }, 90 * count); // <= 1s delay to make it noticeable. Can dial it down later.
}
setTimeout(() => {
  console.log(" ");
}, 2881);
