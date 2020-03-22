//JavaScript ES6 Arrow function 

const one = function(num){
    return num *3;
}
const result = one(5)
console.log(result);

//With Arrow Function: for one parameter
const one = num => num * 3;
const result = one(10);
console.log(result);
//for two or more parameter
const two = (a,b) => a + b;
const result2 = two(5,10);
console.log("Two parameter  = " + result2) ;
//Multiple parameter
const mathAdded = (x,y) =>{
    const add = x + y;
    const sub = x - y;
    const div = x / y;
    const mul = x * y;
    const summation = add + sub + div + mul;
    return summation;
} 
const result3 = mathAdded(5 , 7);
console.log(result3);