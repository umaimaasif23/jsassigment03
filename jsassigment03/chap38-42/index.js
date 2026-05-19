// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function power(a,b){
    return Math.pow(a,b)
}

console.log(power(2,5));

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.


function isleapYear(year){
if ((year % 4 === 0 & year % 100!==0) || (year % 400 === 0)){
return true ;
}else {
    return false;
}
}
console.log(isleapYear(2012));
console.log(isleapYear(2024));
console.log(isleapYear(2018));
console.log(isleapYear(2027));


// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions


function calculateS(a,b,c){
    return (a+b+c)/2
}

function calculateArea(a,b,c){
let S=calculateS(a,b,c);
let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
return area
}


console.log(calculateArea(4,8,6));