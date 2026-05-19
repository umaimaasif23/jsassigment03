// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

// let firstName=prompt("Enter your first name ");
// let lastName=prompt("Enter your last name ");


// document.writeln(firstName + lastName);

// _______________________________________________________________


// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser 

// let info=prompt("Enter your favorite mobile phone model");
// document.writeln(`My Favourite phone is ${info} <br>`);
// document.writeln(`lenght of string is :  ${info.length}`)

// _________________________________________________________________________

// 3. Write a program to find the index of letter “n” in the word 
// “Pakistani” and display the result in your browser . 

// let word= "Pakistani";
// let index= word.indexOf("n");

// document.writeln("String: " + word + "<br>");
// document.writeln("Index of 'n': " + index);


// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.


// let msg="Hello World";
// let index=msg.lastIndexOf("l");

// document.writeln(`
//     Srting:${msg}<br>
//     last index of 'l' is ${index}
//      `)
// _________________________________________________________________________

// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser. 

// let word="Pakistani";
// let char=word.charAt(3);

// document.writeln("String: " + word + "<br>");
// document.write("Character at index 3: " + char);
// _________________________________________________________________________

// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");


// let fullName = firstName.concat(" ", lastName);

// document.writeln("Hello " + fullName);

// _________________________________________________________________________

// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

// let word="Hyderabad";
// let newWord=word.replace("Hyder","Islam");

// document.write("Before: " + word + "<br>");
// document.write("After: " + newWord);
// _________________________________________________________________________

// 8. Write a program to replace all occurrences of “and” in the 
// string with “&” and display the result in your browser.


// var message = "Ali and Sami are best friends. They play cricket and football together."; 

// var update=message.replaceAll("and","&");

// document.write("Before: " + message + "<br><br>");
// document.write("After: " + update);
// _________________________________________________________________________

// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.

// let str="472";
// let num=parseInt(str);

// document.writeln("Value: " + num + "<br>");
// document.writeln("Type: " + typeof num);

// _________________________________________________________________________

// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.

// let userInput=prompt("Enter any text");
// let UppercaseInput=userInput.toUpperCase();


// document.writeln("User input: " + userInput + "<br>");
// document.writeln("In capital letters: " + UppercaseInput);
// _________________________________________________________________________

// 11. 
// Write a program that takes user input. Convert and 
// show the input in title case.


// let input =prompt("Enter your text here!");
// let words = input.toLowerCase().split(' ');

// for (let i=0 ; i<words.length ; i++){
// words[i]=words[i][0].toUpperCase()+ words[i].slice(1)
// }

// let finalResult=words.join(' ');
// document.writeln(`${finalResult}`);




// let paragraph = "my name is salman"


// let arr = paragraph.split(" ")
// let capitalizeArr = []


// console.log(arr)

//  for(let i = 0; i < arr.length; i++){

//   let titleCaseWords = arr[i][0].toUpperCase() + arr[i].slice(1)
//   capitalizeArr.push(titleCaseWords)
  
// }
// console.log(capitalizeArr);

//  let joinReturn = capitalizeArr.join(" ")
// paragraph = joinReturn

// console.log(paragraph) 



// practice////////////////////////////


// let para=prompt("Enter your text here");
// let words=para.toLowerCase().split(' ');

// for (let i=0; i<words.length; i++){
//   words[i]= words[i][0].toUpperCase()+words[i].slice(1)
// }

// let finalResult=words.join(' ');
// document.writeln(`${finalResult}`)
// ____________________________________________________________________________

// 2. Write a program that converts the variable num to 
// string. 
// Remove the dot to display “3536” display in your browser.


// let num=35.36
// let str=num.toString();

// console.log(str,typeof(str));

// let result=str.replace(".","");

// console.log(result);

// ___________________________________________________________________________

// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ . 
// Note: 
// ASCII code of ! is 33 
// ASCII code of , is 44 
// ASCII code of . is 46 
// ASCII code of @ is 64
// solution 1 

// let userName = prompt("Enter Username");
// let isValid = true;

// for (let i=0; i<userName.length ; i++){
// let charCode = userName.charCodeAt(i);

// if (charCode===33 || charCode === 44 || charCode === 46 || charCode === 64 ){
// isValid = false;
// break;
// }
// }

// if (isValid){
//     alert("Username accepted!!")
// }else {
//     alert("Please enter a valid username (symbols like @ . , ! are not allowed.");
// }

// solution 2

// let userName = prompt("Enter Username");
// let specialSymbols = ["@", ".", ",", "!"]  // Hamari banned list
// let hasSpecialChar = false;

// for (let i=0 ; i< userName.length; i++){
//    if(specialSymbols.includes(userName[i])){
//     hasSpecialChar = true;
//     break;
//    }
// }

// if (hasSpecialChar){
//     alert("Please enter a valid username without @, ., , or !")
// }else{
//     alert("Username saved: " + userName);
// }

