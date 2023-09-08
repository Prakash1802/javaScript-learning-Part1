"use strict";// Here global scope
/*
->Treat all js code as newer version
->"use strict"; Defines that JavaScript code should be executed in 
"strict mode".
->The "use strict" directive was new in ECMAScript version 5.
-> "use strict"; Declared inside a function, it has local scope (only the code inside the function is in strict mode):
*/
x='Prakash';
console.log(x);// This will cause an error because x is not declared


function myFunctionTest() {
  "use strict";
  y = 3.14;   // This will cause an error
  console.log(y);
}

myFunctionTest();

alert(3+3);// Error, because We are using nodejs platform to run this script, not browser.

//Primitive DataTypes
//(1) number
//(2)bigint
//(3)string = ""
//(4) boolean=> true/false
//(5)null=> standalone value let x=null;
//(6)undefined => value not assigned let x;
//(7) symbol=>uniqueness 

// Non primitive DataType
// Object

console.log(typeof "Prakash")//string
console.log(typeof null);//object
console.log(typeof undefined);//undefined