
function camelCase(input)
{
  const array1 = input.split(' ');
  const newarray1 = [];
    
  for(let x = 0; x < array1.length; x++){
    if (x === 0) {
      newarray1.push(array1[x].charAt(0)+array1[x].slice(1));
    } 
    else { 
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
  
  }
  return newarray1.join('');
}
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));