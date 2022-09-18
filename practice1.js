/*console.log("Hello World");
//let a = 65
//console.log(a);
var a = 6;
var a = 9;
let b = 3;
let b = 5;*/


//nn ss bb u -primitives in js
let a = null;
let b = 865;
let c = true; //can also be flase
let d = BigInt("872") + BigInt("6")
let e = "ROjina"
let f = Symbol(" i am a nice symbol")
let g //undefined

console.log(a, b, c, d, e, f, g)
console.log(typeof d)
console.log(typeof f)







// objective in js - non primitive data type
const item = {
    "Ram": true,
    "Sam": false,
    "Rohan": 54,
    "Roshni": undefined,
}
console.log(item["Rohan"])

// create variable of type string and try to add number to it.

let r = "rojina"
let n = 7
console.log(r + n)

// us type of operator to find the data type of string in last question.

console.log(typeof r + n)

//create a const object in js can you change it to hold number later.

const a1 = {
    name: "Rojina",
    section: 1,
    isPrinciple: false
}

// try to add a new key to the const objective in problems3 were you able to do it.
//a1 =45
a1['friend'] = " Karan"
a1['name'] = " Chanda"
console.log(a1)

// write the programme to create a word meaning dictionary of 5 words.

const dict = {
    yam: "a potato-like root from a tropical climbing plant that can be eaten, or the plant it grows from",
    quintuplet: "any of five children born at the same time to the same mother",
    parental: "The government repeatedly stressed its support for parental choice in the selection of a child's school.",
    chuck: "to throw something carelessly:",
    yack: "to talk continuously, especially informally about things that are not very important",

}
console.log(dict['yack'])

//Arithemetic opretor
/*console.log("oprators in js");
let x = 6;
let y = 66;
console.log("x + y =", x + y)
console.log("x - y =", x - y)
console.log("x ** y =", x ** y)
console.log("x % y =", x % y)
console.log("x++ =", x++)
console.log("x  =", x)
console.log("++x =", ++x)
console.log("x-- =", x--)
console.log("x  =", x)
console.log("--x =", --x)*/

//Assingment opretor
let assingment = 1;
assingment += 9 // same as assingment = assimgmrnt +9
console.log("a is now =", a)
assingment -= 9 // same as assingment = assimgmrnt -9
console.log("a is now =", a)
assingment *= 9 // same as assingment = assimgmrnt *9
console.log("a is now =", a)
assingment /= 9 // same as assingment = assimgmrnt /9
console.log("a is now =", a)


//comparison operator
let comp1 = 8;
let comp2 = 4;
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)

//Logical oprator
let p = 3;
let q = 7;
console.log(p < q && p == 3)
console.log(p > q || p == 3)
console.log(!false)
console.log(!true)