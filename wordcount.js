function wordCount(count){
    var output = count.split(' ').length;
    return output;
}
var result = wordCount('hi! I am Shahjahan. I like to learn Programming');
console.log(result);

//perfect coding, if anyone use speech it will not count
var wordCount = "I am Shahjahan. I like to learn Programming.";
var count = 1;
for(var i = 0; i < wordCount.length; i++){
    var wordNumber = wordCount[i];
    if(wordNumber == " " &&  wordCount[i-1] != " "){
        count++;
    } 
}
console.log(count);