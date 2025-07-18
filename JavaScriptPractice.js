// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).
// Series:1+14+17+110+113+116+…\mathrm{Series:}\quad 1 + \frac14 + \frac17 + \frac1{10} + \frac1{13} + \frac1{16} + \dotsSeries:1+41​+71​+101​+131​+161​+…

// You will need to figure out the rule of the series to complete this.
// Rules

//     You need to round the answer to 2 decimal places and return it as String.

//     If the given value is 0 then it should return "0.00".

//     You will only be given Natural Numbers as arguments.

// Examples (Input --> Output)

// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
  if(n==0){
    return '0.00'
  }else{
    let top = 1
    let bot = 4
    for(let i=1;i<n;i++){
      top += 1/bot
      bot+=3
    }
    return top.toFixed(2)
  }
}



// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

//     number of pillars (≥ 1);
//     distance between pillars (10 - 30 meters);
//     width of the pillar (10 - 50 centimeters).

// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(numPill, dist, width) {
  const nP = numPill
  const d = dist * 100
  if(nP<3){
    return d*(nP-1)
  }else{
    return (nP-2)*width + (nP-1)*d
  }
}



// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

// @ @@ @ @@ @ @@ @ @@ @ @@ @

// Implement a function returning the number of red beads.
// If there are less than 2 blue beads return 0. 

function countRedBeads(n) {
  return n>2? (n-1)*2:0
}



//Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

//Please use the following function names:

//addition = add

//multiply = multiply

//division = divide (both integer and float divisions are accepted)

//modulus = mod

//exponential = exponent

//subtraction = subt

function add(a,b){
    return a + b
}

function divide(a,b){
    return a/b
}

function multiply(a,b){
    return a*b
}

function mod(a,b){
    return a%b
}
   
function exponent(a,b){
    return a**b
}
    
function subt(a,b){
    return a-b
}



// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000, but fixed tests go higher.
// Examples (input --> output)

// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

function getDivisorsCnt(n) {
    let ans = 0
    for (let i=1; i*i<=n; i++){
        if(n%i==0){
            if(i*i==n){
                ans+=1
            }else{
                ans+=2
            }
        }
    }
    return ans
}



// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"

// Notes:

//     the returned string should only contain lowercase letters

function kebabize(str) {
  let p1 = str.split('').filter((x)=>!Number(x)&&x!=0)
  let p2 = p1.map((x,i)=>{
    if(i==0){
      return x.toLowerCase()
    }else if(x.toUpperCase()===x){
      return x=`-${x.toLowerCase()}`
    }else if(x.toLowerCase()===x){
      return x =x
    }
  }).join('')
  return p2
}



// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.
// Examples

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
  let p1 = arr.reduce((acc,cur)=>{
    acc[cur] = (acc[cur] || 0) + 1
    return acc
  },{})
  let p2 = Object.entries(p1).sort((a,b)=>a[1]-b[1])
  let ans = Number(p2[p2.length-1][0])
  return ans
}



// Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. 
// If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D),
// the return value must be true. Otherwise it should return false.

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  if(name=="Santa Claus" && password=='Ho Ho Ho!'){
    return true
  }else{
    return false
  }
}



// You have to write a function that describe Leo:

// function leo(oscar) {

// }

// if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"

function leo(oscar){
  let p1 = {
    86: "Not even for Wolf of wallstreet?!",
    88: "Leo finally won the oscar! Leo is happy",
    "below": "When will you give Leo an Oscar?",
    "above": "Leo got one already!"
  }
  if(oscar==86) return p1[86]
  if(oscar==88) return p1[88]
  if(oscar>88) return p1['above']
  if(oscar<88) return p1['below']
}



// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

