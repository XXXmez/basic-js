const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  domains.forEach((e) => {
    console.log(e.split('.'));
    let str = '';
    for (let i = e.split('.').length-1; i >= 0; i--) {
      res[e.split('.')[i]] = 1
    }
  })

  console.log(res);
}


getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']) // =>{'.ru': 3, '.ru.yandex': 3, '.ru.yandex.code': 1,'.ru.yandex.music': 1}

module.exports = {
  getDNSStats
};
