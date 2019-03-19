module.exports = function(formatedDate) {
  var stack = formatedDate.split('').filter(function(x) { return /[0-9]/.test(x) });

  return function() {
    function eatStack(stack, acc) {
      if (acc > 0 && acc < 10) {
        return acc;
      }

      var num = stack.map(function(x) {
        return parseInt(x);
      }).reduce(function(x,y) {
        return x + y;
      });

      return eatStack(num.toString().split(''), num);
    };

    return eatStack(stack, 0);
  };
};
