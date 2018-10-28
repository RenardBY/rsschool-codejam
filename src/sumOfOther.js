function sumOfOther(currentArray) {
  const result = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  currentArray.forEach( (element, index, array) => result[index] = array.filter( (e,i) => i !==index ).reduce(reducer));
  return result;
}

module.exports = sumOfOther;