const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // let res = {};
  // let result = '';
  // let arrStr = str.split('')
  // arrStr.forEach((e) => {
  //   let x = 0;
  //   for (let i = 0; i < arrStr.length; i++) {
  //     if (e == arrStr[i]) {
  //       x++
  //       res[e] = x
  //     } 
  //   }
  // })
  
  // Object.values(res).forEach((e,i) => {
  //   if (Object.values(res)[i] > 1) {
  //     result += Object.values(res)[i]+Object.keys(res)[i]
  //   } else {
  //     result += Object.keys(res)[i]
  //   }
  // })

  // console.log(result);
  // return result

  let res = ''
  let val = 1;
  let arrStr = str.split('');
  arrStr.forEach((e, i) => {
    if (e == arrStr[i+1]) {
      val++
    } else {
      if (val > 1) {
        res += val+e;
        val = 1
      }else{
        res += e
        val = 1
      }
    }
  })

  return res

}

// encodeLine('aabbbc')  // =>'2a3bc'
// encodeLine('aaaatttt') // '4a4t');
// encodeLine('aabbccc') // '2a2b3c');
// encodeLine('abbcca') // 'a2b2ca');
// encodeLine('xyz') // 'xyz');
// encodeLine('') // '');

module.exports = {
  encodeLine
};
