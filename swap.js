//using a temporary variable. 
// var a,b,tamp; 
// a = 5;
// b =10;
// temp = a;
// a = b;
// b = temp;
// console.log(a ,b);

//ES6
var a,b;
a =5;
b =10;
console.log('Before swap a = '+ a + ' b = '+b);
[a , b] = [b , a]
console.log('After swap a = '+ a + ' b = '+b);
