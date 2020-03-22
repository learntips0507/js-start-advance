
var revers = "";
function reversString(str){
    for(var i = 0; str.length; i++){
        var count = str[i];
        revers = count + revers;
    }
    return revers;
}
var myStatement = "SHAHJAHAN";
var wordRevers = reversString(myStatement);
console.log(wordRevers);