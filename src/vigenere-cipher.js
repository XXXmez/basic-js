const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(mes, key) {
    if (!mes || !key || typeof mes !== 'string' || typeof key !== 'string') throw new Error ("Incorrect arguments!");
    let m = mes.toUpperCase(),
        k = key.toUpperCase(),
        res = '';
    
    for(;m.length > k.length;) k+=k

  }

  decrypt(mes, key) {
    if (!mes || !key || typeof mes !== 'string' || typeof key !== 'string') throw new Error ("Incorrect arguments!");
    
  }
}

// const directMachine = new VigenereCipheringMachine();
// directMachine.encrypt('attack at dawn!', 'alphonse') // => 'AEIHQX SX DLLU!'




module.exports = {
  VigenereCipheringMachine
};
