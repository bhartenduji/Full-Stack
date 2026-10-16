// 1. Object
let student = {
    name: "Ayush",
    age: 20
};
console.log(student);

// 2. Array
let numbers = [10, 20, 30];
console.log(numbers);

// 3. Function
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

// 4. Date
let date = new Date();
console.log(date);

// 5. Map
let map = new Map();
map.set("name", "Ayush");
console.log(map);

// 6. Set
let set = new Set([1, 2, 2, 3]);
console.log(set);

// 7. RegExp
let pattern = /hello/i;
console.log(pattern.test("Hello"));

// 8. Error
let error = new Error("Something went wrong");
console.log(error.message);