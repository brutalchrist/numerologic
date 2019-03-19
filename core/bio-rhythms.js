module.exports = function(formatedDate) {
  var MS_IN_DAY = 86400000;
  var DOUBLE_PI = 2 * Math.PI;
  
  var CYCLE_PHYSICAL = 23;
  var CYCLE_EMOTIONAL = 28;
  var CYCLE_INTELLECTUAL = 33;
  
  /* generate dates */
  
  var birthDate = new Date(formatedDate.replace( /(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3"));
  var currentDate = new Date();
  var approximationDate = new Date(currentDate.getFullYear(), 
    currentDate.getMonth() + 1, 
    currentDate.getDate(), 
    currentDate.getHours(), 
    currentDate.getMinutes(), 
    currentDate.getSeconds()
  );
  
  /* check input date validation */
  
  if (Object.prototype.toString.call(birthDate) !== "[object Date]" || isNaN(birthDate.getTime())) {
    return false;
  }
  
  if (birthDate >= currentDate) {
    return false;
  }
  
  /* biorhythm point calculation algorithm */
  
  function calcBiorhytms(t, f, P) {
    return Math.round((Math.sin(DOUBLE_PI * (t - f) / P)) * 100);
  };
  
  /* get the difference in days between two dates */
  
  function daysBetweenTwoDate(fromDate, toDate) {
    return Math.round((toDate.getTime() - fromDate.getTime()) / MS_IN_DAY);
  };
  
  return function() {
    /* define total result template firstly */
    var biorhytms = {
      physical : [],
      emotional : [],
      intellectual : []
    };

    /* calc "f" constant: days count from birthdate to current date */
    var f = daysBetweenTwoDate(birthDate, currentDate);

    /* calc "t" constant: days count from current date to approximation date */
    var t = daysBetweenTwoDate(currentDate, approximationDate);

    /* totally calc daily biorhythms in loop */
    var _t = 1;

    while(_t <= t) {
      biorhytms.physical.push(calcBiorhytms(_t, f, CYCLE_PHYSICAL));
      biorhytms.emotional.push(calcBiorhytms(_t, f, CYCLE_EMOTIONAL));
      biorhytms.intellectual.push(calcBiorhytms(_t, f, CYCLE_INTELLECTUAL));
      _t++;
    }

    return biorhytms;
  };
};
