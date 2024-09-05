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



