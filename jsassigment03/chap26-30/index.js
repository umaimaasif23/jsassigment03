// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// let input=+prompt("Enter a positve integer");
// let num=input;

// let number=Math.round(num);
// let floor = Math.floor(num);
// let ceil =Math.ceil(num);

// console.log(number);
// console.log(floor);
// console.log(ceil);

// ____________________________________________________________

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// let value=prompt("Enter a negative number");
// let num=parseFloat(value);


// let round=Math.round(num);
// let floor=Math.floor(num);
// let ceil=Math.ceil(num);

// document.writeln(`
//     number =${num}
//     round off =${round}
//     floor =${floor}
//     ceil =${ceil}
//     `)

//     ______________________________________________________

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// let num=-4;
// let absoluteValue =Math.abs(num);

// let secondNum =5;
// let abValue=Math.abs(secondNum);

// console.log(absoluteValue ) ;
// console.log(abValue);

// _____________________________________________________________

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:


// let num=Math.random();
// let value=Math.floor(num*6)+1;

// let result=value;

// console.log(value);
// ____________________________________________________________________

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

//  let value=Math.floor(Math.random()*2)+1;
//  if(value == 1){
//     console.log("Heads");
    
//  }else{
//     console.log("tails");
    
//  }

// _______________________________________________________________________

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// let number=Math.floor(Math.random()*100)+1;

// console.log(number);

// __________________________________________________________________________

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// let userInput=prompt("Enter your weight (e.g., 50, 50kgs, 50.2kilograms):");
// let weight=parseFloat(userInput);

// if(isNaN(weight)){
//     console.log("Sorry, I couldn't find a valid number in your input.");
    
// }else{
//     console.log("Your weight is: " + weight + " kilograms.");
    
// }
// ____________________________________________________________________________


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


// let num=Math.floor(Math.random()*10)+1;

// let guess=+prompt("Enter a number between 1 and 10");

// if( guess == num){
//  console.log("congratulation! you guess the correct number");
 
// }else{
//     console.log("ohhh! try again");
    
// }