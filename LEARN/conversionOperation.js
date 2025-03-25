let score1 = "33"

//console.log(typeof score1);
//OR
//console.log(typeof(score1)); //dont use this

let valueInNumber1 = Number(score1)
//console.log(typeof valueInNumber1);

let score2 = "3abc"
let valueInNumber2 = Number(score2)
//console.log(typeof valueInNumber2); // number
//console.log(valueInNumber2); //Nan => not a number. Therefore check before conversion
/*
If convert null to number then value = 0
and if undefined value = NaN
boolean(True) = 1
boolean(False) = 0
*/
let isLoggedIn = 1
let valueInBoolean = Boolean(isLoggedIn)
//console.log(valueInBoolean); //true
// 1 => true
//0 => false
//empty string "" => false
// string(not empty) => true
let someNumber = 33
let valueInString = String(someNumber)
//console.log(typeof valueInString);

// ---------------------Operations----------------------

let value = 3
let negvalue = -value
//console.log(negvalue);

/*
console.log(2+2); addition
console.log(2-2); subtraction
console.log(2*3); multiplication
console.log(2**3); power
console.log(2/2); division
console.log(2%2); remainder
*/

let str1 = "Hello"
let str2 = "World"
let str3 = str1 + str2
console.log(str3);


console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32
//add paranthesis for operations to organize and make code better

console.log(true) //true
console.log(+true); //1
console.log(+""); //0

//can define multiple variables:
let num1, num2, num3 = 2

let gameCounter  = 100
gameCounter++;//can also use ++gamecounter //dont do gameCounter = gameCounter++ (dosent work)
console.log(gameCounter);
//there is diff bw ++a and a++





