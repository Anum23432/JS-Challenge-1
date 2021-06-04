// PROBLEM 1-- FORLOOP--

function clap() {
    for (let i = 0; i < 50; i++)
    console.log("clap");
}
// in console 50 is printed with clap.
//   part B
for (let a = 0; a < 200; a++) {
     console.log(a);
}
//  PROBLEM 2 --dercrement operators--
for (let b = 200; b >= 0; b -= 3) {
    console.log(b);
}
// so in console the value is decreasing from 200 to 0 by step of 3.

// PROBLEM 3--Infinite loop--
for (let c = 10; c < 50 ; c++){
    console.log(c);
}
// for(;;){}
// and we are not using this because my system got hanged when i created 
// infinite loop..

// PROBLEM 4 -- while loop--

let d = 1;
while(d <= 10){
    console.log("AFIFA.");
    d = d+1;
}
// as the name is printed on console 10 times.

// PROBLEM 5--Dowhile loop--
let e = 1;
do{
    console.log("Afifa");
    e = e+1;
} while(e <= 10);
