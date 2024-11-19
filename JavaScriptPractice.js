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
