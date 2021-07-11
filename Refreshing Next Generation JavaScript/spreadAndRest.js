console.log("=================");
console.log("Lecture: Spread and Rest Operators");

//Spread
const numbers = [1, 2, 3];
const newNumbers = [...numbers,4];

console.log(newNumbers);

//Rest
const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1,2,3));