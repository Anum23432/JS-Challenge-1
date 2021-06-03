// PROBLEM 1
//  global variables are not inside the blocks
//  let name = "khadija";
    //  age = 26 ;
    //  isHungry = false; 
//  when we are writing name in console it is giving its value which 
// is khadija and we have given boolean values differently.

// PROBLEM 2
// let myNumb = 235 ;
// in console myNumb data type is number now wo change it into string.
//  let num = (myNumb).toString();

//  console.log(num);
//  now the type of num is string

// let m =  "2.3";
// let n = parseInt(m);

// console.log(n);
// now the value of n is 2 and it is changed into integer. 

// let c = 6.4 ;
// let d = parseFloat(c);

// console.log(d);


// PROBLEM 3
let  name2 = "maham";
    age = 14 ;
    isHappy = true;

 function myFunc() { 
    
console.log(name2);

}
// so here as we print the value of name2 so age is printed 14

// PROBLEM 4

let c1 = 8 ;
    c2 = 9 ;
    c3 = (c1+c2);
    console.log(c3);
    /* in console the value is given 17 by adding these two values
    for multiplication expression
    c3 = (c1*c2)
    as staric denotes multiplication and lastly for division
    c3 = (c1/c2)*/

    let value = 0;
    function addValue() {
        value = value + 5;
        document.querySelector("p").innerHTML = value;
    }