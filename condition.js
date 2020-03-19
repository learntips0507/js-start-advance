var myPrice = 500000;
var carPrice = 1200000;


// var carPrice = 500000;
// if(carPrice <= 900000){
//     console.log("I'll buy this car.");
// }else{
//     console.log("Impossible to buy this carPrice.");
// }


// if(myPrice === carPrice){
//     console.log("I'll buy this car.");
// }else if(myPrice < carPrice){
//     console.log("Impossible to borrow  this carPrice.");
// }else{
//     console.log("monthly Paid");
// }

function result(grade){
    if(100 < grade){
        console.log("Invalid Number");
    }else if(100 <= grade || 90  <= grade){
        console.log("A++");
    }else if(89 <= grade || 80  <= grade){
        console.log("A+");
    }else if(79 <= grade || 70  <= grade){
        console.log("A");
    }else if(69 <= grade || 60  <= grade){
        console.log("A-");
    }else if(59 <= grade || 50  <= grade){
        console.log("B");
    }else if(49 <= grade || 40  <= grade){
        console.log("C");
    }else if(39 <= grade || 33  <= grade){
        console.log("D");
    }else{
        console.log("Fail");
    }
    return grade;
}
const output = result(51);
console.log(output);

