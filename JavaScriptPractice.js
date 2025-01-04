//create a function that checks if a number is a factor of a base
 
 function checkForFactor (base, factor){
    if(base % factor === 0){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

//You are given two interior angles (in degrees) of a triangle.
//Write a function to return the 3rd.

function otherAngle(a, b) {
  if( a >= 0 && b >= 0 && a+b <= 180){
    console.log(180-a-b)
  } else{
    console.log('impossible numbers')
  }
}

//create a function that removes the first and last characters of a string
 function removeChar(str){
     return str.slice(1, -1)
   }



/* 
You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. 
You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and 
weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your 
pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums 
all the rare candies you would need. 
*/

function candiesNeeded(){
let bulbCandy = 11
let catCandy = 6
let weedCandy = 6
totalCandies = bulbCandy + catCandy + weedCandy
console.log(totalCandies)
}



//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one 
//function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle

function convertCelToFah(fahrenheit){
    celcius = (((fahrenheit - 32) * 5)/9)
    return celcius
}

function canCharFight(temperature){
    let convertedTemp = convertCelToFah(temperature)
    
    if(convertedTemp > 0 ){
        console.log('fah says It\'s good')
    } else {
        console.log('gotta put a sweater on')
    }
}



//Your pokemon party order which is a list of pokemon has been leaked to Misty. 
//Please create a function that reverses your list and prints it to the console. 

function reverseTheTeam(){
    let startArray = ['pikachu','bulbasaur', 'darkrai', 'charmander']
    console.log(startArray.reverse())

}



//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. 
//Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party 

numberOfTrainers = 10
for(let i = 1; i <= numberOfTrainers; i++){
    console.log('Pikachu I choose you')
}



// Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!"

class Dog {
  constructor(name, species, size){
    this.name = name
    this.species = species
    this.size = size
  }
    bark() {
      if(this.size > 60){
        return "Grrr! Grrr!"
      } else if (this.size <= 60){
        return "Woof! Woof!"
      }
      else {
        return "didn't work, try again :)"
      }
    }
  
}

const fang = new Dog("Fang", "boarhound", 75)
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`)
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`)

const snowy = new Dog("Snowy", "terrier", 22)
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`)
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`)



//create a function that removes the first and last characters of a string
 function removeChar(str){
     return str.slice(1, -1)
   }



/* Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output

('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/

function basicOp(operation, value1, value2){
    if(operation === "+"){
        return value1 + value2
    } else if (operation === "-"){
        return value1 - value2
    } else if (operation === "*"){
        return value1 * value2
    } else if (operation === "/"){
        return value1 / value2
    }
}
console.log(basicOp("*",5,6))


//Given a mixed array of number and string representations of integers, 
//add up the non-string integers and subtract the total of the string integers. 


function sortEmAddEm (arr){

  let realNum = 0;
  let realString = 0;
  arr.forEach(element => {
    if(typeof element === "number")
      { realNum += element
      } else if (typeof element === "string"){
        let convurted = Number(element)
        realString += convurted
      }
  })
  return realNum - realString
}



// Now you have to write a function that takes an argument and returns the square of it.


function square(sample){
  return Math.pow(sample,2)  
}


//Given a random non-negative number, 
//you have to return the digits of this number within an array in reverse order.
//Example(Input => Output):
//35231 => [1,3,2,5,3]
//0 => [0]

function digitize(n) {
   
    return Array.from(String(n), Number).reverse()
  }


//Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.
//Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:
//If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//If he doesn't get 10 hoops, return the string "Keep at it until you get it".


function hoopCount (n) {
  return n >=10 ? "Great, now move on to tricks" : "Keep at it until you get it"
}


//Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
//
//This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
//
//This function should return a number (final grade). There are four types of final grades:
//
//  100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
//  90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
//  75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
//  0, in other cases



function finalGrade(exam, projects){
    if ((exam > 90) || (projects > 10)){
        return 100
    } else if ((exam > 75) && (projects >= 5)){
        return 90
    } else if ((exam > 50) && (projects >= 2)){
        return 75
    } else{
        return 0
    }
}


// Your classmates asked you to copy some paperwork for them. 
// You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.


function paperwork(n, m) {
    if ((n >= 0) && (m >= 0)){
        return(n *m)
    } else {
        return(0)
    }
  }

//Even better to use: 

function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}


//Can you find the needle in the haystack?

//Write a function findNeedle() that takes an array full of junk but containing one "needle"

//After your function finds the needle it should return a message (as a string) that says:

//"found the needle at position " plus the index it found the needle, so: 


const haystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]
function findNeedle(haystack) {
    console.log(`found the needle at position ${haystack.indexOf("needle")}`)
  }



//Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. 
//The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

//The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). 
//It should return false otherwise. Examples:


function setAlarm(employed, vacation){
  if (employed && vacation == true){
    console.log(false)
  } else if (employed == true){
    console.log(true)
  } else {
    console.log(false)
  }
}


//Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
 return str.toUpperCase()
}


//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 

function solution(str, ending){
  console.log(str.endsWith(ending))
}


//I think this is better but I'm told it is wrong, I dunno how

function solution(str, ending){
  const partO = str.slice(-ending.length)
  if(partO == ending){
    return true
  } else{
    return false
  }
}


//Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(arrayah){
  const finalAnswer = arrayah.reduce((a,c) => a + Math.pow(c,2), 0,)
  return finalAnswer
}



//Complete the solution so that it reverses the string passed into it. 

function reversePhrase(str){
  const rever = str.split('').reverse().join('')
  return rever
}



//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {  
  const smallest = Math.min(...numbers)
  const smallestIndex = numbers.indexOf(smallest)
  numbers.splice(smallestIndex,1)
  const smallest2 = Math.min(...numbers)
  const smallestIndex2 = numbers.indexOf(smallest2)
  let finalAnswer = smallest + smallest2
  return finalAnswer
}



//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  if(bool == true){
    return "Yes"
  } else {
    return "No"
  }
}


//Write a program that finds the summation of every number from 1 to num. 
//The number will always be a positive integer greater than 0. Your function only needs to return the result.

function summation (num) {
  let sum = 0
  for(i=1; i<=num; i++){
  sum += i
  }
  return sum
}



//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers

function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || input.length === 0) {
    return [];
  } else {
  let sum = 0
  let secondSum = 0
  input.forEach((number)=> {
    if (number > 0){
      sum += 1
    }else if(number == 0){
      return imagine =[]
    } else {
      secondSum += number
    }
  })
  if((sum > 0 || secondSum < 0) || (sum > 0 && secondSum < 0)){
    return [sum,secondSum] 
  } else if (sum == 0 && secondSum == 0) {
    return imagine = []
  }
}
}


//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function Fighter(health,specialMove,taunt,win){
    this.health = health;
    this.specialMove = specialMove;
    this.taunt = taunt;
    this.win = win;
    this.special = function(){
        console.log(`Eat this! ${this.specialMove}!`)
    };
    this.getEm = function(){
        console.log(`${this.taunt}`)
    };
    this.won = function(){
        console.log(`${this.win}`)
    }
}

let Alex = new Fighter(100,'Special Tornado','skill issue huh','you should practice more')



//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  return number % 2 === 0 ? number*8 : number*9
}



/*Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, 

neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
  let sentence = str.split('')
  sentence = sentence.filter((letter) => 
  letter !== 'a' && letter !== 'e' && letter !== 'i' &&
  letter !== 'o' && letter !== 'u' && letter !=='A' && 
  letter !== 'E' && letter !== 'I' &&
  letter !== 'O' && letter !== 'U'
)
  str = sentence.join('')
  return str;
}



/*
  Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

  Use conditionals to return the proper message:
  case 	                return
  name equals owner 	  'Hello boss'
  otherwise 	          'Hello guest'

*/


function greet (name, owner) {
  if(name == owner){
    return `Hello boss`
  } else{
    return `Hello guest`
  }
}

//or 

function greet (name, owner) {
  return name == owner ?  `Hello boss` : `Hello guest`
}



/*
  Write a function that checks if a given string (case insensitive) is a palindrome.

  A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
*/

