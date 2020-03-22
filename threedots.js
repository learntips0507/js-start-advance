//old system array
const arrayOne = [12, 20, 10, 5, 41]
const arrayTwo = [22, 25]
const arrayThree = [23, 41, 24, 2, 32]
// const arrayResult = arrayOne.concat(arrayTwo).concat(arrayThree)
const arrayResult = [...arrayOne, ...arrayTwo, ...arrayThree]
console.log(arrayResult);


const bigValue = Math.max(500 , 540, 401)
console.log(bigValue)

const money = [520, 621, 413, 745, 541, 632, 540]
const result = Math.max(...money)
console.log(result)