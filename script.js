console.log("Hello World");
document.write("Hello World");
//let x; this an undefined vaariable 
//diff bwteen null and defined is that null is an empty value and undefined is a variable that has been declared but not assigned a value.
//case sensative means that the variable name is case sensitive, so x and X are different variables.
/*abstrct, export, import, super, this, throw, try, catch, finally, break, case, continue, default, do, else, if, return, switch, throw, while, with, yield are reserved keywords in JavaScript.*/
/*to assign value var varname = var value; let varname = var value; const varname = var value;
example let x;
        x=10(possible with let and var but not with const) or
        let x=10
        let x=20(will not redeclare but possible with var)
        */
//primitive type single value number:1,2,3,etc. string:character enclosed quarrey
var num = 10;
console.log(num);
console.log(typeof(num));
num = false;
//refrence type multiple value array:[], object:{}, function.
var sayhello = function() {//function in variable
    alert("Hello World");
}
var numberArray = [1,2,3,4,5];//static array
var animals = new Array("dog","cat","cow");//new is dynamic memory allocation
var person = {
    name:"Varun",
    age:20,
    title:"Student"
}
//symbol is a new primitive type in JavaScript that is used to create unique identifiers for objects. It is created using the Symbol() function and can be used as a property key in an object. Each time you create a new symbol, it is guaranteed to be unique, even if it has the same description as another symbol. This makes symbols useful for creating private properties in objects or for defining constants that should not be accidentally overwritten.
const sym1=Symbol(4)
console.log(sym1);
const sym2=Symbol(4)
console.log(sym2);
if(sym1===sym2){
    console.log("true");
}
else{
    console.log("false");
}
//avoids clashes as each symbol is unique and cannot be overwritten by another symbol with the same description. This makes symbols useful for creating private properties in objects or for defining constants that should not be accidentally overwritten.
/*javascript operators types: arithmetic, assignment, comparison, logical, bitwise, ternary, typeof, void, delete.
example: arithmetic: +, -, *, /, %, ++, --;
assignment: =, +=, -=, *=, /=, %=;
comparison: ==, ===, !=, !==, >, <, >=, <=;*/
//note = = is used for comparison of values and == = is used for comparison of values and data types. For example, 5 == "5" will return true because the values are equal, but 5 === "5" will return false because the data types are different.
var a = 5;
var b = "5";
console.log(a == b);    // true
console.log(a === b);   // false

