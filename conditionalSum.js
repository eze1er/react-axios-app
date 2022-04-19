const conditionalSum = function(values, condition) {
  // Your code here
  let number = 0;
  values.forEach(element => {
    if (element % 2 === 0 && condition === "even") {
        number = number + element;
    } 
    if (element % 2 !== 0 && condition === "odd") {
      number = number + element;
  } 
  });
  return number;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([23], "odd"));