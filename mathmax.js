var x = 25;
var y = 50;
var z = 22;
if(x > y){
    if(x > z){
        console.log("x is big");
    }
    else{
        console.log("z is big");
    }
}else{
    if(y > z){
        console.log("y is big");
    }else{
        console.log("z is big");
    }
}
var bigNumber = Math.max(x, y, z);
console.log(bigNumber);

var smallNumber = Math.min(x, y, z);
console.log(smallNumber);