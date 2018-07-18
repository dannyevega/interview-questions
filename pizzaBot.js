const pizzaBot = (input) => {
  // remove all spaces, special characters and non-numerical characters
  input = input.replace(/[^\w\s]/gi, '').replace(/ /g, '').replace(/\D+/g, '');

  let pizzaCoords = getCoordinates(input);

  // grid for pizzaBot
  let grid = pizzaCoords[0]; // first array is size of grid
  let rows = grid[0], cols = grid[1];
  const pizzaGrid = new Array(rows).fill(0).map(row => new Array(cols).fill(0));

  return pizzaGrid;
}

const getCoordinates = (stringInput) => {
  // array to hold our grid size and coordinates
  let pizzaCoords = [];

  // get grid and pizza coordinates
  for(let i = 0; i < stringInput.length; i += 2){
      let first = parseInt(stringInput[i]);
      let second = parseInt(stringInput[i + 1]);
      pizzaCoords.push([first, second]);
  }

  return pizzaCoords;
}
