// Asked various questions about diversity, common JS questions, how I like to work, projects I've worked on etc...

// Write a function that removes duplicates from a string.

const removeDuplicates = () => {
  let map = {}, result = '';
  for(let i = 0; i < str.length; i++){
    let current = str[i];
    if(current === ' '){
      result += current;
      continue;
    }
    if(map[current] === undefined){
      result += current;
    }
    map[current] = true;
  }
  return result;
}

console.log(removeDuplicates('Coding JavaScript!!!')) // returns 'Coding JavScrpt!'