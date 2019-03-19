module.exports = function(formatedDate) {
  /* general data storage */
  var stack = [];

  return function() {
    /* service functions */
    function eatStack(stack, acc) {
      if(!stack.length) {
        return acc;
      }
      acc[stack.pop()]++;

      return eatStack(stack, acc);
    };

    function numberRegistry(number) {
      number = number.toString();
      if (number < 10) {
        stack.push('0');
        stack.push(number);
        return "0" + number;
      }
      if (number >= 10) {
        number.split('').map(function(x) { stack.push(x) });
        return number;
      }
    };

    /* algorithm functions */
    /* add all birthdate numbers into a stack, and add summary value of this numbers */
    var firstNumber = function() {
      return numberRegistry(
        formatedDate.split('')
        .filter(function(x) { 
          return /[0-9]/.test(x);
        })
        .map(function(x) { 
          stack.push(x);
          return parseInt(x);
        })
        .reduce(function(x, y) {
          return x + y;
        })
      );
    };

    /* sum numbers of first number */
    var secondNumber = function(firstNumber) {
      numberRegistry(
        firstNumber.split('')
          .map(function(x) {
            return parseInt(x);
          })
          .reduce(function(x, y) {
            return x + y;
          })
      );

      return firstNumber;
    };

    /* deduct double first number of datebirth (x2) from first number */
    var thirdNumber = function(firstNumber) {
      return numberRegistry(
        firstNumber - (2 * formatedDate[0])
      );
    };

    /* sum numbers of third number */
    var fourthNumber = function(thirdNumber) {
      return secondNumber(thirdNumber);
    };
    
    /* fill stack */
    fourthNumber(thirdNumber(secondNumber(firstNumber())));
    
    /* gerenate result into accumulator and return it */
    return eatStack(stack, {
      0 : 0,
      1 : 0,
      2 : 0,
      3 : 0,
      4 : 0,
      5 : 0,
      6 : 0,
      7 : 0,
      8 : 0,
      9 : 0
    });
  };
};
