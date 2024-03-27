// let data = new Set();

// data.add("hello");
// data.add("hi");
// data.add("hey");
// data.add({ name: "anil" });
// data.delete("hi");
// data.clear();

// data.forEach((item) => {
//   console.warn(item);
// });
// for (x of data) {
//   console.warn(x);
// }
// console.warn(data);

let data = new Set([20, 1, "abc", "yz"]);
data = [...data];
console.warn(data);
