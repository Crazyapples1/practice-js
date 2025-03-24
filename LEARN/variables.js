const accountId = 12231;
let accountEmail = "abcd@gmail.com";
var accountPassword = "123456";
accountCity = "Jaipur";
let accountStete;

//accountId = 2 nor possible(const)
accountEmail = "abcde@gmail.com";
accountPassword = 12345678;
accountCity = "Delhi";
console.table([accountId, accountEmail, accountPassword, accountCity]);
/*
Dont use var because of block and functional scope
*/
