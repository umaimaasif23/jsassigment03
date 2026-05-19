// 1. Write a function that displays current date & time in your
// browser
// function displayDateTime() {
//   let now = new Date();
//   return now;
// }
//   console.log(displayDateTime());


function displayDateTime(){
  let time=new Date();
  let read=time.toLocaleString();
  document.getElementById("output").innerHTML=read
setInterval(displayDateTime,1000);

}

// ___________________________________________________

// 2. Write a function that takes first & last name and then it
// greets the user using his full name


// method 1

// let firstName=prompt("enter first name");
// let lastName=prompt("enter last name");

// function greet(firstName,lastName){
//    let message=(`Hello ${firstName}  ${lastName}`)
//   return message
// }


// alert(greet())





// function handleGreeting(){
//  let first=document.getElementById(fName).value
//   let last=document.getElementById(lName).value

// }

// function greet(){
//   return "hello";
// }

// alert(greet())


// let userName=prompt("enter name")
// function message(name){
//  return "Hello " + name 

// }

// alert ( message (userName));

// // Task 3

// let solve1 =+ prompt("enter first no");
// let solve2 = +prompt("enter last no");

// function num (a,b){
//   return a+b
// }
// alert (num(solve1,solve2  ));

// let number = Number(prompt("Enter a number"));
// function check(num){
//   if (num % 2 == 0){
//         return "Even";
//   } else {
//     return "Odd";
//   }
//   }

//   alert(check(number))me=()


// let fName=prompt("enter first name");
// let LName=prompt("enter last name ");

// function userNamename(firt,last){
// return firt + " " + last

// }

// alert(userNamename(fName, LName))


// 2. Write a function that takes first & last name and then it
// greets the user using his full name

// let fName=prompt("enter first name");
//  let LName=prompt("enter last name ");

//  function greet(first,last){
// return " Hello " + first + " " + last 

//  }

//  alert(greet(fName,LName));

//  ____________________________________________________

//  3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// let num1=Number(prompt("enter first number"));
// let num2=Number(prompt("enter 2nd no"));

// function cal(a,b){
//   return a+b
// }

// alert(cal(num1,num2))

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.


// let num1 = Number(prompt("Enter first number"));
// let num2 = Number(prompt("Enter second number"));
// let operator = prompt("Enter operator (+, -, *, /)");

// function calculator(n1,n2,op){
//   if(op == "+"){
//    return n1+n2
//   }else if(op == "-"){
//    return n1-n2
//   }else if(op == "*"){
//    return n1*n2
//   }else if(op == "/"){
//    return n1/n2
//   }else {
//     return "enter valid operator"
//   }
// }
// alert(calculator(num1,num2,operator ))

// 5. Write a function that squares its argument.

// let num=Number(prompt("enter no"));


// function square(number){
// return number * number
// }

// alert(square(num));


// ______________________________________________

// 6. Write a function that computes factorial of a number.

// let number = Number(prompt("Enter a number to find factorial"));


// function factorial (n){
// let result=1;
// for(let i=1; i <=n ; i++){
// result *=i
// }
// return result
// }

// alert(factorial(number))

// 7. Write a function that take start and end number as inputs
// & display counting in your browser

// let start = Number(prompt("Enter start number"));
// let end =  Number(prompt("Enter end number"));

// function displayCounting (s,e){
//   result=" "
 
//   for (let i=s ; i<=e ; i++ ){
//   result +=i + " "
// }
//  return result

// }

// alert(displayCounting(start,end))

// _________________________________________________________

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// function | JAVASCRIPT
// Page 2 of 4
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// function calculateHypotenuse(base, perpendicular){

// function calculateSquare(num) {
//   return num*num;
// }
// let baseSquare = calculateSquare(base);
//     let perpendicularSquare = calculateSquare(perpendicular);
//     let sum = baseSquare + perpendicularSquare;

//     let hypotenuse = Math.sqrt(sum);
//       return hypotenuse;



// }

// let result = calculateHypotenuse(3, 4);
// console.log(result);

// _________________________________________________________

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


// function calculateArea(w,h){
//   return w*h
// }
// let area1=calculateArea(5,4)
// console.log(area1);


// let width=5;
// let height=7;

// function calculateArea (w,h){
//  return w*h
// }

// console.log(calculateArea(width,height));

// ____________________________________________________

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// function isPalindrome (str){
//   let lowerStr=str.toLowerCase();
//   let reversedStr=lowerStr.split('').reverse().join('')

//   // condition

//   if (lowerStr === reversedStr ){
//   return true;
//   }else {
//     return false;
//   }
// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));

// __________________________________________________


// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


// function toTitleCase(str){

// let words=str.split(' ')

// for (let i=0 ; i < words.length ; i++){
//   words[i]=words[i][0].toUpperCase() +  words[i].substring(1).toLowerCase()
// }

// return words.join(' ')

// }


// let example = 'the quick brown fox';

// console.log(toTitleCase(example));

// ________________________________________________________

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function longestWord (str){
// let words=str.split(' '); 

// let longest="";

// for (let i=0; i < words.length ; i++ ){
//   if (words[i].length>longest.length){
//         longest=words[i]
//   }
 
// }
// return longest;

// }
// let example = 'Web Development Tutorial';
// console.log(longestWord(example));

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'


// function countLetter(str, letter){
// let count=0;

// for(let i=0 ; i<str.length ; i++){
//     if( str[i] === letter){
//       count++
//     }
// }
// return count

// }

// console.log(countLetter('JSResourceS.com','o'));

// ____________________________________________________________

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference(radius){
  let circumference = 2*Math.PI*radius;
  return circumference
  
}

console.log(calcCircumference(7));


function calcArea(radius){
  let area = Math.PI*radius*radius;
  return area
  
}

console.log(calcArea(7));