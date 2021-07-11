console.log("=========================");
console.log("Lecture: Arrow Functions");
//normal function
function printMyName(name) {
    console.log(name);
}

printMyName("Max"); 


//Next GEN JS
const printMyNamee = (name) => {
    console.log(name);
}

printMyNamee('MAX');

const multiply = (number) => {
    return 2*number;
}

console.log(multiply(4));