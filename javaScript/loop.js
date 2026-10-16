let arr = ["Apple", "Banana", "Mango"];
// Use for...of when you want to access the actual values in an iterable, such as an array or string.
for (let x in arr) {
    console.log(x);
}
// Use for...in when you want to access the enumerable property keys of an object.
for (let x of arr) {
    console.log(x);
}