function uefaEuro2016(teams, scores){
  if(scores[0] == scores[1]){
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  }else if(scores[0]>scores[1]){
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!` 
  }else{
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
  }
}



// A Tidy Number is a number whose digits are in non-decreasing order.
// Task

// Given a number, determine if it is tidy or not.
// Notes

//     The number passed will always be positive.
//     Return the result as a boolean.

// Examples

// 12 ==> return true
// Explanation: Digits {1, 2} are in non-decreasing order (1 <= 2).

// 32 ==> return false
// Explanation: Digits {3, 2} are not in non-decreasing order (3 > 2).

// 1024 ==> return false
// Explanation: Digits {1, 0, 2, 4} are not in non-decreasing order (1 > 0).

// 13579 ==> return true
// Explanation: Digits {1, 3, 5, 7, 9} are in non-decreasing order.

// 2335 ==> return true
// Explanation: Digits {2, 3, 3, 5} are in non-decreasing order (3 = 3).

function tidyNumber(n){
  let p1 = Number(n.toString().split('').map((x)=>Number(x)).sort((a,b)=>a-b).join(''))
  return n == p1 ? true : false
}



// Strong number is a number with the sum of the factorial of its digits is equal to the number itself.

// For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.
// Task

// Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".
// Examples

//     1 is a strong number, because 1! = 1, so return "STRONG!!!!".
//     123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return "Not Strong !!".
//     145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return "STRONG!!!!".
//     150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return "Not Strong !!".

function strong(n) {
  let p1 = n.toString().split('')
  let p2 = 0
  p1.forEach((x)=>{
    let p3 = Number(x)
    let h1 = 1
    for(let i=1;i<p3+1;i++){
      h1*=i
    }
    p2+=h1
    console.log(h1)
  })
  return n >= p2? "STRONG!!!!" : "Not Strong !!"
}



// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
// Notes

//     Array/list will contain positives only .
//     Array/list will always have even size
// Input >> Output Example

// minSum({5,4,2,3}) ==> return (22)
// 5*2 + 3*4 = 22

function minSum(arr) {
  let p1 = arr.sort((a,b)=>a-b)
  let ans = 0
  for(let i=0;i<p1.length/2;i++){
    ans+=(p1[i]*p1[p1.length-1-i])
  }
  return ans
}



// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
  let p1 = str.toLowerCase().split('')
  let ch = 0
  for(let i = 0; i < p1.length; i++){
     for(let j = 0; j < p1.length; j++){
      if(p1[i]==p1[j]){
        ch +=1
      }
     }
  }
  if(ch>p1.length){
    return false
  }else{
    return true
    }
}



// Given an object ( meet ) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. 
// 	If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room ( boss ). Their score is worth double its face value (but they are still just one person!).

function outed(meet, boss){
  let p1 = 0
  p1+=meet[boss]
  for(const number in meet){
    p1+=meet[number]
  }
  let p2 = p1/Object.keys(meet).length
  return p2 > 5? 'Nice Work Champ!' : 'Get Out Now!'
}



// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

// NOTES

//     Vowels in this context refers to: a e i o u y (including upper case)
//     This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word){
  const vow = ['a','e','i','o','u','y','A','E','I','O','U','Y']
  let ans = []
  let p1 = word.split('').forEach((x,i)=>{
    if(vow.includes(x)==true){
      ans.push(i+1)
    }
  })
  return ans
}



// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.

function wordsToMarks(string){
  const al = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26
}
  let ans = 0
  string.split('').forEach((x)=>{
    ans += al[x]
  })
  return ans
}



// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

function toNumberArray(stringarray){
  return stringarray.map((x)=>Number(x))
}



// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 will be passed to the function.
// Examples

// [1, 3, 1] ==> 13
// [5, 7, 5, 9, 7] ==> 579
// [1, 9, 3, 1, 7, 4, 6, 6, 7]  ==> 134679

function minValue(values){
  let p1 = new Set(values);
  let a1 = [...p1].sort((a,b)=>a-b)
  return Number(a1.join(''))
}



// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
// Examples

// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

function array(string) {
  let p1 = string.split(',')
  if(p1.length<3){
    return null
  }
  let ans = []
  for(let i = 1;i<p1.length-1;i++){
    ans.push(p1[i])
  }
  return ans.join(' ')
}



// Create a method all which takes two params:

//     a sequence
//     a function (function pointer in C)

// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. 
// If the sequence is empty, it should return true, since technically nothing failed the test.
// Example

// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

function all( arr, fun ){
  let ans = 0
  arr.forEach((x)=>{
    if(!fun(x)){
      ans+=1
    }
  })
  return ans>0? false : true
}



// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:

// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

function multipleOfIndex(array) {
  let ans = array.filter((x,i)=>{
    if(x==0){
      return x===0
    }else if(x%i==0){
      return x
    }
  })
  return ans
}



// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

function sumCubes(n){
  let ans = 0
  for(let i=0;i<=n;i++){
    ans+=Math.pow(i,3)
  }
  return ans
}



// Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. 
// Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.
// Examples

// input:    "CodeWars" => "CdWr oeas"
//            ||||||||      |||| ||||
// indices:   01234567      0246 1357

// Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
// Odd indices are 1, 3, 5, 7, so the second group is "oeas".
// And the final string to return is "Cdwr oeas".

function sortMyString(S) {
    let p1 = S.split('')
    let s1 = []
    let s2 = []
    p1.forEach((x,i)=>{
      if(i%2==0){
        s1.push(x)
      }else{
        s2.push(x)
      }
    })
  return `${s1.join('')} ${s2.join('')}`
}



// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. 
// If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

function cookie(x){
  let check = typeof(x)
  let a1 = {
    'string' : "Who ate the last cookie? It was Zach!",
    'number' : "Who ate the last cookie? It was Monica!",
  }
  return a1[check]? a1[check] : "Who ate the last cookie? It was the dog!"
}



// We want to generate a function that computes the series starting from 0 and ending until the given number.
// Example:

// Input: 6
// Output: 21

function SequenceSum(n){
  let ans = 0
  for(let i=1;i<=n;i++){
    ans+=i
  }
  return ans
}



// Given a year, return the century it is in.
// Examples

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

function century(year) {
  return Math.ceil(year/100)
}



// Complete the function that receives as input a string, and produces outputs according to the following table:
// Input 	Output
// "Jabroni" 	"Patron Tequila"
// "School Counselor" 	"Anything with Alcohol"
// "Programmer" 	"Hipster Craft Beer"
// "Bike Gang Member" 	"Moonshine"
// "Politician" 	"Your tax dollars"
// "Rapper" 	"Cristal"
// anything else 	"Beer"

// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars"

function getDrinkByProfession(param){
  let p1 = param.toLowerCase()
  let menu = {
    "jabroni" : "Patron Tequila",
    "school counselor" : "Anything with Alcohol",
    "programmer" :  	"Hipster Craft Beer",
    "bike gang member" : "Moonshine",
    "politician" : "Your tax dollars",
    "rapper" : "Cristal"
  }
  return menu[p1]? menu[p1] : 'Beer'
}



// The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).
// Examples

// numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
// numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10, 6) // -> 1000000

// Note: Math.pow and some other Math functions like eval() and ** are disabled.

function numberToPower(number, power){
  let p1 = []
  for(let i=0;i<power;i++){
    p1.push(number)
  }
  return p1.reduce((acc,cur)=>acc*cur,1)
}



// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
// Examples (Input -> Output)

// 15  -> '101.25 Chinese Yuan'
// 465 -> '3138.75 Chinese Yuan'

// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

function usdcny(usd) {
  return `${(usd*6.75).toFixed(2)} Chinese Yuan`
}



//Input: Array of elements

//["h","o","l","a"]

//Output: String with comma delimited elements of the array in th same order.

//"h,o,l,a"

function printArray(array){
  return array.join(",")
}



// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
  let n1 = name.toLowerCase().split('')
  let p1 = n1[0].toUpperCase()+n1.slice(1).join('')
  return `Hello ${p1}!`
}



// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

//     Terrible: tip 0%
//     Poor: tip 5%
//     Good: tip 10%
//     Great: tip 15%
//     Excellent: tip 20%

// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

//     "Rating not recognised" in Javascript, Python and Ruby...
//     ...or null in Java
//     ...or -1 in C#

// Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating) {
  let p1 = rating.toLowerCase()
  let percentage = {
    'terrible': 0,
    'poor': 0.05,
    'good': 0.1,
    'great': 0.15,
    'excellent': 0.2
  }
  return p1 in percentage? Math.ceil(amount * percentage[p1]) : "Rating not recognised"
}



// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
  let p1 = x.split('')
  let p2 = p1.map((x,i)=>{
    if(x=='a'){
      return 'b'
    }else if(x=='b'){
      return 'a'
    }else if (x=='c'){
      return 'c'
    }
  })
  return p2.join('')
}



// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

function bump(x){
  let p1 = x.split('')
  let count = 0
  p1.forEach((x)=>{
    if(x=='n'){
      count+=1
    }
  })
  return count > 15 ? 'Car Dead' : 'Woohoo!'
}



// Your task is to return a number from a string.
// Details

// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

function filterString(value) {
  return Number(value.split('').filter((x)=>Number(x)==x).join(''))
}



// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.

function isVow(a){
  const p1 = {
  97: 'a',
  101: 'e',
  105: 'i',
  111: 'o',
  117: 'u'
}
  let ans = []
  a.forEach((x)=>{
   return p1[x] ? ans.push(p1[x]) : ans.push(x)
  })
  return ans
}



// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]

// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

function sumTriangularNumbers(n) {
  let ans = 0
  for(let i = 0; i<=n; i++){
    ans += (i*(i+1))/2
  }
  return ans
}



// Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

function sumDigits(number) {
  let p1 = number.toString().split('').filter((x)=>x!='-')
  let ans = 0
  p1.forEach((x)=>{
    ans+=Number(x)
  })
  return ans
}



// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (always 2 for Java).

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 letters * 30 = 600 (Space counts as a character).

function billboard(name, price = 30){
  let p1 = name.split('')
  let cost = 0
  for(let i=0;i<p1.length;i++){
    cost+=price
  }
  return cost
} 



// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. 
// Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
	
//     First argument (required): the original string to be converted.
//     Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

// Example

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

function titleCase(title, minorWords) {
  if (!title) {
    return ''
  }
  let p1 = title.toLowerCase().split(' ')
  let p2 = minorWords? minorWords.toLowerCase().split(' ') : []
  let p3 = p1.map((x)=>{
    if(p2.includes(x)){
     return x = x.toLowerCase()
    }else{
     return x = x.charAt(0).toUpperCase() + x.slice(1)
    }
  })
  p3[0] = p3[0].charAt(0).toUpperCase() + p3[0].slice(1)
  return p3.join(' ')
}



// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)

function multiply(number){
  return number * (Math.pow(5,number.toString().split('').filter((x)=>x!='-').length))
}



// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1

// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1

// The other letters don't have power and are only victims. Sum up each side's letters' power values to determine which side wins.
// Example

// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

function alphabetWar(fight){
  let c1 = fight.split('')
  const l1 = ['w','p','b','s']
  const r1 = ['m','q','d','z']
  const left = {
    'w':4,
    'p':3,
    'b':2,
    's':1
  }
  const right = {
    'm':4,
    'q':3,
    'd':2,
    'z':1
  }
  let l2 = 0
  let r2 = 0
  c1.forEach((x)=>{
    if(l1.includes(x)){
      l2 += left[x]
    }else if(r1.includes(x)){
      r2 += right[x]
    }
  })
  let a1 = l2 > r2 ? "Left side wins!" : "Right side wins!"
  return l2 == r2 ? "Let's fight again!" : a1
}



// You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of 
// algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "how much do people normally tip for something like this?" 
// The artist looks up. "It's always gonna be about tree fiddy."

// It was then that you realize the musician was a 400 foot tall beast from the paleolithic era! The Loch Ness Monster almost tricked you!

// There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall beast from the paleolithic era; B) it will ask you for tree fiddy.

// Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. 
// Note that the phrase can also be written as "3.50" or "three fifty". Your function should return true if you're talking with The Loch Ness Moster, false otherwise.

function isLockNessMonster(s) {
  if(s.includes("tree fiddy")) return true;
  if(s.includes("3.50")) return true;
  if(s.includes("three fifty")) return true;
  else return false;
  
}



// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
  const p1 = {
    'a': 1,
    'e': 2,
    'i': 3,
    'o': 4,
    'u': 5
  }
  const p2 = ['a','e','i','o','u']
  let p3 = string.split('')
  p3.forEach((x,i)=>{
    if(p2.includes(x)==true){
      p3[i] = p1[x]
    }
  })
  return p3.join('')
}

function decode(string) {
  const p1 = {
    '1': 'a',
    '2': 'e',
    '3': 'i',
    '4': 'o',
    '5': 'u'
  }
  const p2 = ['1','2','3','4','5']
  let p3 = string.split('')
  p3.forEach((x,i)=>{
    if(p2.includes(x)==true){
      p3[i] = p1[x]
    }
  })
  return p3.join('')
}



// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  let p1 = array.map((x)=>x).sort((a,b)=>a-b)
  let p2 = array.map((x)=>x).sort((a,b)=>b-a)
  let d1 = true
  let d2 = true
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== p1[i]) {
      d1 = false
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== p2[i]) {
      d2 = false
    }
  }
  if(d1){
    return 'yes, ascending'
  }else if (d2){
    return 'yes, descending'
  }else{
    return 'no'
  } 
}



// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}



// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the savings over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice, in £ (Pounds)), the duty free discount (discount, in percent) and the cost of the holiday (in £).

// For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.

// Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.

function dutyFree(normPrice, discount, hol){
  return Math.floor(hol/(normPrice*(discount/100)))
}



// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Example:    
// 5.5589 is rounded 5.56   
// -3.3424 is rounded -3.34

function twoDecimalPlaces(n) {
  return Number(n.toFixed(2))
}



// Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str){
    return str.split('').filter((x)=>(/[a-z]/.test(x)===true)).length
}



// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values ){
  return values.filter((x)=>x%2==0)
}



// Complete the function which returns the weekday according to the input number:

//     1 returns "Sunday"
//     2 returns "Monday"
//     3 returns "Tuesday"
//     4 returns "Wednesday"
//     5 returns "Thursday"
//     6 returns "Friday"
//     7 returns "Saturday"
//     Otherwise returns "Wrong, please enter a number between 1 and 7"

function whatday(num) { 
  let ans = {
    1 : 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday'
  }
  return ans[num] ? ans[num] : "Wrong, please enter a number between 1 and 7"
}



// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// Example:

// move(3, 6) should equal 15

function move (position, roll) {
  return position + roll*2
}



// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
  let p1 = card.split('')[card.length-1]
  let ans = {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades'
  }
  return ans[p1]
}



// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum (numbers) {
  let p1 = numbers.sort((a,b)=> a-b)
  return p1[p1.length-1]+p1[p1.length-2]
}



// Find the mean (average) of a list of numbers in an array.

function findAverage(nums) {
  let p1 = nums.reduce((a,b)=>a+b,0)
  return p1/nums.length
}



// Write a simple regex to validate a username. Allowed characters are:

//     lowercase letters,
//     numbers,
//     underscore

// Length should be between 4 and 16 characters (both included).

function validateUsr(username) {
  const res =  /^[a-z0-9_]{4,16}$/
  return res.test(username)
}



// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1]
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el)
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}



// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

function remainder(n, m){
  let p1 = [n,m].sort((a,b)=>a-b)
  return p1[1]%p1[0]
}



// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many 
// 	years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: 
// 		"You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

function  calculateAge(bir,cur) {  
  let age = cur - bir
  console.log(age)
  if(age==-1){
    return 'You will be born in 1 year.'
  }else if(age<0){
    return `You will be born in ${age*-1} years.`
  }else if(age==0){
    return 'You were born this very year!'
  }else if(age==1){
    return 'You are 1 year old.'
  }else{
    return `You are ${age} years old.`
  }
}



// Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

// When bool is truthy, func1 should be called, otherwise call the func2.
// Example:

// _if(true, function(){console.log("True")}, function(){console.log("false")})
// // Logs 'True' to the console.

function _if(bool, func1, func2) {
  return bool == true? func1() : func2()
}



// Write a function to greet a person. Function will take name as input and greet the person by saying hello. 
// Return null/nil/None if input is empty string or null/nil/None.

// Example:

// greet("Niks") === "hello Niks!";
// greet("") === null; // Return null if input is empty string
// greet(null) === null; // Return null if input is null

function greet(name) {
  return name ? `hello ${name}!` : null
}



// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"

// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  let p1 = num.toString().split('')
  let ans =[]
  p1.forEach((x,i)=>{
    if(x!='0'){
      let p2 = x
      for(let j = 1;j<p1.length-i;j++){
        p2+='0'
      }
      ans.push(p2)
    }
  })
  let p3 = ans.join(' + ')
  return p3
}



// Create a function named combineNames/combine_names/CombineNames that accepts two parameters (first and last name). The function should return the full name.

function combineNames(first,last){
  return `${first} ${last}`
}



// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

var Ball = function(ballType) {
  this.ballType = ballType || 'regular'
}



// In honor of my grandfather's memory we will write a function using his formula!

//     Take a list of ages when each of your great-grandparent died.
//     Multiply each number by itself.
//     Add them all together.
//     Take the square root of the result.
//     Divide by two.

// Example

// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  return Math.floor(Math.sqrt(age1*age1+age2*age2+age3*age3+age4*age4+age5*age5+age6*age6+age7*age7+age8*age8)/2)
}



//  Find the sum of all multiples of n below m
// Keep in Mind

//     n and m are natural numbers (positive integers)
//     m is excluded from the multiples

// Examples

// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

function sumMul(n,m){
  let ans = 0
  for(let i = n; i < m; i+=n){
    ans+=i
  }
  return m > 0 ? ans : 'INVALID'
}



// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item){
  return arr.includes(item)? true : false
}



// Complete the function which converts hex number (given as a string) to a decimal number.

function hexToDec(hexString){
  return parseInt(hexString, 16)
}



// Determine offspring sex based on genes XX and XY chromosomes

function chromosomeCheck(sperm) {
  return sperm == 'XX' ? "Congratulations! You're going to have a daughter." : "Congratulations! You're going to have a son."
}



// Given a number n, return the number of positive odd numbers below n
// Examples (Input -> Output)

// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

function oddCount(n){
  return Math.floor(n/2)
}



// Write a function that will return the integer number of e-mails sent in the percentage of the limit.

// Example:

// limit       - 1000;
// emails sent - 101;
// return      - 10%; // because integer from 10,1 = 10

// Arguments:

//     sent: number of e-mails sent today (integer)
//     limit: number of e-mails you can send today (integer)

// When:

//     the argument sent = 0, then return the message: "No e-mails sent";
//     the argument sent >= limit, then return the message: "Daily limit is reached";
//     the argument limit is empty, then default limit = 1000 emails;

function getPercentage(sent, limit){
  if(limit){
    if(sent==0){
      return "No e-mails sent"
    }else if(sent<limit){
      return  `${Math.floor(sent/limit*100)}%`
    }else if(sent>=limit){
      return "Daily limit is reached"
    }
  }else{
    if(sent==0){
      return "No e-mails sent"
    }else if(sent<1000){
      return  `${Math.floor(sent/1000*100)}%`
    }else if(sent>=limit){
      return "Daily limit is reached"
    }
  }
}



// Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.
// Examples

// (1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// (-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
// (1, 15, 20) -> [1]

function generateRange(min, max, step){
  let ans = []
  for(let i = min; i<=max; i+=step){
    ans.push(i)
  }
  return ans
}



// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s){
  let p1 = s.split('')
  let p2 = []
  let p3 =[]
  p1.forEach((x, i)=>i%2==0? p2.push(x.toUpperCase()):p2.push(x.toLowerCase()))
  p1.forEach((x, i)=>i%2!=0? p3.push(x.toUpperCase()):p3.push(x.toLowerCase()))
  let ans = [p2.join(''),p3.join('')]
  return ans
}



// Task

// Given a Divisor and a Bound , Find the largest integer N , Such That ,
// Conditions :

//     N is divisible by divisor

//     N is less than or equal to bound

//     N is greater than 0.

function maxMultiple(divisor, bound){
  let p1 = []
  for(let i=0;i<=bound;i+=divisor){
    p1.push(i)
  }
  return p1[p1.length-1]
}



// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
  let p1 = []
  for(let i=0;i<number;i++){
    if(i%5==0||i%3==0){
      p1.push(i)
    }
  }
  let p2 = p1.reduce((acc,cur)=>acc+cur,0,)
  return p2
}



// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. 
// The strings will not be the same length, but they may be empty ( zero length ).

function solution(a, b){
  return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`
}



// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
  let p1 = name.split(' ')
  return `${p1[0][0].toUpperCase()}.${p1[1][0].toUpperCase()}`
}



// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// Examples

// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
  let ans = []
  for(let i=0;i<=n;i++){
    ans.push(Math.pow(2,i))
  }
  return ans
}



// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence 
// "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  let bet = ['abcdefghijklmnopqrstuvwxyz']
  let checking = string.toLowerCase().split('').sort()
  let bet2 = []
  checking.forEach((x)=>{
    if(bet[0].includes(x)&&!bet2.includes(x)){
      bet2.push(x)
    }
  })
  return bet.join('') == bet2.join('') ? true : false
}



// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to 
// return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function dnaStrand(dna){
  let rep = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  }
  return dna.split('').map((x)=>rep[x]).join('')
}



// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
  let decider = 0
  x.forEach((x)=>{
    if(x=='good'){
      decider += 1
    }
  })
  return decider == 0 ? 'Fail!' : decider > 2 ? 'I smell a series!' : 'Publish!'
}



// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

function breakChocolate(n,m) {
  return n*m >= 1 ? n*m-1 : 0
}



// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence){
  return sentence.toLowerCase().includes('english')? true : false
}



// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

//     lst contains integers, that means it may contain some negative numbers
//     if lst is empty or contains a single element, return 0
//     lst is not sorted

// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

function maxDiff(list) {
  let p1 = list.sort((a,b)=> a-b)
  let p2 = p1[0]
  let p3 = p1.pop()
  return p3 - p2 ? p3-p2 : 0
}



