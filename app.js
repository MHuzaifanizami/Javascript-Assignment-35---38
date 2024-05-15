// Chapter 35 to 38 

// Q no 01  

// Write a function that displays current date & time in your
// browser.

// var date = new Date();
// document.write(date)

// Q no 02 

// Write a function that takes first & last name and then it
// greets the user using his full name.

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter your last name");
// alert("Welcome" + " " + firstName + " " + lastName);

// Q no 03 

// Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter your second number");
// var result = num1 + num2 ;
// alert(`Sum of ${num1} & ${num2} =  ${result} `);

// Q no 04 

// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// var num1 = +prompt("enter first number");
// var oprt = prompt("enter operator");
// var num2 = +prompt("enter your second number");

// function calculate() {
//     var result;
//     switch (oprt) {
//         case "+":
//             result = num1 + num2
//             break
//         case "-":
//             result = num1 - num2
//             break
//         case "*":
//             result = num1 * num2
//             break
//         case "/":
//             result = num1 / num2
//             break
//         default:
//             result = "invalid Operator"
//             break

//     }
//     return result
// }
// console.log(calculate())
// document.write(`${num1}  ${oprt} ${num2} = ${calculate()} `)

// Q no 05 

// Write a function that squares its argument.

// function myFunction(num){
//  var result = num * num
//  return result
// }

// console.log(myFunction(10));

// Q no 06 

// Write a function that computes factorial of a number.


// Q no 07 
// . Write a function that take start and end number as inputs
// & display counting in your browser.

// var startCounting = prompt("write start of counting");
// var endCounting = prompt("write end of counting");

// function counting() {
//     for (var i = startCounting; i <= endCounting; i++)

//         console.log(i)
// }
// counting()


// Q no 08 
// Write a nested function that computes hypotenuse of a
// right angle triangle. 


// Q no 09 
// Write a function that calculates the area of a rectangle.





// Q no 10 
// Write a JavaScript function that checks whether a passed
// string is palindrome or not?

// function checkPelindrome() {
//     var userinput = prompt("enter a word");
//     var reverseWord = "";
//     for (var i = userinput.length - 1; i >= 0; i--) {
//         reverseWord += userinput[i]
//     }
//     if(reverseWord === userinput){
//         alert("congratulations \n Its Pelindrome Word..")
//     }else{
//         alert("Its Not Pelindrome Word")

//     }
// }
// checkPelindrome()

// Q no 11 

// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'



// function capitalizeWord(word){
//     var myWord = word

//     for( var i = 0 ; i < myWord.length ; i++){
//         if(i  == 0){
//            var result = myWord[i].toUpperCase();

//         }else if(myWord[i] == " "){

//             var capitaWord = myWord[i + 1].toUpperCase();

//         }else{

//             if(capitaWord){
//                 result += " " + capitaWord;
//                 capitaWord = "";
//             }else{
//                 result += myWord[i]
//             }
//         }
//     }
//     console.log(result)

// }

// capitalizeWord(
//     prompt("Enter a sentence")
// )


// Q no 12 

// Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


// Q no 13 

// Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number ofoccurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function myFunction(str, letter) {
//     var result = "";
//     var count = "";

//     for (var i = 0; i < str.length; i++) {
//         if (str[i] == letter) {
//             count++;
//         }
//     }
// return count
// }

// var result = myFunction('JSResourceS.com', 'o');
// console.log(result)


// Q no 14 