function isPalindrome(x) {
  let part = x.toLowerCase()
  let part1 = part.split('')
  let reversed = part1.reverse()
  let part2 = reversed.join('')
  if (part2 == part){
    return true
  } else {
    return false
  }
}



/*
  Write a function that checks if a given string (case insensitive) is a palindrome.

  A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
*/

function isPalindrome(x) {
  let part = x.toLowerCase()
  let part1 = part.split('')
  let reversed = part1.reverse()
  let part2 = reversed.join('')
  if (part2 == part){
    return true
  } else {
    return false
  }
}



/*
  Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

  For example, if this array were passed as an argument:

  ["Telescopes", "Glasses", "Eyes", "Monocles"]

  Your function would return the following array:

  ["Eyes", "Glasses", "Monocles", "Telescopes"]

  All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/


function sortByLength (array) {
  array.sort((a, b)=>a.length-b.length)
  return array;
}



/*
  In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/


function filter_list(l) {
  let gotEm = l.filter((element) => typeof element === 'number')
  return gotEm
}



/*
  Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
  Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/


function getGrade (s1, s2, s3) {
  let grade = (s1+s2+s3)/3
  if(grade >=90 && grade <=100){
    return 'A'
  }else if (grade >= 80 && grade < 90){
    return 'B'
  }else if (grade >= 70 && grade < 80){
    return 'C'
  }else if (grade >= 60 && grade < 70 ){
    return 'D'
  }else if (grade >= 0 && grade < 60){
    return 'F'
  }
}



/*
  Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
*/


function problem(x){
  if(typeof x == 'number'){
    return x * 50 + 6
  } else{
    return 'Error'
  }
}



/*
 Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

 a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

 The four operators are "add", "subtract", "divide", "multiply". 

 */

function arithmetic(a, b, operator){
  operator.toLowerCase()
  if (operator == 'add'){
    return a + b
  } else if (operator == 'subtract'){
    return a - b 
  } else if (operator == 'multiply'){
    return a * b
  } else if (operator == 'divide'){
    return a/b
  }
}



/*
 We need a function that can transform a number (integer) into a string.
*/

function numberToString(num) {
  return num.toString()
}



/*
 Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. 
 If the array does not contain any numbers then you should return 0.
*/

function sum (numbers) {
  if(sum.length == 0){
    return 0
  } else{
    return numbers.reduce((ac,curr)=> ac + curr,0)
  }
  
}



/*
 Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

 If no occurrences can be found, a count of 0 should be returned.
*/

function strCount(str, letter){
  let lowStr = str.toLowerCase()  
  let strAr = lowStr.split('')
  let filtered = strAr.filter((bits) => bits == letter)
  return filtered.length
}



/*
 You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

function check(a, x) {
  let checked = a.filter((elem) => elem == x)
  if (checked.length >= 1){
    return true
  } else{
    return false
  }
}



//The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

function sayHello(name) {
  return `Hello, ${name}`
}



// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function findAverage(array) {
  if (array.length == 0){
    return 0
  } else {
    let tVal = array.reduce(
        (acc,curr) => acc+curr,0)
    let answer = tVal/array.length
    return answer
  }
}



/*
 In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
*/

function makeNegative(num) {
  if(num <= 0){
    return num
  } else {
    return num * -1 
  }
}



/*
  Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
*/

function invert(array) {
  let sol = []
  array.forEach((num)=> (sol.push(num * -1)))
  return sol
}


/*
    Kids drink toddy.
    Teens drink coke.
    Young adults drink beer.
    Adults drink whisky.

Make a function that receive age, and return what they drink.

Rules:

    Children under 14 old.
    Teens under 18 old.
    Young under 21 old.
    Adults have 21 or more.
*/


function peopleWithAgeDrink(old) {
  if(old < 14){
    return 'drink toddy'
  } else if (old < 18 ){
    return 'drink coke'
  } else if (old < 21 ){
    return 'drink beer'
  } else if (old >= 21 ){
    return 'drink whisky'
  }
}



//Given an array of integers, return a new array with each value doubled.

function maps(x){
  let y = []
  x.forEach((aNum) =>y.push(aNum*2))
  return y
}