// 10. Write a program that takes user input. Convert and 
// show the input in capital letters. 

// let userName =prompt("Enter your name");
// let output = userName.toUpperCase();

// alert(output);
// __________________________________________
// 14. You have an array 
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not. 
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:


// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt(`Welcome to ABC Bakery. What do you want to order sir/ma'am?
//     1. cake
//     2.apple pie 
//     3.cookie
//     4.chips
//     5.patties
    
//     `);
// let searchItem = userInput.toLowerCase();
// let foundIndex = -1;


// for (let i=0; i<A.length ; i++){
// if (A[i].toLowerCase() == searchItem){
//    foundIndex = i;
//    break;
// }
// }
// if (foundIndex !== -1){
// alert(userInput + " is available at index " + foundIndex + " in our bakery.")
// }else{
//     alert("We are sorry, " + userInput + " is not available in our list.");
// }


// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let uerInput = prompt(`Welcome to ABC Bakery. What do you want to order sir/ma'am?
//      1. cake
//      2.apple pie 
//      3.cookie
//      4.chips
//     5.patties `);
//     let searchItem=uerInput.toLowerCase();


//     let itemFound=-1

//     for (let i=0; i<A.length; i++){
//         if (searchItem ==A[i].toLowerCase()){
//           itemFound = i;
//           break;
//         }
//     }

//     if (itemFound !== -1 ){
//   alert(uerInput + " is available at index " +  itemFound + " in our bakery")
//     }else {
//         alert("We are sorry, " + uerInput + " is not available in our list.");
//     }



// ________________________________________________________________

// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements: 
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long 
// If the password does not meet above requirements, 
// prompt the user to enter a valid password. 
// For character codes of a-z, A-Z & 0-9, refer to ASCII 
// table at the end of this document.

// let password = prompt("Enter your password:");

// let hasAlphabet = false;
// let hasNumber = false;
// let isFirstCharNumber = false;

// // 1. Length Check
// if (password.length < 6) {
//     alert("Password must be at least 6 characters long.");
// } else {
//     // 2. Start character check (ASCII 48-57 are numbers '0'-'9')
//     let firstChar = password.charCodeAt(0);
//     if (firstChar >= 48 && firstChar <= 57) {
//         isFirstCharNumber = true;
//     }

//     if (isFirstCharNumber) {
//         alert("Password should not start with a number.");
//     } else {
//         // 3. Loop through to check alphabets and numbers
//         for (let i = 0; i < password.length; i++) {
//             let code = password.charCodeAt(i);

//             // Check for Alphabets (A-Z: 65-90, a-z: 97-122)
//             if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//                 hasAlphabet = true;
//             }
//             // Check for Numbers (0-9: 48-57)
//             else if (code >= 48 && code <= 57) {
//                 hasNumber = true;
//             }
//         }

//         if (hasAlphabet && hasNumber) {
//             hasAlphabet && hasNumber
// }


// ________________________________________________________________________________
// let password=prompt("Enter Password");

// let hasAlphabet = false;
// let hasNumber = false;
// let isFirstCharNumber = false;

// if(password.length < 6){
//  alert("Password must be 6 characters long");

// }
// else {
//  let firstchar = password.charCodeAt(0)
//  if (firstchar >= 48 && firstchar <= 57){
//     isFirstCharNumber = true;
//  }
// }
// if(isFirstCharNumber){
// alert("Password should not start with a number.");
// }else {

//     for (let i = 0; i < password.length; i++){
//       let code=password.charCodeAt(i);
//       if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
//      hasAlphabet = true;
//       }
//        else if (code >= 48 && code <= 57) {
//                  hasNumber = true;
//     }
//     }
// }

// if(hasAlphabet && hasNumber){
//  alert("your password is valid");
// } else {
//     alert("your password must contain alphabets and numbers")
// }




// _________________________________________________________________________________

// 16. Write a program to convert the following string to an 
// array using string split method. 
// var university = “University of Karachi”; 
// Display the elements of array in your browser.

// let str = "University Of Karachi";
// let split =str.split("");


// for(let i=0; i<split.length ; i++){
// document.writeln(split[i] + "<br>")
// }



// // 1. User se input lena
// let userInput = prompt("Enter any word:");

// // 2. Length check karna taaki khali input par error na aaye
// if (userInput.length > 0) {
//     // 3. Aakhri character nikalna (length - 1)
//     let lastChar = userInput[userInput.length - 1];
    
//     alert("The last character of your input is: " + lastChar);
// } else {
//     alert("Please enter a valid word!");
// }


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string



let str="The quick brown fox jumps over the lazy dog";
let lowerStr =str.toLowerCase();
 let words=lowerStr.split(" ");

 let count=0;

 for (let i=0;i <words.length; i++){
       if(words[i] == "the"){
       count++;
 }
}
 document.writeln("The word 'the appears " + count +" times in the given sentence");