// In this simple exercise, you will write a function that takes two integers; n and limit; and returns a list of the multiples of n up to and possibly including limit.

// It is guaranteed that n > 0 and limit >= n.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
// Examples

// n = 2; limit = 6 --> [2, 4, 6]
// n = 2; limit = 5 --> [2, 4]

function findMultiples(integer, limit) {
  let ans = []
  for(let i=1; i <= limit/integer; i++){
    ans.push(integer*i)
  }
  return ans
}



// If you like Taco Bell, you will be familiar with their signature doritos locos taco. They're very good.

// Why can't everything be a taco? We're going to attempt that here, turning every word we find into the taco bell recipe with each ingredient.

// We want to input a word as a string, and return a list representing that word as a taco.

// Key

// all vowels (except 'y') = beef

// t = tomato

// l = lettuce

// c = cheese

// g = guacamole

// s = salsa

// NOTE
// We do not care about case here. 'S' is therefore equivalent to 's' in our taco.

// Ignore all other letters; we don't want our taco uneccesarily clustered or else it will be too difficult to eat.

// Note that no matter what ingredients are passed, our taco will always have a shell.

function tacofy(word) {
  let p1 = word.toLowerCase().split('')
  let ans = []
  p1.forEach((x)=>{
    switch(x){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        ans.push('beef')
        break
        case 't':
        ans.push('tomato')
        break
        case 'l':
        ans.push('lettuce')
        break
        case 'c':
        ans.push('cheese')
        break
        case 'g':
        ans.push('guacamole')
        break
        case 's':
        ans.push('salsa')
    }
  })
    ans.unshift('shell')
    ans.push('shell')
    return ans
}



// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. 
// Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages){
  let p1 = ages.sort((a,b)=>a-b)
  return [p1[0],p1[p1.length-1],p1[p1.length-1]-p1[0]]
}



// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

const sequenceSum = (begin, end, step) => {
  let p1 = []
  for(let i = begin; i<=end; i += step){
    p1.push(i)
  }
  return p1.reduce((acc,cur)=>acc+cur,0)
}



// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
  return arr.slice(0,n)
}



// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

//     humanYears >= 1
//     humanYears are whole numbers only

// Cat Years

//     15 cat years for first year
//     +9 cat years for second year
//     +4 cat years for each year after that

// Dog Years

//     15 dog years for first year
//     +9 dog years for second year
//     +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
  let ans = []
  if(humanYears>2){
    ans.push(humanYears,(humanYears-2)*4+9+15,(humanYears-2)*5+9+15)
  }else if(humanYears>1){
    ans.push(humanYears,24,24)
  }else{
    ans.push(humanYears,15,15)
  }
  return ans
}



// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

