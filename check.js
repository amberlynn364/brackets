
  
// //   massive = [];
// //   let test = '()';
// //   console.log(str)
// //   console.log(str.replaceAll(brackets[0], ''));


// function replaceBracket (str, config) {
//     const brackets = config.map(item => item.join(''));
    
//     for (let i = 0; i < str.length; i++) {
//         if (str.includes(brackets[i])) {
//             str.replaceAll(brackets[i], '')
//             i -= 1;
//             if ((str[0] + str[1]) !== brackets[i]) break;
//         }
//     }
//     if (str.length == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let config = [['(', ')'], ['[', ']']];
// const testBracket = config.map(item => item.join(''));
// let str = '([(])()(()()(((())))()())()()()[]';
// let str1 = '()'
//     console.log(str);
//     console.log (str.replaceAll((testBracket[0]), ''));
    // console.log(replaceBracket('str1', config))
    // console.log(testBracket[0 + 1])
    // console.log(str1.replace(testBracket[0], '').length == 0);
    let str = ''
   console.log(!str.length)
   return !str.length;


   


// for (let i = 0; i < brackets.length; i++) {
//   if (str.includes(brackets[i])) {
//     str.replaceAll(brackets[i], '')
//     if (str.includes(brackets[i])) {
//       i -= 1; continue;
//     } if (!str.includes(brackets[i])) break;
//   }
//   if (((str[0] + str[1]) !== brackets[i]) || str.length == 0) break;
// }

// return (str.length == 0 ? true : false);
//   // console.log(kekis('()', brackets))
  
  // massive = [];
  // let config = [['(', ')'], ['[', ']']];
  
  // let str = '([(])()()()()()[]';
  // let test = '()';
  // console.log(str)
  // console.log(str.replaceAll(brackets[0], ''));
  // console.log(str.replace(brackets[1], ''));
  
  
  //   let brackets = str.split('');
  //   let arr = [];
  
  //   for (let i = 0; i < brackets.length; i++)
  //     if (brackets[i] == arr[arr.length - 1]){
    //       arr.pop();
    //     } else {
      //       arr.push(str[i])
  //     }
    
  // }
   
   
    // for (i; i < str.length; i++) {
    //   if (str[i] == '(') {
    //     a = a + 1;
    //   } else if (str[i] == ')') {
    //     a = a - 1;
    //       if (a < 0) {
    //         return false;
    //       }
    //     }
    //   }
    // for (i; i < str.length; i++) {
    //   if (str[i] == '[') {
    //     b = b + 1;
    //   } else if (str[i] == ']') {
    //     b = b - 1;
    //       if (b < 0) {
    //         return false;
    //     }
    //   }
    // }
  
    // for (i; i < str.length; i++) {
    //   if (str[i] == '|') {
    //     c = c + 1;
    //   } else if (str[i] == '|') {
    //     c = c - 1;
    //       if (c < 0) {
    //       return false;
    //     }
    //   }
    // }
  
    // if (a == 0 && b == 0 && c == 0) {
    //   return true;
    // } else {
    //   return false;
    // }