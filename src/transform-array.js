const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  // const arrayNew = [...arr];

  // for(let i = 0; i < arr.length; i++) {
  //   if (arrayNew[i] == '--discard-next'){ // исключает следующий элемент
  //     if (i === arr.length - 1) arrayNew.splice(i, 1);
  //     else if (arrayNew[i + 2] === '--double-prev' || '--discard-prev') {
  //       arrayNew.splice(i, 3);
  //     }
  //     else {
  //       arrayNew.splice(i, 2);
  //     }
  //   }
  //   if (arrayNew[i] == '--discard-prev'){ // исключает предыдущий элемент
  //     if (i === 0) {
  //       arrayNew.splice(i, 1);
  //     }
  //     else {
  //       arrayNew.splice(i - 1, 2);
  //     }
  //   }
  //   if (arrayNew[i] == '--double-next'){ // дублирует следующий элемент
  //     if (i === arr.length - 1) {
  //       arrayNew.splice(i, 1);
  //     }
  //     else if (arrayNew[i + 2] === '--double-prev') {
  //       arrayNew.splice(i, 3, arrayNew[i + 1], arrayNew[i + 1], arrayNew[i + 1]);
  //     }
  //     else if (arrayNew[i + 2] === '--discard-prev') {
  //       arrayNew.splice(i, 3, arrayNew[i + 1]);
  //     }
  //     else {
  //       arrayNew.splice(i, 1, arrayNew[i + 1]);
  //     }
  //   }
  //   if (arrayNew[i] == '--double-prev'){ // дублирует предыдущий элемент
  //     if (i === 0) {
  //       arrayNew.splice(i, 1);
  //     }
  //     else {
  //       arrayNew.splice(i, 1, arrayNew[i - 1]);
  //     }
  //   }
    
  // }
  
  // return arrayNew
  
        // '--discard-next'
        // '--discard-prev'
        // '--double-next'
        // '--double-prev'
}
//transform([1, 2, 3, '--double-next', 4, 5])   //  => [1, 2, 3, 4, 4, 5]
// transform([1, 2, 3, "--discard-next", 4, 5])   //  => 
// transform([ 1, 2, 3, '--double-prev', 4, 5 ])   //  => 

module.exports = {
  transform
};