function flattenAndSort(array) {
  return array.flat().sort((a,b) => a-b)
}



// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
// Example (Input --> Output)

// "CodEWaRs" --> [0,3,4,6]

var capitals = function (word) {
	let ans = []
  let p1 = word.split('')
  p1.forEach((x,index)=>{
    if(x.toUpperCase()===x){
      ans.push(index)
    }
  })
  return ans
}



// You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:

//     The resulting array is sorted in ascending order.

//     Any duplicate values are removed, so each integer appears only once.

//     If both input arrays are empty, return an empty array.

// No input validation is needed, as both arrays are guaranteed to contain zero or more integers.
// Examples (input -> output)

// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

function mergeArrays(arr1, arr2) {
  let ans = arr1
  arr2.forEach((x)=>{
    if(ans.includes(x)==false){
      ans.push(x)
    }
  })
  return ans.sort((a,b) => a-b)
}



// Don't give me five!

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

function dontGiveMeFive(start, end){
  let ans = []
  for(let i = start; i<=end; i++){
      if(i.toString().includes('5')==false){
        ans.push(i)
      }
  }
  return ans.length
}



// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	let p1 = s.split('')
  let ans = []
  p1.forEach((x, index)=>{
    let p2 = []
    for(let i=0;i<index;i++){
    p2.push(x.toLowerCase())
  }
    ans.push(`${x.toUpperCase()}${p2.join('')}`)
  })
  return ans.join('-')
}



// Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). 
// Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"
// Examples

// "hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
// "ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
// "555"                   -->  "5"

function lottery(str){
   let c1 = str.split('')
   let c2 = ['0','1','2','3','4','5','6','7','8','9']
   let ans = []
   c1.forEach((x)=>{
     if(ans.includes(x)==false&&c2.includes(x)==true){
       ans.push(x)
     }
   })
  return ans.length>0? ans.join('') : 'One more run!'
}



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



// Inspired by the development team at Vooza, write the function that

//     accepts the name of a programmer, and
//     returns the number of lightsabers owned by that person.

// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18

function howManyLightsabersDoYouOwn(name){
  return name === undefined ? 0 : name === 'Zach' ? 18 : 0
}



// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or 
// null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
  return nums != undefined ? nums.sort(function(a,b){return a-b}) : []
}



// Issue

// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.
// Task

// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// Example

// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
  let start = numbers[0]
  let end = numbers[numbers.length - 1]
  let answer = []
  for(let i = start; i <= end; i++){
    answer.push(i)
  }
  return answer
}



// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here
// Examples

// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

function getRealFloor(n) {
  if(n <= 0){
    return n
  }else if (n <=12){
    return n-1
  }else{
    return n-2
  }
}



// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n){
  let holding = []
  for(let i = n; i > 0; i--){
    holding.push(i)
  }
  let answer = holding.reduce((acc,curr)=> acc * curr, 1)
  return answer
}



// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator 
// who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which 
// corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

function mouthSize(animal) {
  return animal.toLowerCase() == 'alligator' ? 'small' : 'wide'
}



// Bob needs a fast way to calculate the volume of a cuboid with three values: 
// the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}



// You're writing code to control your town's traffic lights. You need a function to handle each change from green, 
// to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a 
// string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

function updateLight(current) {
  let traffic = {
    'green': "yellow",
    'yellow': "red",
    'red': "green"
  };
  return traffic[current];
}



// The Story:

// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. 
// With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! 
// He wants you to write a simple program telling him if he will be able to fit all the passengers.
// Task Overview:

// You have to write a function that accepts three parameters:

//     cap is the amount of people the bus can hold excluding the driver.
//     on is the number of people on the bus excluding the driver.
//     wait is the number of people waiting to get on to the bus excluding the driver.

// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
// Usage Examples:

// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

function enough(cap, on, wait) {
  let freeSpace = cap - on
  let kickedOff = freeSpace - wait
  return kickedOff > 0 ? 0 : Math.abs(kickedOff)
}



// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will 
// consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference 
// of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. 
// Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

function findDifference(a, b) {
  let part1 = a.reduce((acc,cur)=>acc*cur,1)
  let part2 = b.reduce((acc,cur)=>acc*cur,1)
  return part1>part2 ? part1-part2 : part2-part1
}
//or
function findDifference2(a, b) {
  return Math.abs(a.reduce((acc,cur)=> acc*cur, 1) - b.reduce((acc,cur)=>acc*cur,1))
}



// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

function angle(n) {
  return (n-2)*180
}



// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// Good luck :)

function unusualFive() {
  return ['f','i','v','e','e'].length
}



// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). 
// "^1" should not be truncated when exponent = 2.

// For example:

// derive(7, 8)

// In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product 
// of the two numbers, and the second number being the exponent minus 1.

// derive(7, 8) --> this should output "56x^7" 
// derive(5, 9) --> this should output "45x^8" 

// Notes:

//     The output of this function should be a string
//     The exponent will never be 1, and neither number will ever be 0

function derive(coefficient,exponent) {
  return `${coefficient * exponent}x^${exponent-1}`
}



// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

//     If the string's length is odd, return the middle character.
//     If the string's length is even, return the middle 2 characters.

// Examples:

// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s) {
  let rip = s.split('')
  if(rip.length%2==0){
    let p1 = rip[Math.floor(rip.length/2)-1]
    let p2 = rip[rip.length/2]
    return `${p1}${p2}`
  }else{
    let p1 = rip[Math.floor(rip.length/2)]
    return `${p1}`
  }
}



// You have an award-winning garden and every day the plants need exactly 40mm of water. 
// You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into 
// consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

// Your task is to debug the code before your plants die!

function rainAmount(mm){
    if (mm < 40) {
         return `You need to give your plant ${40 - mm}mm of water`
    }
    else{
         return "Your plant has had more than enough water for today!"
    }
}



// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:

// h = 0
// m = 1
// s = 1

// result = 61000

// Input constraints:

//     0 <= h <= 23
//     0 <= m <= 59
//     0 <= s <= 59

function past(h, m, s){
  let total = 0
  0 <= h <= 23 ? total += h*3600000 : total += 0
  0 <= m <= 59 ? total += m*60000 : total += 0
  0 <= s <= 59 ? total += s*1000 : total += 0
  return total
}



// Write a function that when given a URL as a string, parses out just the domain name and returns 
// it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
  if(url.includes('//')){
    if(url.includes('www.')){
      let p1 = url.split('www.')
      let p2 = p1[1].split('.')
      return p2[0]
    }else{
      let p1 = url.split('//')
      let p2 = p1[1].split('.')
      return p2[0]
    }
  }else{
    if(url.includes('www.')){
      let p1 = url.split('.')
      return p1[1]
    }else{
      let p1 = url.split('.')
      return p1[0]
    }
  }
}

//or

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
}



// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  let p1 = arr1.reduce((acc,curr)=>
                      acc+curr,0)
  let p2 = arr2.reduce(
    (acc,curr)=> acc+curr,0)
  return p1+p2
}
//or
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}



// In mathematics, the factorial of a non-negative integer n, denoted by n!, is 
// the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 
// 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException 
// (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

function factorial(n){
  let answer = 1
if(n < 0 || n > 12){
throw undefined
}else{
   for(let i = 1; i <= n; i++){
   answer *= i
}
  return answer
}
}



