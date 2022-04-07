const repeatNumbers = function(data) {
  let array = [];
  data.forEach(element => {
    for (let i = 0; i < element[1]; i++) {
      array.push(element[0]);
    } 
    array.push(", ");
  });

  return array.toString().replace(/,/g, '').replace(/ /g, ', ');
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));