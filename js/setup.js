//Please select the die, the number in the die,
// player1 and player2, and all titles in an array 
//or Nodelist.

const die = document.querySelector(`#die`);
const roll = document.querySelector(`#roll`);
const tiles = document.querySelectorAll(`.tile`);
const player1 = document.querySelector(`#player1`);
const player2 = document.querySelector(`#player2`);
const circle = document.querySelector(`#winner-circle`)

// game state

let player1position = 0
let player2position = 0
let turn = player1