// Those wayward Winchester boys are in trouble again, hunting something down in New Orleans. You are Bobby Singer, you know how "idjits" they can be, so you have to prepare. They will call 
// you any minute with the race of the thing, and you want to answer as soon as possible. By answer, I mean: tell them how to kill, or fight it.

// You have something like a database (more like drunken doodling) to help them:

//     werewolf : Silver knife or bullet to the heart
//     vampire : Behead it with a machete
//     wendigo : Burn it to death
//     shapeshifter : Silver knife or bullet to the heart
//     angel : Use the angelic blade
//     demon : Use Ruby's knife, or some Jesus-juice
//     ghost : Salt and iron, and don't forget to burn the corpse
//     dragon : You have to find the excalibur for that
//     djinn : Stab it with silver knife dipped in a lamb's blood
//     pagan god : It depends on which one it is
//     leviathan : Use some Borax, then kill Dick
//     ghoul : Behead it
//     jefferson starship : Behead it with a silver blade
//     reaper : If it's nasty, you should gank who controls it
//     rugaru : Burn it alive
//     skinwalker : A silver bullet will do it
//     phoenix : Use the colt
//     witch : They are humans
//     else : I have friggin no idea yet

function bob(mon) {
  let db = {
    'werewolf' : 'Silver knife or bullet to the heart, idjits!',
    'vampire' : 'Behead it with a machete, idjits!',
    'wendigo' : 'Burn it to death, idjits!',
    'shapeshifter' : 'Silver knife or bullet to the heart, idjits!',
    'angel' : 'Use the angelic blade, idjits!',
    'demon' : 'Use Ruby\'s knife, or some Jesus-juice, idjits!',
    'ghost' : 'Salt and iron, and don\'t forget to burn the corpse, idjits!',
    'dragon' : 'You have to find the excalibur for that, idjits!',
    'djinn' : 'Stab it with silver knife dipped in a lamb\'s blood, idjits!',
    'pagan god' : 'It depends on which one it is, idjits!',
    'leviathan' : 'Use some Borax, then kill Dick, idjits!',
    'ghoul' : 'Behead it, idjits!',
    'jefferson starship' : 'Behead it with a silver blade, idjits!',
    'reaper' : 'If it\'s nasty, you should gank who controls it, idjits!',
    'rugaru' : 'Burn it alive, idjits!',
    'skinwalker' : 'A silver bullet will do it, idjits!',
    'phoenix' : 'Use the colt, idjits!',
    'witch' : 'They are humans, idjits!'
  }
  let other = 'I have friggin no idea yet, idjits!'
  let answer = db[mon] || other
  return answer
}



// Write a function that finds the sum of all its arguments.

// eg:

// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15

function sum(...numbers) {
  let total = 0
  for(let num of numbers){
    total += num
  }
  return total
}



// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
  let p1 = marks.reduce(
  (acc, cur) => acc + cur,
  0
)
  return Math.floor(p1/marks.length)
}



// When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

// Input: 1

// Output: "One".

function switchItUp(number){
  let con = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine'
  }
  return con[number]
}



// This code does not execute properly. Try to figure out why.

function multiply(a, b){
  return a * b
}



// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, 
// each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

// This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

function narcissistic(value) {
  let con = []
  let p1 = value.toString()
  let p2 = p1.split('')
  let p3 = p2.forEach((x)=>
                    con.push(Number(x)**p1.length))
  let p4 = con.reduce((acc,cur)=>
                     acc+cur,0)
  return p4 == value ? true : false  
}



// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your 
// most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples (input --> output):

// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

function maskify(cc) {
  let numArr = ['0','1','2','3','4','5','6','7','8','9']
  let answer = []
     if(cc.length>4){
      let p1 = cc.split('')
      for(let i = 0; i < p1.length - 4; i++){
        answer.push('#')
      }//for answer.push('#')
       answer.push((p1.slice(p1.length - 4)).join(''))
       return answer.join('')
    }else {
      return cc
    }//else if cc < 4
}



// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed 
// (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function spinWords(string){
  let p1 = string.split(' ')
  let p22 = []
  p1.forEach((x)=>{
    if(x.length >= 5){
      p22.push(x.split('').reverse().join(''))
    }else{
      p22.push(x)
    }
  })
  let answer = p22.join(' ')
  return answer
}



// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, 
// then the remaining numbers were mixed. Find the number that was deleted.

// Example:

//     The starting array sequence is [1,2,3,4,5,6,7,8,9]
//     The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
//     Your function should return the int 5.

// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be [])

function findDeletedNumber(arr, mixArr) {
  let answer = []
  arr.forEach((x)=>{
    if(arr && mixArr.includes(x)==false){
      answer.push(x)
    }
  })
  return Number(answer.join())
}



// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let ck = ['a','e','o','i','u']
  let p1 = str.split('')
  let ans = []
  p1.forEach((x)=>{
    if(ck.includes(x) == true && x != ' '){
      ans.push(x)
    }
  })
  return ans.length 
}



// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
  let p1 = numbers[0]
  let p2 = numbers[1]
  let p3 = numbers[2]
  let p4 = numbers[3]
  let p5 = numbers[4]
  let p6 = numbers[5]
  let p7 = numbers[6]
  let p8 = numbers[7]
  let p9 = numbers[8]
  let p10 = numbers[9]
  return `(${p1}${p2}${p3}) ${p4}${p5}${p6}-${p7}${p8}${p9}${p10}`
}

// //not my solution but I really liked this one
// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";
//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   } 
//   return format;
// }



// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site 
//in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.
// The Task

//     Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
//     Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English 
//	if the language is not in the database, or in the event of an invalid input.

// The Database

// Please modify this as appropriate for your language.

// [ ("english", "Welcome")
// , ("czech", "Vitejte")
// , ("danish", "Velkomst")
// , ("dutch", "Welkom")
// , ("estonian", "Tere tulemast")
// , ("finnish", "Tervetuloa")
// , ("flemish", "Welgekomen")
// , ("french", "Bienvenue")
// , ("german", "Willkommen")
// , ("irish", "Failte")
// , ("italian", "Benvenuto")
// , ("latvian", "Gaidits")
// , ("lithuanian", "Laukiamas")
// , ("polish", "Witamy")
// , ("spanish", "Bienvenido")
// , ("swedish", "Valkommen")
// , ("welsh", "Croeso")
// ]

function greet(language) {
	let dba = {
  "english": "Welcome"
, "czech": "Vitejte"
, "danish": "Velkomst"
, "dutch": "Welkom"
, "estonian": "Tere tulemast"
, "finnish": "Tervetuloa"
, "flemish": "Welgekomen"
, "french": "Bienvenue"
, "german": "Willkommen"
, "irish": "Failte"
, "italian": "Benvenuto"
, "latvian": "Gaidits"
, "lithuanian": "Laukiamas"
, "polish": "Witamy"
, "spanish": "Bienvenido"
, "swedish": "Valkommen"
, "welsh": "Croeso"
  }
  if(dba[language]){
    return dba[language]
  }else{
    return 'Welcome'
  }



//Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
  return b.toString()
}



// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

//     if x > y: 3 points (win)
//     if x < y: 0 points (loss)
//     if x = y: 1 point (tie)

// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