//Given an integral number, determine if it's a square number:
var isSquare = function(n){
  let checkThis = Math.sqrt(n)
  if(checkThis%1 == 0 || n == 0){
    return true
  } else{
  return false;
  }
}



// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
  let words = s.split(' ')
  let minLength = words[0].length
  words.forEach((word)=> {if (word.length < minLength){minLength = word.length}})
  return minLength
}



// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and 
// After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When 
// writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have 
// to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are 
// actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
  let capStart = this.split(' ')
  capStart.forEach((word,index) =>{
    let capCap = word[0].toUpperCase() + word.slice(1)
    capStart[index] = capCap
    
  })
  let capEnd = capStart.join(' ')
  return capEnd
}




// Messi is a soccer player with goals in three leagues:

//     LaLiga
//     Copa del Rey
//     Champions

// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}


// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.


function countSheeps(sheep) {
  let present = 0
  sheep.forEach((sheepa) => {
    if(sheepa == true){
      present += 1
    }
  })
  return present
}



// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.


const areaOrPerimeter = function(l , w) {
  if (l == w){
    return l * w
  } else {
    return (2 * l) + (2 * w)
  }
}



// You probably know the "like" system from Facebook and other pages. People can "like" 
// blog posts, pictures or other items. We want to create the text that should be displayed 
// next to such an item.

// Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.


function likes(names) {
  if(names.length == 0){
    return `no one likes this`
  } else if (names.length == 1){
    return `${names[0]} likes this`
  } else if (names.length == 2){
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length == 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    return `${names[0]}, ${names[1]} and ${names.length -2} others like this`
  }
}



// Timmy & Sarah think they are in love, but around where they live, they will only 
// know once they pick a flower each. If one of the flowers has an even number of petals 
// and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true 
// if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  if ((flower1 % 2 == 0 && flower2 % 2 != 0) || (flower2 % 2 == 0 && flower1 % 2 != 0) ){
    return true
  } else {
    return false
  }
 }



//  Create a method to see whether the string is ALL CAPS.
//  Examples (input -> output)
 
//  "c" -> False
//  "C" -> True
//  "hello I AM DONALD" -> False
//  "HELLO I AM DONALD" -> True
//  "ACSKLDFJSgSKLDFJSKLDFJ" -> False
//  "ACSKLDFJSGSKLDFJSKLDFJ" -> True
 
//  In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter 
//  so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function() {
  let strAr = this.split('')
  let hahaCounter = 0
  for (let i = 0; i < strAr.length; i++){
    if (strAr[i] === strAr[i].toLowerCase() && strAr[i] !== strAr[i].toUpperCase()){
       hahaCounter += 1
    }
  }
   if(hahaCounter >= 1){
     return false
   } else{
     return true
   }
 }



//  Given a non-empty array of integers, return the result of multiplying the values together in 
//  order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


function grow(x){
  let multied = x.reduce(
    (acc, cur) => acc * cur,1 
  )
  return multied
  }



// You were camping with your friends far away from home, but when it's time to go back, you realize that your 
// fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles 
// per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  //   if(distanceToPump <= fuelLeft * mpg){
  //       return true
  //   } else{
  //     return false
  //   }
    
    return distanceToPump <= fuelLeft * mpg ? true : false
  }

//I solved this one two ways just because it was fun



  // All of the animals are having a feast! Each animal is bringing one dish. There is just one 
  // rule: the dish must start and end with the same letters as the animal's name. For example, the 
  // great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

  // Write a function feast that takes the animal's name and dish as arguments and returns true or false to 
  // indicate whether the beast is allowed to bring the dish to the feast.
  
  // Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast 
  // and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. 
  // They will not contain numerals.
  
  function feast(beast, dish) {
    const bCS = beast.split('')[0]
    const dCS = dish.split('')[0]
    const bCE = beast.split('')[beast.length - 1]
    const dCE = dish.split('')[dish.length - 1]
    
    if(bCS == dCS && bCE == dCE){
      return true
    } else {
      return false
    }
 //  I later learn I did not need to split
    }



