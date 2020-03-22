// function multiply(a , b=2){
//     return a * b;
// }
// const output = multiply(2 , 3);
// const output1 = multiply(2);
// console.log(output);
// console.log(output1);

function undefineValue(x,y){
    if(y == undefined){
        y = 0;
    }
    return x + y;
}
const output = undefineValue(10);
console.log(output);

function undefineValue(x,y){
    y = y || 10;
    return x + y;
}
const output = undefineValue(10);
console.log(output);