function points(games) {
  let p1 = []
  games.forEach((x)=>
      {
      if(Number(x[0]) > Number(x[2])){
            p1.push(3)
        }else if(Number(x[0]) < Number(x[2])){
            p1.push(0)
        }else if(Number(x[0]) == Number(x[2])){
          p1.push(1)
        }
        })//forEach
return p1.reduce((acc,cur)=>
                  acc+cur,0
                  )
}


// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
	return Math.pow(n,3)
}


	
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  let ans = []
  for(let i = n; i > 0; i--){
    ans.push(i)
  }
  return ans
}



// There are five workers : James, John, Robert, Michael and William. They work in a fixed order from Monday to Friday, 
// and they rest on weekends. The order of work is as follows:

//     James works on Monday,

//     John works on Tuesday,

//     Robert works on Wednesday,

//     Michael works on Thursday,

//     William works on Friday.

// Your task is to create a function that takes three arguments:

//     Weekday: The day of the week (e.g., Monday).

//     Number of Trees: The number of trees that must be sprayed on that day.

//     Cost per Litre: The cost of 1 litre of liquid needed to spray a tree. Assume that 1 tree requires 1 litre of liquid.

// The total cost of the liquid to spray all trees is denoted as x.

// The function should return a string in the following format:

// 'It is (weekday) today, (name), you have to work, you must spray (number) trees and you need (x) dollars to buy liquid'
// Examples:

// Input :

//     Weekday : "Monday".

//     Number of Trees : 15

//     Cost per Litre : 2

// Output:

// "It is Monday today, James, you have to work, you must spray 15 trees and you need 30 dollars to buy liquid."

function task(w, t, c) {
  let dw = {
    'Monday': 'James',
    'Tuesday': 'John',
    'Wednesday': 'Robert',
    'Thursday': 'Michael',
    'Friday': 'William'
  }
  return `It is ${w} today, ${dw[w]}, you have to work, you must spray ${t} trees and you need ${t*c} dollars to buy liquid` 
}



// It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.

// It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.

// Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...

// Go show some truth who's boss!

function ifChuckSaysSo(){
  return typeof('data') == Number
}



// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes 
// downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). 
// Below is an example of what a box of cubes might look like before and after switching gravity.

// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+

// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.
// Examples (input -> output:

// * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

const flip=(d, a)=>{
  if(d == 'R'){
    return a.sort(function(a,b){
      return a-b
    })
  }else{
    return a.sort(function(a,b){
      return b-a
    })
  }
}
	


// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
  if(n%x == 0 && n%y == 0){
    return true
  }else{
    return false
  }
}
//or
function isDivisible2(n, x, y) {
  return n%x==0? n%y==0 : false ? true : false
}



// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 
// (November), is part of the fourth quarter.

// Constraint:

//     1 <= month <= 12

const quarterOf = (month) => {
  if(month <= 3){
    return 1
  }else if(month <= 6){
    return 2
  }else if(month <= 9){
    return 3
  }else{
    return 4
  }
}
//or
const quarterOf2 = (month) => {
  return month <= 3? 1 : month <= 6? 2 : month <= 9? 3 : 4
}	



// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

//     Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
//     Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255

// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")
// Example

// "#FF9933" --> {r: 255, g: 153, b: 51}

function hexStringToRGB(hexString) {
  let p1 = []
  let hexString1 = hexString.slice(1)
  for(let i = 0; i<= hexString1.length; i += 2){
    if(i+1 >= hexString1.length){
      
    }else{
      p1.push(hexString1.slice(i, i+2))
    }
  }
  let p2 = p1.map((x)=>{
    return parseInt(x, 16)
  })
  let answer = { r: p2[0], g: p2[1], b: p2[2] }
  return answer
}


	
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

function buildString(...template){
  return `I like ${template.join(', ')}!`;
}



// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
  let ans = [arr[0]]
  for(let i = 1; i < arr.length; i++){
    if(i % 2 == 0){
      ans.push(arr[i])
    }
  }
  return ans
}



// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth){
  let area = 2 * width * height + 2 * width * depth + 2 * depth * height  
  let volume = width * height * depth
  return [area, volume]
}	



// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
// Examples:

// divisors(12) --> [2, 3, 4, 6]
// divisors(25) --> [5]
// divisors(13) --> "13 is prime"

function divisors(integer) {
  let answer = []
  function sorted(arr){
    arr.sort(function(a,b) { 
        return a - b; 
      })
    return arr
  } 
  for(let i = integer-1; i>1; i--){
    if(integer%i==0){
      answer.push(i)
    }
  }
  return answer.length>0 ? sorted(answer) : `${integer} is prime`
}


	
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function(nums, target) {
    let ans = []
    for(let i = 0; i < nums.length; i++){

        for(let j = i+1; j < nums.length; j++){
            if(nums[i]+nums[j]==target){
                ans.push(i,j)
            }
        }
    }
    return ans
}	



// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?
// Three conditions must be met for a valid experiment:

//     Float parameter "h" in meters must be greater than 0
//     Float parameter "bounce" must be greater than 0 and less than 1
//     Float parameter "window" must be less than h.

// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
// Note:

// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
// Examples:

// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

function bouncingBall(h,  bounce,  window) {
  let h1 = h > 0
  let b1 = bounce > 0 && bounce < 1
  let w1 = window < h
  if(h1 == true && b1 == true && w1 == true){
    return h
  }else{
    return 1-2
  }
}	



// Garfield doesn’t like Mondays and neither do I, so here’s an easy one. You will take a number as an input, if the number can be divided by 5 and is greater than 
// or equal to 5, return ‘5 dollar foot long’, if not, or the number is above 5, return ‘inflation is not going to like this one’, else if the number is below 5, 
// return ‘you’re not old enough for this club’.	

function Mondays(num){
	if(num >= 5 && num%5 == 0){
        return '5 dollar foot long’'
    }else if (num >= 5 && num%5 != 0){
        return 'inflation is not going to like this one’'
    }else if(num < 5){
        return 'you’re not old enough for this club’'
    }
}



// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

function stringy(size) {
  let answer = []
  for(let i = 0; i <= size-1; i++){
    if(i % 2 == 0){
      answer.push(1)
    }else{
      answer.push(0)
    }
  }
  return answer.join('')
}	



// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.
// Examples:

// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
  let bad = ['n','o','p','q','r','s','t','u','v','w','x','y','z']
  let count = 0
  let ch1 = s.split('')
  ch1.forEach((x)=>{
    if(bad.includes(x)==true){
      count += 1
    }
  })
  return `${count}/${s.length}`
}	



// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

var isPalindrome = function(s) {
  let p1 = []
  let ch1 = ['q','w','e','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','1','2','3','4','5','6','7','8','9','0']
  s.toLowerCase().split('').forEach((x)=>{
      if(ch1.includes(x)==true){
          p1.push(x)
      }
  })
  let p2 = p1.join('')
  let p3 = p1.reverse().join('')
  if(p2 == p3){
      return true
  }else{
      return false
  }
}	



// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal

// consisting of non-space characters only.

 
// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

var lengthOfLastWord = function(s) {
  let p1 = s.trim().split(' ')
  return p1[p1.length-1].length
}



// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}	



// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
// Example(Input1, Input2 --> Output)

// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

