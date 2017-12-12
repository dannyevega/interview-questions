// Write a function that will parse through the string and return the evaluation of the expression
var expression = "6+9-12"; // 3
var expression2 = "6+12+7/5*3"; // 15

function evaluateExpression(exp){
	var regex = /\d+/g;
	var numbers = exp.match(regex);
	var newNums = [];
	var operands = exp.match(/[*/+-]/g);
	for(var i = 0; i < numbers.length; i++){
		newNums.push(parseInt(numbers[i]));
	}
	var current = newNums[0];
	for(var i = 0; i < operands.length; i++){
		if(operands[i] === "+"){
			current += newNums[i + 1];
		} else if(operands[i] === "-") {
			current -= newNums[i + 1];
		} else if(operands[i] === "*"){
			current *= newNums[i + 1];
		} else {
			current /= newNums[i + 1];
		}
	}
	return current;
}
