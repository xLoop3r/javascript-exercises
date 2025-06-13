function numberChecker(number) {
  if (number >= 10) {
    return true;
  } else {
    return false;
  }
}

console.log(numberChecker(1000));
console.log(numberChecker(10));
console.log(numberChecker(9));
console.log(numberChecker(6));



// Do not edit below this line
module.exports = numberChecker;
