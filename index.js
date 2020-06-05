const fetch = require('node-fetch');
const readline = require('readline-sync');
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
console.log(randomNumber)

const getPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)     
      const data = await response.json();
      return data
    } catch(err) {
      console.log(err)
    }
  }

const pokemonArray = [];

let pickPokemon = (array) => {
  array.forEach(pokemon => {
    pokemonArray.push(pokemon.name)
  })
  console.log(pokemonArray)
}

while (pokemonArray.length < 4) {
pokemonArray.push(getPokemon())

}

// Promise.all(pokemonArray).then((response) => console.log(response))

Promise.all(pokemonArray)
  .then((value)=> {
    pickPokemon(value)
  })
    .catch(err => {
    console.log(err)
  })

// console.log(pokemonArray);

// while(something){
//     promises.push(new Promise((r, j) => {
//         getPokemon() => r());
//     });
// }
// //Then this returns a promise that will resolve when ALL are so.
// Promise.all(promises).then(() => {
//     //All operations done
// });



const chosenPokemon = pokemonArray[Math.floor(Math.random() * 4)]

// const guessPokemon = async () => {
//     console.log(`Pokedex id: ${data.id}`);
//       const userInput = readline.question("Who's that Pokemon").toLowerCase();
//       if (userInput.toLowerCase === data.name.toLowerCase()) {
//           console.log("Correct!")
//       } else {
//           console.log(`Type: ${data.types}`);
//           const secondGuess = readline.question("Who's that Pokemon?").toLowerCase();
//           if (secondGuess.toLowerCase === data.name.toLowerCase()) {
//               console.log("Correct!")
//           } else {
//               console.log("Wrong, Game Over")
//           }
//       }
// }

// if (!response.ok) throw new Error('Thats not a Pokemon!');

