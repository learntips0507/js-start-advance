//Remove duplicate item from an array
var removeArray = [2, 3, 5, 3, 4, 2,4, 8, 7,];
var uniqueArray = [];
for(var i = 0; i < removeArray.length; i++){
    var arrayNumber = removeArray[i];
    var index = uniqueArray.indexOf(arrayNumber);
    if(index == -1){
        uniqueArray.push(arrayNumber);
    }
}
console.log(uniqueArray);