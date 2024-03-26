let data = new Map([
  ["name", "Peter"],
  [true, "this is a bool key in map"],
]);

data.set("city", "Delhi");
data.set({}, "this is a object type");
data.set(() => {}, "this is a arrow function type");

// console.warn(obj.key);
// console.warn(data.has(true));

// data.forEach((v, k) => {
//   console.warn(k, v);
// });

// for ([k, v] of data) {
//   console.warn(k);
// }

console.warn(typeof data);
