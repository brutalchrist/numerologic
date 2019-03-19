'use strict';

const Numerologic = function(birthDate) {
  /* date formatting here (in work) */
  if (!/^[0-3][0-9]\.([0][0-9]|[1][0-2])\.[0-9]{4}$/.test(birthDate)) {
    return false;
  }

  const formatedDate = birthDate;
  const pythogorasSquare = require('./core/pythagoras-square')(formatedDate);
  const lifeWayNumber = require('./core/life-way-number')(formatedDate);
  const bioRhythms = require('./core/bio-rhythms')(formatedDate);
  const zodiacSign = require('./core/zodiac-sign')(formatedDate);
  const moonDay = require('./core/moon-day')(formatedDate);
  
  return {
    pythogorasSquare : pythogorasSquare,
    lifeWayNumber : lifeWayNumber,
    bioRhythms : bioRhythms,
    zodiacSign : zodiacSign,
    moonDay : moonDay
  };

};

module.exports = Numerologic;
