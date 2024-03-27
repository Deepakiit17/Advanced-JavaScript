let users = {
  student: {
    name: "",
    age: 0,
  },
};

console.warn(users.student.name ?? "unknown");
console.warn(users.student.age ?? 21);
