
sum = 0;
function totalSum(arraySum){
    for(var i = 0; i < arraySum.length; i++){
        var result = arraySum[i];
        sum = sum + result;
    }
    return sum;
}
var arraySum = [10, 5, 8, 14, 32, 21];
var output = totalSum(arraySum);
console.log("Before total = ",output);
var output1 = totalSum([5, 45]);
console.log("After total = ",output1);