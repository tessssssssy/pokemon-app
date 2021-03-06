const fetch = require('node-fetch');
const readline = require('readline-sync');
const _=require('lodash')

const quiz = (cb) => {

const getPokemon = async () => {
    try {
      let randomNumber =  Math.ceil(Math.random() * Math.floor(151))
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


let pokemons=[]
const guessPokemon = (array) => {
    
    let chosenPokemon = array[Math.floor(Math.random() * 4)]
    console.log(chosenPokemon.name)
    array.forEach(pokemon => {
      pokemons.push(_.capitalize(pokemon.name))
    })
    let correct_answer = pokemons.indexOf(_.capitalize(chosenPokemon.name))
    console.log(`Id: ${chosenPokemon.id}`);
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
                console.log(`Wrong, Game Over! The correct answer is ${_.capitalize(chosenPokemon.name)}`)
              }
          }
      }
}
}
quiz()
module.exports = { quiz }
// if (!response.ok) throw new Error('Thats not a Pokemon!');

