"use strict";
// *************************************  CLASS 9 ***************************************************
// type student = {
//   name: string;
//   rollNumber: number;
// };
// let students: student[] = [
//   {
//     name: "zainab",
//     rollNumber: 123,
//   },
//   {
//     name: "sakina",
//     rollNumber: 123,
//   },
//   {
//     name: "zerlush",
//     rollNumber: 456,
//   },
// ];
// console.log(students[1].name);
// ***************************************************************************************************
//    ARARY       "SLICE"
//  let fruits:string[]=["mango","apple","banana","kiwi"]
//  let dupfruits= fruits.slice()
//  dupfruits.pop()
//  console.log(fruits); // output: ["mango","apple","banana","kiwi"]
// let fruits:string[]=["mango","apple","banana","kiwi"]
//  let dupfruits= fruits.slice(1,2)
//  dupfruits.pop()
//  console.log(dupfruits);   // output : []
// let fruits:string[]=["mango","apple","banana","kiwi"]
//  let dupfruits= fruits.slice(1,3)
//  console.log(dupfruits);  //output : ["apple","banana"]
// ***************************************************************************************************
//                              SPLICE
// let fruits:string[]=["mango","apple","banana","kiwi"]
//  fruits.splice(1,2,)
// console.log(fruits);    // output: [ 'mango', 'kiwi' ]
// let fruits:string[]=["mango","apple","banana","kiwi"]
//  fruits.splice(1,0,"grapes")
// console.log(fruits);  // [ 'mango', 'grapes', 'apple', 'banana', 'kiwi' ]
// let fruits:string[]=["mango","apple","banana","kiwi"]
//  fruits.splice(1,0,"grapes","strawberry")
// console.log(fruits);  // output : [ 'mango', 'grapes', 'strawberry', 'apple', 'banana', 'kiwi' ]
// let fruits:string[]=["mango","apple","banana","kiwi"]
//  fruits.splice(1,0)
// console.log(fruits);
// ***************************************************************************************************
// practice task
// let fruits:string[]=["mango","apple","banana","kiwi"]
//  fruits.splice(1,1,"orange")
// console.log(fruits);
// let fruits:string[]=["mango","apple","banana","kiwi"]
//  fruits.splice(2,0,"orange","banana")
// console.log(fruits);
let fruits = ["mango", "apple", "banana", "kiwi"];
fruits.shift(); // start huwa mango sai , mango delete hogaya
fruits.splice(1, 1, "orange"); // [apple,banana,kiwi]  , // banana start huwa , wo delte hogaya, orange add ho gaya
console.log(fruits);
// ***************************************************************************************************
//                        TUPLES 
// let fruits:[string,string]=["mango","apple"]
// ***************************************************************************************************
//                                LOOPS
// for(let i = 0;true;i++){
//     console.log("sorry!");
// }       ///  output: infinte times sorry
// for(let i = 0;false;i++){
//     console.log("sorry!");
// }   //// output : kuch bhi nahi
// for(let i = 0;i <3; i++){
//     console.log("sorry!");
// }   /// ouput : three times sorry!
// for(let i = 0;i <=3; i++){
//     console.log("sorry!");
// }      // output : four times sorry
// for(let i = 10;i >= 1; i--){
//     console.log(i);
// }    //   output: counting 1 till 10
// ***************************************************************************************************
// ***************************************************************************************************
// ***************************************************************************************************
// home work
// claculator with inquirer
// indexof
// find
//filter
//
// ***************************************************************************************************
