// PROBLEM 1-- comparison operators--

let a = 4;
let b = 5;
let c = 4<=5;
console.log(c);
//  IN console the answer is true because value of x is less and equal to 5.


// PROBLEM 2-- assignment operators--
// when we assign some value to some variable..

let x = 3;
let y = x + 1;
console.log(y);
// in console the answer is 4.
let z = x += 3;
console.log(z);

// PROBLEM 3 -- logical operators--
// comparing two conditions ..
 let e = true && true;
 let f = false && true;
 let g = false && false;
 let h = false || true;
 let i = 5>4 && 2<5;
 let j = 2==9 || 2==2;
 let k = !(!(4>2));
 let l = [e , f , g , h , i , j , k ];
 console.log([l]);
//  so in console we get an array og our answer..

// PROBLEM 4 --rocket example--

let isRain = false;
let isSnow = false;
let wind = 20;

let rocket = (isRain === false) && (isSnow === false) && (wind < 20);

function canLaunch() {
    alert("The rocket can be launch.")

}
/* as we use here && operators because we need all three conditions should be true
for rocket launching. if the condition is changed like any one condition can be 
true in that case we will use || operator..*/

// PROBLEM 5-- if/else condition--
function result() {
    let marks = parseInt(document.querySelector("input").value);
    if (marks > 50){
        alert("You are passed.");
}   
    else {
        alert("Better luck next time.")
}
}

// PROBLEM 6 -- switch case--

let percentage = 75;
switch (true) {
    case  (A = percentage > 85 ) :
        console.log("PASSED.");
    break;
    case  (B = percentage > 75) :
        console.log("PASSED.") ; 
    break;
    case  (C = percentage > 65):
        console.log("PASSED.") ;
    break;
    case  (D = percentage > 55):
        console.log("PASSED.") ;
    break;
    case  (E = percentage > 45):
        console.log("PASSED.") ;
    break;
    case  (F = percentage > 35) :
        console.log("FAILED.")  ;

}
