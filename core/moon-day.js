module.exports = function(formatedDate) {
  /* generate date */
  var birthDate = new Date(formatedDate.replace( /(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3"));

  /* check input date validation */
  if (Object.prototype.toString.call(birthDate) !== "[object Date]" || isNaN(birthDate.getTime())) {
    return false;
  }

  var birthYear = birthDate.getFullYear();
  var birthDay = birthDate.getDate();
  var birthMonth = birthDate.getMonth() + 1;
  
  birthMonth = [1,2].indexOf(birthMonth) === -1 ? birthMonth : (birthMonth + 12);

  /* century coefficient number */
  function centuryCoefficient() {
    var centuryValue = Math.floor(birthYear / 100);
    var a = Math.floor(centuryValue / 3) + Math.floor(centuryValue / 4);
    a = (a + 6) - centuryValue;
    return a;
  };

  return function() {
    /* calculate moon day by "Harvey formula" */
    var a = Math.round(("0." + (birthYear / 19).toString().split('.')[1]) * 209);
    a += birthMonth + centuryCoefficient() + birthDay;
    var b = "0." + (a / 30).toString().split('.')[1];
    b = Math.round(b * 30) + 1;

    return b;
  };
};
