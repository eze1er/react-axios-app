const makeCase = function(input, cases) {
  // Put your solution here
 
  if (typeof cases !== 'object') {

  let string = '';
     let w = 0;

    var array1 = input.split(' ');
    let newarray1 = [];

    if (cases == 'camel') {
      for(let x = 0; x < array1.length; x++){
        if (x === 0) {
         newarray1.push(array1[x].charAt(0)+array1[x].slice(1));
        } 
        else { 
        newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
        }
      }
      string = newarray1.join('');
    } 
    else
    if (cases == 'pascal') {
      for(let x = 0; x < array1.length; x++){
       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
      }
      string = newarray1.join('');
    } 
    else 
    if (cases === 'snake') {
      let result2 = input.replace(/ /g,"_");
      string = result2;
    } 
    else
    if (cases === 'kebab') {
      let result2 = input.replace(/ /g,"-");
      string = result2;
    }
    else if (cases === 'title') {
       array1 = input.split(' ');

      Object.keys(array1).forEach((cases)=>{

       if (cases === '0') {
        let cases1 = array1[0].charAt(0).toUpperCase() + array1[0].slice(1);
            array1[0] = cases1;
       } 
       let n = array1.length - 1;
       let y = n.toString();

       if (cases === y) {
        let cases1 = array1[y].charAt(0).toUpperCase() + array1[y].slice(1);
            array1[y] = cases1;

       }
       else 
       if ((array1[cases] === 'the') || (array1[cases] === 'a' ) || (array1[cases] === 'an')) {
         let cases2 = array1[cases].toLowerCase() + array1[cases].slice(1);
             array1[cases] = cases2;
       }
       else {
       let cases1 = array1[cases].charAt(0).toUpperCase() + array1[cases].slice(1);
       array1[cases] = cases1;
   
       }
       newarray1 = array1.join(' ');
       let newarray2 = newarray1.toString();
       let result = newarray2.replace(/,/g, '');
          string = result;
      })
    } else
    if (cases === 'vowel') {
      Object.keys(input).forEach((cases)=>{
        if ((input[cases] === 'a') || (input[cases] === 'e') || (input[cases] === 'i')  || (input[cases] === 'o') || (input[cases] === 'u')) 
        {
          newarray1.push(input[cases].charAt(0).toUpperCase()+input[cases].slice(1));
        }
        else if (input[cases] !== ' ') {
          newarray1.push(input[cases].charAt(0).toLowerCase()+input[cases].slice(1)); 
        } 
        else {
          newarray1.push(input[cases].charAt(0)+input[cases].slice(1));
        }
      });
      
      newarray1 = newarray1.join(':');
      let newarray2 = newarray1.toString();
      let result = newarray2.replace(/:/g, '');
         string = result;
    }
    else
    if (cases === 'consonant') {
      Object.keys(input).forEach((cases)=>{
        if ((input[cases] === 'a') || (input[cases] === 'e') || (input[cases] === 'i')  || (input[cases] === 'o') || (input[cases] === 'u')) 
        {
        newarray1.push(input[cases].charAt(0).toLowerCase()+input[cases].slice(1));
        }
        else if (input[cases] !== ' ') {
          newarray1.push(input[cases].charAt(0).toUpperCase()+input[cases].slice(1)); 
        } 
        else {
        newarray1.push(input[cases].charAt(0)+input[cases].slice(1));
        }
      });
      newarray1 = newarray1.join(':');
      let newarray2 = newarray1.toString();
      let result = newarray2.replace(/:/g, '');
         string = result;
    } else
    if (cases === 'upper') {
      let result = input.toString();
      let result1 = result.toUpperCase();
        string = result1;
    }
       // replace work only with a string array.
   return string
  }
    // from here we separated the function in two. object and string.
    // string up and object lower.

  else { 
 
    let string = '';
    let string1 = '';
    let z = 1;

 
     for (let w = 0; w < cases.length; w++) { 
        if (w > 0) {
          input = string1;
          array1 + string1;

        }

      let newarray1 = [];

      if (cases[w] == 'camel') {
        for(let x = 0; x < array1.length; x++){
          if (x === 0) {
             newarray1.push(array1[x].charAt(0)+array1[x].slice(1));
          } 
         else { 
         newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
         }
        }
        if (w > 0) {
        string1 = newarray1.join('');
        } else {
        string = newarray1.join('');
        string1 = string;
        }

      } 
      else
      if (cases[w] == 'pascal') {
       for(let x = 0; x < array1.length; x++){
       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
      }
      if (w > 0) {
        string1 = newarray1.join('');
      } else {
        string = newarray1.join('');
        string1 = string;
      }

      } 
     else 
  
     if (cases[w] === 'snake') {
       let result2 = input.replace(/ /g,"_");
       if (w > 0) {
        string1 = result2;
      
      } else {
        string = result2;
        string1 = string;
    
      }

     } 
     else
     if (cases[w] === 'kebab') {
      let result2 = input.replace(/ /g,"-");
      string = result2;
      string1 = string;
     }
     else if (cases[w] === 'title') {
      array1 = input.split(' ');

      Object.keys(array1).forEach((cases)=>{

       if (cases === '0') {
        let cases1 = array1[0].charAt(0).toUpperCase() + array1[0].slice(1);
          array1[0] = cases1;
       } 
       let n = array1.length - 1;
       let y = n.toString();

       if (cases === y) {
       let cases1 = array1[y].charAt(0).toUpperCase() + array1[y].slice(1);
           array1[y] = cases1;

       }
       else 
       if ((array1[cases] === 'the') || (array1[cases] === 'a' ) || (array1[cases] === 'an')) {
         let cases2 = array1[cases].toLowerCase() + array1[cases].slice(1);
            array1[cases] = cases2;
       }
       else {
       let cases1 = array1[cases].charAt(0).toUpperCase() + array1[cases].slice(1);
       array1[cases] = cases1;
 
       }
       newarray1 = array1.join(' ');
       let newarray2 = newarray1.toString();
       let result = newarray2.replace(/,/g, '');
      if (w > 0) {
       string1 = result;
      } else {
        string = result;
        string1 = string;
      }
    
      })
     } else
     if (cases[w] === 'vowel') {
      Object.keys(input).forEach((cases)=>{
        if ((input[cases] === 'a') || (input[cases] === 'e') || (input[cases] === 'i')  || (input[cases] === 'o') || (input[cases] === 'u')) 
        {
          newarray1.push(input[cases].charAt(0).toUpperCase()+input[cases].slice(1));
        }
        else if (input[cases] !== ' ') {
          newarray1.push(input[cases].charAt(0).toLowerCase()+input[cases].slice(1)); 
        } 
        else {
          newarray1.push(input[cases].charAt(0)+input[cases].slice(1));
        }
      });
    
      newarray1 = newarray1.join(':');
      let newarray2 = newarray1.toString();
      let result = newarray2.replace(/:/g, '');
      if (w > 0) {
        string1 = result;
      } else {
       string = result;
       string1 = string;
      }
     }
    else
    if (cases[w] === 'consonant') {
      Object.keys(input).forEach((cases)=>{
        if ((input[cases] === 'a') || (input[cases] === 'e') || (input[cases] === 'i')  || (input[cases] === 'o') || (input[cases] === 'u')) 
        {
        newarray1.push(input[cases].charAt(0).toLowerCase()+input[cases].slice(1));
        }
        else if (input[cases] !== ' ') {
        newarray1.push(input[cases].charAt(0).toUpperCase()+input[cases].slice(1)); 
        } 
        else {
        newarray1.push(input[cases].charAt(0)+input[cases].slice(1));
        }
      });
      newarray1 = newarray1.join(':');
      let newarray2 = newarray1.toString();
      let result = newarray2.replace(/:/g, '');
      if (w > 0) {
          string1 = result;
       } else {
       string = result;
       string1 = string;
       }
  
    } else
    if (cases[w] === 'upper') {
      let result = input.toString();
      let result1 = result.toUpperCase();
       if (w > 0) {
         string1 = result1;
       } else {
       string = result1;
       string1 = string;
       }
    }
    }     // replace work only with a string array.
    for (let w = 0; w < cases.length; w++) 
    if ((z > 0) && (w >= cases.length -1)) {
       return string1;
     } 
       
  } 

};


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant")); 
console.log(makeCase("this is a string", ["upper", "snake"]));

