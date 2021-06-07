// PROBLEM 1  -- introduction to function--

function double(paisa) {
    let answer = paisa * 2;
    return answer;
}
console.log( double(10) );

// PROBLEM 2 -- calling function--
// we can call function by different methods like
function double(paisa) {
    return paisa * 2;
}
console.log ( double(5) );
// so in console we can use this function many times by changing the 
//  value of paisa

// PROBLEM 3--function with multiple inputs parameters--
function addTwoNumbers(numb1 , numb2) {
    let sum = numb1 + numb2;
    return sum;
}
console.log( addTwoNumbers (4 ,6) );
// so in this case if more than two inputs are required then we increase 
// the numb1, numb2 , numb3 and so on.
 
// PROBLEM 4--returning sum otherway--
//  if we don't want to use variables we can do it as..
function addThreeNumbers(numb1 , numb2 , numb3) {
    return numb1 + numb2 + numb3;
}
// so the console will answer the same way..