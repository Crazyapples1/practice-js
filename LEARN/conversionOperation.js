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