function divisibleBy(numbers, divisor){
  return numbers.filter((x)=>x%divisor==0)
  }	

	

// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

var a = "code";
var b = "wa.rs";
var name = a + b;
	//the assignment == was incorrect so I fixed it



// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples

//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
  let v = n.toString().split('')
  let c = v.map((x)=>Number(x))
  if(c.length > 1){
    let test = c.reduce(
  (acc, cur) => acc + cur,
  0,
  )
    c = test
    return digitalRoot(test)
  }else{
    return Number(c.join())
  }
}	



// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
  let ck = n.toString().split('').map((x)=>Number(x))
    ck.sort(function(a,b) { 
    return b - a; 
})
  return Number(ck.join(''))
}	



// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// Your function should only return a number, not the explanation about how you get that number.

function getSum(a, b){
  let con = []
  let ans = []
  con.push(a)
  con.push(b)
  con.sort(function(a,b) { 
    return a - b; 
})
  for(let i = con[0]; i <= con[1]; i++){
    ans.push(i)
  }
  return ans.reduce((acc,cur)=>acc+cur,0)
}	



// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

var number = function(busStops){
  let ans = 0
  for(let i = 0; i < busStops.length; i++){
    ans += busStops[i][0]
    ans -= busStops[i][1]
  }
  return ans
}	



// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
// Examples (input --> output):

// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

String.prototype.camelCase = function() {
  let p1 = this.split(' ').filter(Boolean)
  let p2 = p1.map((x) => x[0].toUpperCase() + x.slice(1).toLowerCase())
  return p2.join('')
}	
	
	
	
// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
// Example:

// arguments: 1, 2, "+"
// should return 3

// arguments: 1, 2, "&"
// should return "unknown value"

// arguments: 1, "k", "*"
// should return "unknown value"

function calculator(a,b,sign){
  let ch1 = ['+','-','/','*']
  if(typeof a == 'number' && typeof b == 'number' && ch1.includes(sign) == true ){
    if(sign == '+'){
      return a + b
    }else if (sign == '-'){
      return a - b
    }else if (sign == '/'){
      return a / b
    }else if (sign == '*'){
      return a * b
    }
  }else{
    return 'unknown value'
  }
}



// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz	
	
function longest(s1, s2) {
  let c1 = []
  let sc1 = s1.split('').sort()
  let sc2 = s2.split('').sort()
  let fc1 = sc1.concat(sc2)
  fc1.forEach((x)=>{
    if(c1.includes(x) == false){
      c1.push(x)
    }
  })
  let a1 = c1.sort().join('')
  return a1
}	



// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30

// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
  return Math.floor(s/60/60*100000)
}



// Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let d = dadYearsOld
  let s = sonYearsOld
  if(s*2<d){
    return d - (s*2)
  }else if(s*2>d){
    return (s*2) - d
  }else if (s*2==d){
    return 0
  }
}	



// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {
  let con = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'f': 6,
  'g': 7,
  'h': 8,
  'i': 9,
  'j': 10,
  'k': 11,
  'l': 12,
  'm': 13,
  'n': 14,
  'o': 15,
  'p': 16,
  'q': 17,
  'r': 18,
  's': 19,
  't': 20,
  'u': 21,
  'v': 22,
  'w': 23,
  'x': 24,
  'y': 25,
  'z': 26
}
  let ans = []
let p1 = text.toLowerCase().split('')
let p2 = p1.forEach((x)=>{
  if(con[x]!=undefined){
    ans.push(con[x])
  }
})
return ans.join(' ')
}	



// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

function roundToNext5(n){
  if(n==0){
    return 0
  }else if(n!= 0){
    if(n%5==0){
      return n
    }else{
      return roundToNext5(n+1)
    }
  }
}



// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!

// function fixTheMeerkat(arr) {
//  if(arr.includes('tail')==true){
//    return ["head", "body", "tail"]
//  }else if(arr.includes('tails')==true){
//    return ["heads", "body", "tails"]
//  }else if(arr.includes('bottom')==true){
//    return ["top", "middle", "bottom"]
//  }else if(arr.includes('torso')==true){
//    return ["upper legs", "torso", "lower legs"]
//  }else if(arr.includes('sky')==true){
//    return ["sky", "rainbow", "ground"]
//  }
// }	
	//figured it out, it's actually:
function fixTheMeerkat(arr) {
 return [arr[2],arr[1],arr[0]]
}
	//they just wanted the array to be returned in a certain order, the wording is so bad here



// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
  let ans = []
  let haveNums = '123456789'
  let p1 = words.split(' ')
  for(let i = 0; i<p1.lengthx; i++){
    ans.push('')
  }
  p1.forEach((x)=>{
    let test = x.split('')
    test.forEach((b)=>{
      if(haveNums.includes(b)==true){
        ans[b] = x
      }
    })
  })
  ans.shift()
  return ans.join(' ')
}



// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

// The string will always start with a letter and will never be empty.

// Examples:

// "hello" --> "Hello"
// "Hello" --> "Hello" (the first letter was already capitalized)
// "a"     --> "A"

function capitalizeWord(word) {
  return word[0].toUpperCase()+word.slice(1);
}	



// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!	

function createArray(number) {
    const newArray = [];
	//fixed conditionals for loop
    for (let counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }
    return newArray;
}



// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
  let ans = birds.filter((x)=>geese.includes(x)!=true)
  return ans
}	
	

	
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  let p1 = [arr[0]]
  let p2 = []
  arr.forEach((x)=>{
    if(p1.includes(x)!=true){
      p2.push(x)
    }else if(p1.includes(x)==true){
      p1.push(x)
    }
  })
  return p1.length > p2.length ? p2[0] : p1[0]
}



// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

function greet(name){
  return name === 'Johnny' ? 'Hello, my love!' : `Hello, ${name}!`
}	



// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£"	

function bonusTime(salary, bonus) {
  return bonus == true ? `£${salary * 10}` : `£${salary}`
}	
	
	
	
// Everybody know that you passed to much time awake during night time...

// Your task here is to define how much coffee you need to stay awake after your night. You will have to complete a function that take an array of events in arguments, 
// according to this list you will return the number of coffee you need to stay awake during day time. Note: If the count exceed 3 please return 'You need extra sleep'.

// The list of events can contain the following:

//     You come here, to solve some kata ('cw').

//     You have a dog or a cat that just decide to wake up too early ('dog' | 'cat').

//     You just watch a movie ('movie').

//     Other events can be present and it will be represent by arbitrary string, just ignore this one.

// Each event can be downcase/lowercase, or uppercase. If it is downcase/lowercase you need 1 coffee by events and if it is uppercase you need 2 coffees.

function howMuchCoffee(events) {
  let ok = ['cw','CW','Cw','cat','dog','CAT','DOG','Cat','Dog','movie','MOVIE','Movie']
  let safe = events.filter((x)=>ok.includes(x)==true)
  let count = 0
    safe.forEach((x)=>{
      if(x[0] === x[0].toUpperCase()){
        count += 2
      }else{
        count += 1
      }
    })
    return count < 4 ? count : 'You need extra sleep'
}	



// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

function monkeyCount(n) {
 let ans = []
 for(let i = 1; i <= n; i++){
   ans.push(i)
 }
  return ans
}	

	
