// Help Technical Interview. Full Stack Engineer Role.

// 60 minute timed challenge on HackerRank

// Given a string input of a company id and rating, sort them by rating in descending order.

let input = "1005 2\n1001 5\n1002 5\n1004 1"

const sortByRating = (input) => {
  input = input.split("\n");

  let ids = input.map(current => {
    current = current.split(" ");
    return [parseInt(current[0]), parseInt(current[1])];
  });

  ids.sort((a, b) => {
    return b[1] - a[1];
  });

  return ids;
}


// console.log(sortByRating(input));



// A user is going through Help's page and wants to check if a restaurant has a reservation open

// Build a function that efficiently takes a user's input, and checks against available time slots
// time slots are in 30 minute increments

// *Note: Array is sorted
// 10am === 10
// 1pm === 13
// 1:30pm === 13.5


//example

// input: String, Array
// '10:30pm', [9, 9.5, 12, 13, 15, 16, 17, 18.5, 19, 19.5]

// output: Boolean
// True

// 1. Get input string and check if pm or am
// 2. Check length of input -- slice new strings depedning on length i.e. 9am or 10pm are gonna be different lengths
// 3. If am, convert string to number
// 4. If pm, get military time and parse to number i.e. 4pm --> 16
// 5. Check if converted number is found in Array
// 6. Return true or false;

const checkAvailability = (time, availability) => {
  let timeOfDay = time.slice(-2), request, hourTime;
  (time.length === 7) ? request = time.slice(0, 5) : request = time.slice(0, 4);
  request = request.split(":");
  let hour = parseInt(request[0]);
  let min = parseInt(request[1]);
  (timeOfDay === 'pm') ? hourTime = 12 + hour : hourTime = hour;
  if(min === 30){
    hourTime += .5;
  }
  return (availability.indexOf(hourTime) !== -1);
}
// console.log(checkAvailability('8:00pm', [9, 9.5, 12, 13, 15, 16, 17, 18.5, 19, 19.5]));



// Write a function to remove duplicates

// let arr = [1,2,1,3,4,2,5,6,7,3] should return [ 1, 2, 3, 4, 5, 6, 7 ]

const removeDuplicates = (arr) => {
  let map = {};
  arr.forEach(num => {
    map[num] = num;
  });
  let uniq = Object.keys(map).map(current => {
    return map[current];
  });
  return uniq;
}

// const removeDuplicates = (arr) => {
//   let result = [];
//   arr.forEach(current => {
//     if(result.indexOf(current) === -1){
//       result.push(current);
//     }
//   });
//   return result;
// }

// const removeDuplicates = (arr) => {
//   return arr.filter((el, idx, ref) => {
//     return ref.indexOf(el) === idx;
//   });
// }

// console.log(removeDuplicates(arr));



// Write a function to check if two strings are anagrams

// Definition: a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

let one = 'iceman', two = 'cinema';

const angagram = (s1, s2) => {
  for(let i = 0; i < s1.length; i++){
    let char = s1[i];
    if(s2.indexOf(char) === -1){
      return false;
    }    
  }
  return true;
}

// const angagram = (s1, s2) => {
//   let map = {};
//   for(let i = 0; i < s1.length; i++){
//     let char = s1[i];
//     if(map[char] === undefined){
//       map[char] = 0;
//     }
//     map[char]++;
//   }
//   for(let j = 0; j < s2.length; j++){
//     let char = s2[j];
//     if(map[char] === undefined){
//       return false;
//     }
//   }
//   return true;
// }

// console.log(angagram(one, two));



let input = '2+10*3+6*10+1'
// output = 93

const evaluateString = (input) => {
  let numStrings = input.split(/[^\w\s]/gi);
  let operands = input.match(/[*/+-]/g);
  let numbers = numStrings.map(num => {
    return parseInt(num);
  });
  let toRemove = [];
  for(let i = 0; i < operands.length; i++){
    let current = operands[i];
    if(current === '*'){
      numbers[i] = (numbers[i] * numbers[i + 1]);
      toRemove.push(numbers[i + 1]);
    }
  }
  for(let i = 0; i < toRemove.length; i++){
    let current = toRemove[i];
    numbers.splice(numbers.indexOf(current), 1);
  }
  for(let i = 0; i < operands.length; i++){
    let current = operands[i];
    if(current === '*'){
      operands.splice(operands.indexOf(current), 1);
    }
  }
  let total = numbers[0];
  for(let i = 0; i < operands.length; i++){
    let current = operands[i];
    switch(current){
      case '+':
        total += numbers[i + 1];
        break;
      case '-':
        total -= numbers[i + 1];
        break;      
    }
  }
}
