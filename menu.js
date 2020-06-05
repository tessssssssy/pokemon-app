const fetch = require('node-fetch');
const readline = require('readline-sync');
const _= require('lodash')
const app = require('./index.js')

const menu = (cb) => {
// Get User Name
const pokemonMaster = readline.question('What is your Name?');

// Get User Selection
const getMenuOption = () => readline.questionInt('> ');

// Menu 
const displayMenu = (pokemonMaster) => {
  console.log(` Hi,  ${pokemonMaster}! Are you ready to embark on your pokemon journey?`);
  console.log('Please select from the below options')
  console.log('1. Play Who\'s that pokemon?')
  console.log('2. Quit')
}

// const pokemonApp = async (quiz) => {
//   const pokemonData = await quiz;

//   let running = true;

//   if (pokemonData == null) {
//     running = false;
//   }
  // let running = true;

  // while (running) {
    displayMenu(pokemonMaster);
    const choice = getMenuOption();
  if(choice===1){
    cb
  }
  else {
    console.log('Your journey has come to an end, unfortunately.')
    process.exit()
  }
  //   switch (choice) {
  //     case 1:
  //       console.log('hi')
  //       cb;
  //       break;
  //     case 2:
  //       running = false;
  //       console.log('Goodbye!');
  //       break;
  //     default:
  //       console.log('Invalid Option');
  //   }
  // }
}


menu(app.quiz)

