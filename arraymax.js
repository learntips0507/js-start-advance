var arrayMax = [12, 50, 23, 65, 14, 21];
var max = arrayMax[0];
for(var i =0; i < arrayMax.length; i++){
    var result = arrayMax[i];
    if(result > max){
        max = result;
    }
}
console.log(max);