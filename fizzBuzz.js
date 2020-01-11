/**
 * Given an array of integers, returns an array of strings where
 * number is replaced by 'Fizz' if divisible by or contains a 3,
 * 'Buzz' if divisible by or contains a 5, 'FizzBuzz' if divisible by both 3 and 5
 * or the same number to string if non of the above match.
 *
 * @param {Number[]} intArr Integer array.
 * @returns String[] A new array of strings.
 */

/*
    Se asume que:
    - El orden a respetar es chequear primero el 3 y luego el 5
    para el caso que un numero sea divisible por 3 pero contenga un 5.
    - Se devuelve el mismo numero en string si no es divisible ni contiene los digitos 3 o 5.
*/

const fizzBuzz = intArr => {
  const strArr = [];

  intArr.forEach(int => {
    if (int % 3 === 0 && int % 5 === 0) {
      strArr.push("FizzBuzz");
    } else if (int % 3 === 0 || /3/.test(int.toString())) {
      strArr.push("Fizz");
    } else if (int % 5 === 0 || /5/.test(int.toString())) {
      strArr.push("Buzz");
    } else {
      strArr.push(int.toString());
    }
  });

  return strArr;
};

module.exports = fizzBuzz;