//   There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!
// Note:

// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!


function betterThanAverage(classPoints, yourPoints) {
  if (yourPoints > classPoints.reduce((acc,curr)=>acc+curr,0)/classPoints.length){
    return true
  } else {
    return false
  }
}



// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the 
// numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0

// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1


function gimme (triplet) {
  let fo = triplet[0]
  let so = triplet[1]
  let to = triplet[2]
  let largest
  let smallest
  
  
  //this one for biggest
  if(fo >= so && fo >= to){
    largest = fo
  }else if(so >= fo && so >= to){
    largest = so
  } else if (to >= fo && to >= so){
    largest = to
  }
  
  //this one for smallest
    if(fo <= so && fo <= to){
    smallest = fo
  }else if(so <= fo && so <= to){
    smallest = so
  } else if (to <= fo && to <= so){
    smallest = to
  }
  
  let larger = triplet.indexOf(largest)
  let smaller = triplet.indexOf(smallest)
  
  if ((larger == 2 && smaller == 1) || (larger == 1 && smaller == 2)){
    return 0
  } else if ((larger == 2 && smaller == 0) || (larger == 0 && smaller == 2)){
    return 1
  } else {
    return 2
  }
  }



// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

//     don't worry about uppercase vowels

function shortcut (string) {
  let answer = string.split('').filter((letter) => !['a','e','i','o','u'].includes(letter)).join('')
  return answer
}



// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). 
//  The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.

// Task

// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b 
//  are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions
//  evaluate to true, false otherwise


function xor(a, b) {
 if((a == true && b == true)|| (a== false && b ==false)){
   return false 
 } else{
   return true
 }
 //or
 //return a != b;
}



// If you can't sleep, just count sheeps!!
// Task:

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  let answer = ""
  
  for (let i = 1; i <= num; i++){
    answer += i+" sheep..."
  }
  
  return answer
}



// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}



// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, 
//  different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
// number of hotdogs 	price per unit (cents)
// n < 5 	100
// n >= 5 and n < 10 	95
// n >= 10 	90

function saleHotdogs(n){
  return n*(n < 5 ? 100 : n < 10 ? 95 : 90)
  }



// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  let ln = name.toLowerCase()
  return ln.startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`
}



/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D

No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
Example

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note

In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

*/

function countSmileys(arr){
  let answer = 0
    arr.forEach((face) => {
      if((face.startsWith(':') || face.startsWith(';')) &&
          (face.endsWith('D') || face.endsWith(')')) &&
          (face.length === 2 || (face.length === 3 && (face[1] === '-' || face[1] === '~')))){
         answer += 1
         }
    })
  return answer
}



// Implement a function that accepts 3 integer values a, b, c. The function should return true if a 
// triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).


function isTriangle(a,b,c){
  if((a>0)&&(b>0)&&(c>0)&&(a+b>c)&&(b+c>a)&&(a+c>b)){
    return true
  }else{
    return false
  }
}



// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested


// function position(letter){
//   let beta = 'abcdefghijklmnopqrstuvwxyz'.split('').indexOf(letter)+1
//   return `Position of alphabet: ${beta}`
// }



// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the 
// input data is always a string, no need to verify it.
// Examples

// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"


function remove (string) {
  let firstCheck = string.split('')
  let secondCheck = firstCheck.length - 1
  
  if(firstCheck[secondCheck] == '!'){
    let removed = firstCheck.pop()
  }
  
  let answer = firstCheck.join('')
  return answer
}



// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples

//     "foefet" is an anagram of "toffee"

//     "Buckethead" is an anagram of "DeathCubeK"


function isAnagram (test, original) {
	return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
}



/*
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1

If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! 
You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.
Examples

Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"
*/


function warnTheSheep(queue) {
  /*
  let cryWolf = queue.length - queue.indexOf('wolf') -1
  if(cryWolf > 0){
    return `Oi! Sheep number ${cryWolf}! You are about to be eaten by a wolf!`
  }else {
    return `Pls go away and stop eating my sheep`
  }
  */
  let cryWolf = queue.length - queue.indexOf('wolf') -1
  return cryWolf > 0 ? `Oi! Sheep number ${cryWolf}! You are about to be eaten by a wolf!` : `Pls go away and stop eating my sheep`
  
}



// You will be given an array and a limit value. You must check that all values in the array are below or 
// equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers.

function smallEnough(a, limit){
  let checking = a.filter((num) => num > limit)
  return checking.length >= 1 ? false : true
}



/*
You need to write a function that reverses the words in a given string. Words are always separated by a single space.

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
*/

function reverse(string){
  return string.split(' ').reverse().join(' ')
}



// Create a function that takes 2 integers in form of a string as an input, and outputs the sum 
// (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// Notes:

//     If either input is an empty string, consider it as zero.

//     Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a,b) {
  return (Number(a)+Number(b)).toString()
}



// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
// Examples ( Input --> Output )

// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

function findNextSquare(sq) {
    let next = Math.sqrt(sq)
    if(next%1 == 0){
      return Math.pow((next += 1),2)
    }else{
      return -1;
    }
}



//  Given a string str, reverse it and omit all non-alphabetic characters.
// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output

//     [input] string str

// A string consists of lowercase latin letters, digits and symbols.

//     [output] a string

function reverseLetter(str) {
  let check = str.split('').reverse()
  
  let answer = check.filter((lz) => lz == 'a' || lz == 'b' || lz == 'c' || lz == 'd' || lz == 'e' ||
               lz == 'f' || lz == 'g' || lz == 'h' || lz == 'i' || lz == 'j' || lz == 'k' ||
              lz == 'l' || lz == 'm' || lz == 'n' || lz == 'o' || lz == 'p' || lz == 'q' ||
              lz == 'r' || lz == 's' || lz == 't' || lz == 'u' || lz == 'v' || lz == 'w' ||
              lz == 'x' || lz == 'y' || lz == 'z')
  
return answer.join('')
}



// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
  let start = x.split('')
  start.forEach((item, index) => {
    if(item == '0' || item == '1' || item == '2' || item == '3' || item == '4'){
      start[index] = 0
    }else{
      start[index] = 1
    }
  })
    return start.join('')
  }



// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. 
// The numbers could be positive or negative and the first non-consecutive could be either too!

function firstNonConsecutive (arr) {
  for(let i=0;i<arr.length-1; i++){
    if(arr[i] + 1 !== arr[i+1]){
      return arr[i+1]
    }
  }
  return null
}



// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, 
// so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- 
// everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You 
// always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a 
// function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, 
//   of course, return you to your starting point. Return false otherwise.

//     Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will 
//     never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
  let upDown = 0
  let leftRight = 0
  if(walk.length == 10){
    walk.forEach((step)=>{
      if(step == 'n'){
        upDown += 1
      }else if(step == 's'){
        upDown -= 1
      }else if(step == 'w'){
        leftRight += 1
      }else if (step == 'e'){
        leftRight -= 1
      }
    })
    if(upDown == 0 && leftRight == 0){
    return true
  }else {
    return false
  }
  }//length is 10 true
  else {
    return false
  }
}



// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
  return health >= damage ? health -= damage : health = 0
}



// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).
// Examples:

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"


function oddOrEven(array) {
  let dot = array.reduce((acc,cur)=>
    acc + cur,0
  )
  return dot%2==0? 'even' : 'odd'
}

// or

function oddOrEven(array) {
  return array.reduce((acc,cur)=>
    acc + cur,0
  ) %2==0? 'even' : 'odd'
}



// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
  let part1 = str.split(' ')
  let container = []
    part1.forEach((str)=>{
      container.push(`${str} ${str.length}`)
    })
   return container
  }



//   Given an array of integers your solution should find the smallest integer.

// For example:

//     Given [34, 15, 88, 2] your solution will return 2
//     Given [34, -345, -1, 100] your solution will return -345

// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findSmallestInt(arr) {
  return arr.sort((a,b)=>{return a - b})[0]
}

// //here inside of the sort, we use a b to organize the numbers, 
// // If the result is negative (i.e., a < b), it tells JavaScript that a should come before b in the sorted array.
// // If the result is positive (i.e., a > b), it tells JavaScript that b should come before a.
// // If the result is zero (i.e., a == b), the order of a and b doesn't change.
// //[0] is just to pick the first number in the array which should be the smallest.



// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.


function solve(s){
  let upper = 0
  let lower = 0
  s.split('').forEach((str)=>{
    if(str == str.toLowerCase()){
      lower += 1
    }else if(str == str.toUpperCase()){
      upper += 1
    }
  })
return lower >= upper ? s.toLowerCase() : s.toUpperCase()
}



// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an 
// application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; 
// the better the player the lower the handicap.
// Input

// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for 
// the person's age and an integer for the person's handicap.

function openOrSenior(data){
  let check = []
  data.forEach(([age,hand])=>{
    if(age > 54 && hand > 7){
      check.push('Senior')
    }else{
      check.push('Open')
    }
  })
  return check
}

// //or 

function openOrSeniorAgain(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}



// Story

// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he
// was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
	
// Task

// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples (Input --> Output)

// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

function minMax(arr){
  let sorted = arr.sort((a,b)=>(a-b))
  return [sorted[0],sorted[sorted.length-1]]
}



// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  let answer = []
  for(let i = a; i <= b; i++){
    answer.push(i)
  }
 return answer 
}



//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.split('').filter((sign)=> sign != '!').join('')
}



// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let check = str.toLowerCase().split('').reduce((acc,number) => {
      acc[number] = (acc[number] || 0) + 1
      return acc
    },{})
    if(check.x == check.o){
      return true
    }else{
      return false
    }
}



/*
Messi's Goal Total

Use variables to find the sum of the goals Messi scored in 3 competitions
Information

Messi goal scoring statistics:
Competition 	Goals
La Liga 	43
Champions League 	10
Copa del Rey 	5
Task

    Create these three variables and store the appropriate values using the table above:

    laLigaGoals
    championsLeagueGoals
    copaDelReyGoals

    Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.

*/

var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals



// Task

// You get an array of numbers, return the sum of all of the positives ones.
// Example

//     [1, -4, 7, 12] => 1+7+12=20 1 + 7 + 12 = 20 1+7+12=20

// Note

// If there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let filtered = arr.filter((number)=>number >= 1)
  let answer = filtered.reduce((acc,cur)=> acc + cur,0)
  return answer
}



// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) 
// that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.
// Examples (Input -> Output)

// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

function min(arr){
  arr.sort((a, b) => a - b)
  return arr[0]
}

function max(arr){
  arr.sort((a, b) => a - b)
  return arr[arr.length - 1]
}



// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) 
// that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.
// Examples (Input -> Output)

// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

// function min(arr){
//   arr.sort((a, b) => a - b)
//   return arr[0]
// }

// function max(arr){
//   arr.sort((a, b) => a - b)
//   return arr[arr.length - 1]
// }



// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, 
// giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

//     Correct answer    |    Student's answer   |   Result         
//  ---------------------|-----------------------|-----------
//  ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
//  ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
//  ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
//  ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0

function checkExam(array1, array2) {
  let score = 0
  for(let i = 0; i < array1.length; i++){
    if(array1[i] == array2[i]){
      score += 4
    }else if(array2[i] == ''){
      score += 0
    }else if(array1[i] != array2[i]){
      score -= 1
    }
  }
    return score < 0 ? 0 : score
  }



// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  let ans = a.filter((ele) => !b.includes(ele))
  return ans
}



// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
 return number%2 == 0? 'Even' : 'Odd'
}



// Write a function that removes the spaces from the string, then return the resultant string.

// Examples (Input -> Output):

// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

function noSpace(x){
  return x.split('').filter((ele) => ele != ' ').join('')
}



// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
  let numArr = x.map(str => {
    return parseInt(str, 10)
  })
  return numArr.reduce(
  (acc,cur)=>acc+cur,0
  )
}



// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

function hello(name) {
  if(!name || name == ''){
    return 'Hello, World!'
  }else{
    let fix = name.toLowerCase().split('')
    fix[0] = fix[0].toUpperCase()
    let fixed = fix.join('')
    return `Hello, ${fixed}!`
  }
}



 // Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
  return Math.floor(Math.floor(time)*0.5);
}



// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or 
// more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'

// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}



// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
  let intro = str.split('')
  let container = []
  for(let i = 0; i<=intro.length-1; i++){
    container.push(`${intro[i]}${intro[i]}`)
  }
  return container.join('')
}
//or
function doubleCharTwo(str) {
  return str.split('').map((x)=>x+x).join('')
}



// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

function distinct(a) {
  let sol = []
  a.forEach((ele)=>{
    if(sol.includes(ele) == false){
       sol.push(ele)
       }
  })
  return sol
}



// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let start = str.split(' ')
  let answer = start.map((x)=> x.split('').reverse().join('')).join(' ')
  return answer
}



// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

//     S is misinterpreted as 5
//     O is misinterpreted as 0
//     I is misinterpreted as 1

// The test cases contain numbers only by mistake.

function correct(string)
{
	return string.split('').map((x)=>{
    if(x == '5'){
      return 'S'
    }else if (x == '0'){
      return 'O'
    }else if (x == '1'){
      return 'I'
    }else{
      return x
    }
  }).join('')
}



// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 
// bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given
// number of dragons, will he survive?

// Return true if yes, false otherwise :)

function hero(bullets, dragons){
  return bullets / 2 >= dragons ? true : false
}



// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number=function(array){
  let answer = array.map((x,index)=>{
    return `${index+1}: ${x}`
  })
  return answer
}



// Rock Paper Scissors

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if(p1 == p2){
    return 'Draw!'
  }else if((p1 == 'rock' && p2 == 'scissors')||(p1 == 'scissors' && p2 == 'paper')||(p1 == 'paper' && p2 == 'rock')){
    return 'Player 1 won!'
  }else{
    return 'Player 2 won!'
  }
}



//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

//Examples (input -> output)

//6, "I"     -> "IIIIII"
//5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  let check =[]
  for(let i=0; i<n; i++){
  check.push(s)
}
  return check.join('')
}



// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any 
// elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
  let splitUp = iterable.toString().split('').filter((x)=> x != ',')
  let contained = []
    for(let i = 1; i < splitUp.length +1 ; i++){
      if(splitUp[i-1] != splitUp[i]){
        if(splitUp[i-1] == 1 || splitUp[i-1] == 2 || splitUp[i-1] == 3 || splitUp[i-1] == 4 || splitUp[i-1] == 5 || splitUp[i-1] == 6 || splitUp[i-1] == 7 || splitUp[i-1] == 8 || splitUp[i-1] == 9 || splitUp[i-1] == 0){
          contained.push(Number(splitUp[i-1]))
        }else{
        contained.push(splitUp[i-1])
        }
      }
    }
  return contained
}



// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes

//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
  let container = numbers.split(' ').map(Number).sort(function(a, b) { 
    return a - b
  })
  return `${container[container.length - 1]} ${container[0]}`
}



// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; 
// see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

// As usual, your function/method should be pure, i.e. it should not mutate the original string.

String.prototype.toAlternatingCase = function () {
  let starting = this.split('')
  starting.forEach((x, index, array)=>{
    if(x == x.toUpperCase()){
      array[index] = x.toLowerCase()
    }else if(x == x.toLowerCase()){
      array[index] = x.toUpperCase()
    }else{
      array[index] = x
    }
  })
  return starting.join('')
}



// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  let contained = string.split('')
  contained.forEach((x,index,array)=>{
    if(x == x.toLowerCase()){
      array[index] = x
    }else if (x == x.toUpperCase()){
      array[index] = ` ${x}` 
    }else{
      array[index] = x
    }
  })
  return contained.join('')
}



// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  let total = d * 40
  if(d >= 7){
    total -= 50
  }else if(d>= 3){
    total -= 20
  }
  return total
}



// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

function squareDigits(num){
  let starting = num.toString().split('')
  starting.forEach((c,index,arr)=>{
    arr[index] = Number(Math.pow(c,2))
  })
  let answer = Number(starting.join(''))
  return answer
}



