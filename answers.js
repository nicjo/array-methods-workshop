// EXERCISE #1
// Write a function called printPositives that takes an array and uses its forEach method to print only the positive numbers.

var numbers = [3, 75, -42, 9, -904.73];



// function printPositives(array){
//     array.forEach(function(x) {
//         if (x > 0) {
//             console.log(x);
//         }
// });
// }

// printPositives(numbers)


// EXERCISE #2
// Similar to the previous exercise, write a function called getPositives that takes an array and uses its filter method to return a new array with only the positive numbers

// function getPositives(array) {
//     return array.filter(function(number) {
//         return number > 0;
//     })
// };

// console.log(getPositives(numbers))

// EXERCISE #3
// Write a function called filterArray that takes an array AND a function as arguments. 
// Your filter function should return a new array that contains only the elements where the passed function returns a truthy value.
// NOTE: You are allowed to use Array.prototype.filter to answer this question.
// NOTE 2: This is a bit of a trick question, the answer is a one-liner :)

// function negative(number) {return number < 0;}

// function filterArray(array, func) {
//     return array.filter(func)
// };

// console.log(filterArray(numbers, negative))


// EXERCISE #4

// Write a function called longestWord that takes a string as argument, and returns the longest word in the string. 
// You should use Array.prototype.reduce to do your work.
// Hint: You can use String.prototype.split to split the string into an array of words.

// function longestWord(string) {
//     var space = " "
//     function splitString(string, space) {
//     return string.split(space);
//   }
//     return splitString(string, space).reduce(function (a, b) { return a.length > b.length ? a : b; });
// }

// var samJacksonQuote = "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime."

// console.log(longestWord(samJacksonQuote))


// ....after going over the code with Codrin, we arrived at this:
// function returnLongest(string) {
//         var split = string.split(" ")
//         return split.reduce(function(a,b){
//             if(a.length > b.length) {
//                 return a;
//             } else {
//                 return b;
//             }
//         })
// }

// returnLongest("jhsdgf sjkhdgfkjhs shdgfhg  hsgdfh")



// EXERCISE #5
// Write a function called countVowels that takes a string and returns the number of vowels in the string. You should use Array.prototype.reduce to do your work.
// Hint: You can use String.prototype.split again. There is a way to use it to split a string by character. Try to Google it :)
// Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check if the current letter is a vowel.

function countVowels (string){
    
    var split = string.split("",string.length)
    var vowels = split.indexOf('a','e','i','o','u')
    return vowels.reduce(function(a,b) {
        if (a >= 0) {
            return a;
        } else {
            return b;
        }
        
    })
    
}