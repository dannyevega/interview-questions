var arr = [
    ["Apple", "Banana", "Cream", "Date", "Eldeberry", "Fig", "LeftWins"],
    ["Hazelnut", "Cheese", "Sugar", "Cherry", "Cinnamon", "Cream", "LeftWins"],
    ["Custard", "Lemon", "Coconut", "Strawberry", "Blueberry", "Raspberry", "RightWins"],
    ["Cheese", "Hazelnut", "Sugar", "Banana", "Apple", "Cream", "RightWins"],
    ["Apple", "Banana", "Cream", "Lemon", "Custard", "Coconut", "RightWins"],
    ["Apple", "Banana", "Cream", "Cheese", "Sugar", "Hazelnut", "RightWins"],
    ["Apple", "Banana", "Cream", "Strawberry", "Raspberry", "Blueberry", "RightWins"],
    ["Cream", "Banana", "Apple", "Date", "Eldeberry", "Fig", "LeftWins"],
    ["Sugar", "Hazelnut", "Cheese", "Date", "Eldeberry", "Fig", "LeftWins"],
    ["Cream", "Apple", "Banana", "Date", "Eldeberry", "Fig", "LeftWins"],
    ["Apple", "Banana", "Cream", "Sugar", "Cheese", "Hazelnut", "RightWins"],
    ["Apple", "Banana", "Cream", "Date", "Eldeberry", "Fig", "RightWins"],
    ["Coconut", "Hazelnut", "Sugar", "Date", "Eldeberry", "Fig", "LeftWins"],
    ["Fig", "Eldeberry", "Date", "Banana", "Cream", "Apple", "RightWins"],
    ["Blueberry", "Strawberry", "Raspberry", "Date", "Eldeberry", "Fig", "LeftWins"],
    ["Sugar", "Banana", "Blueberry", "Date", "Eldeberry", "Fig", "RightWins"],
    ["Apple", "Banana", "Cream", "Hazelnut", "Coconut", "Raspberry", "RightWins"],
    ["Eldeberry", "Strawberry", "Cream", "Date", "Eldeberry", "Fig", "LeftWins"],
    ["Cheese", "Banana", "Apple", "Date", "Eldeberry", "Fig", "LeftWins"]
];

// you have an multi-dimensional array with recipes
// every 3 indices within the subarray is a recipe --> leftRecipe = "Apple", "Banana", "Cream" -- rightRecipe = "Date", "Eldeberry", "Fig"
// the last index in each subarray tells you who won the competition
// some recipes may be using the same ingredients but in different order -- these are considered the same recipe, regardless of what order theyre in --> i.e. "Apple", "Banana", "Cream" is the same as "Banana", "Cream", "Apple"
// the last index in each subarray tells you who won so you can keep track
// return the top 3 winners in the list

function returnTopThree(arr){
    var map = {}, orderedArr = [], result = [];
    for(var i = 0; i < arr.length; i++){
        var current = arr[i];
        var leftRecipe = current.slice(0, 3).sort().join("");
        var rightRecipe = current.slice(3, 6).sort().join("");
        if(map[leftRecipe] === undefined){
            map[leftRecipe] = 0;
        }
        if(map[rightRecipe] === undefined){
            map[rightRecipe] = 0;
        }
        if(current[current.length - 1] === "LeftWins"){
            map[leftRecipe] += 1;
        }
        if(current[current.length - 1] === "RightWins"){
            map[rightRecipe] += 1;
        }
    }
    for(var key in map){
        orderedArr.push([key, map[key]])
    }
    orderedArr.sort(function(a, b){
        return b[1] - a[1];
    });
    for(var j = 0; j < orderedArr.length && j < 3; j++){
        result.push(orderedArr[j]);
    }
    return result;
}