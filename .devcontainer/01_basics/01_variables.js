const accountId = 12345;
let accountEmail = 'prakash@gmail.com';
var accountPassword = '12345678';
accountCity = 'Jaipur';

let accountState;
/*
Prefer not to use var 
because the issue of block scope & function scope
*/
console.log(accountCity)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);