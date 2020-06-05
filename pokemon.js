const fetch = require('node-fetch');
const readline = require('readline-sync');
const _=require('lodash')
// const inquirer = require('inquirer');
// .then syntax

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// const getMenuOption = () => readline.questionInt('> ');
//   const displayMenu = () => {
//     console.log('1. Pikachu');
//     console.log('2. Languages');
//     console.log('3. Quit');
//   };

// const userInput = getMenuOption()
// async/await syntax
// const userInput = readline.question('Name a pokemon').toLowerCase();

const randomNumber =  Math.ceil(Math.random() * Math.floor(151))
// console.log(randomNumber)

const getPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)     
      const data = await response.json()
      return data
    } catch(err) {
      console.log(err)
    }
  }

const pokemonArray = [];

while (pokemonArray.length < 4) {
pokemonArray.push(getPokemon())

}

Promise.all(pokemonArray).then((response) => guessPokemon(response))


// while(something){
//     promises.push(new Promise((r, j) => {
//         getPokemon() => r());
//     });
// }
// //Then this returns a promise that will resolve when ALL are so.
// Promise.all(promises).then(() => {
//     //All operations done
// });

// console.log(pokemonArray);
let pokemons = [];

const guessPokemon = (array) => {
    
    let chosenPokemon = array[Math.floor(Math.random() * 4)]
    console.log(chosenPokemon.name)
    // console.log(`Pokedex id: ${chosenPokemon.id}`);
    array.forEach(pokemon => {
      pokemons.push(_.capitalize(pokemon.name))
    })
    console.log(pokemons)
    let correct_answer = pokemons.indexOf(_.capitalize(chosenPokemon.name))
    console.log(correct_answer)
      let answer = readline.keyInSelect(pokemons, "Who's that Pokemon?");
      if (answer === correct_answer) {
          console.log("Correct!")
      } else {
          console.log(`Type: ${chosenPokemon.types[0].type.name}`);
          answer = readline.keyInSelect(pokemons, "Who's that Pokemon?");
      if (answer === correct_answer) {
          console.log("Correct!")
          } else {
              console.log("Wrong, guess again")
              console.log(`Move: ${chosenPokemon.moves[0].move.name}`);
              let answer = readline.keyInSelect(pokemons, "Who's that Pokemon?");
              if (answer === correct_answer) {
          console.log("Correct!")
              } else {
                console.log(`Wrong, Game Over! The correct answer is ${chosenPokemon.name}`)
              }
          }
      }
}

