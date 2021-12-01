function countIncrease(filepath) {
  let inc = 0;
  require('fs').readFileSync(filepath, 'utf8').split('\n').map(a => parseInt(a)).reduce((c, d, e , f) => (f[e + 1] && f[e] < f[e + 1]) ? inc++ : 0);
  return inc;
}

function countIncreaseWindow(filepath) {
    let inc = 0;
    require('fs').readFileSync(filepath, 'utf8').split('\n').map(a => parseInt(a)).reduce((c, d, e , f) => (f[e + 3] && (f[e] + f[e + 1] + f[e + 2]) < (f[e + 1] + f[e +  2] + f[e + 3])) ? inc++ : 0)
    return inc;
}

console.log(countIncrease('inputs.txt'));
console.log(countIncreaseWindow('inputs.txt'));