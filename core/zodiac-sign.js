module.exports = function(formatedDate) {
  /* define zodiac data */

  var ZODIAC_SIGNS = [
    { code_number: 1, code_name: 'ARIES', element: 'fire', planet: 'mars',
      decade: [
        { number: 1, month_from: 3, day_from: 21, month_to: 3, day_to: 30 },
        { number: 2, month_from: 3, day_from: 31, month_to: 4, day_to: 9 },
        { number: 3, month_from: 4, day_from: 10, month_to: 4, day_to: 20 }
      ]
    },
    { code_number: 2, code_name: 'TAURUS', element: 'earth', planet: 'venus',
      decade: [
        { number: 1, month_from: 4, day_from: 21, month_to: 4, day_to: 30 },
        { number: 2, month_from: 5, day_from: 1, month_to: 5, day_to: 10 },
        { number: 3, month_from: 5, day_from: 11, month_to: 5, day_to: 21 }
      ]
    },
    { code_number: 3, code_name: 'GEMINI', element: 'air', planet: 'mercury',
      decade: [
        { number: 1, month_from: 5, day_from: 22, month_to: 5, day_to: 31 },
        { number: 2, month_from: 6, day_from: 1, month_to: 6, day_to: 10 },
        { number: 3, month_from: 6, day_from: 11, month_to: 6, day_to: 21 }
      ]
    },
    { code_number: 4, code_name: 'CANCER', element: 'water', planet: 'moon',
      decade: [
        { number: 1, month_from: 6, day_from: 22, month_to: 7, day_to: 1 },
        { number: 2, month_from: 7, day_from: 2, month_to: 7, day_to: 2 },
        { number: 3, month_from: 7, day_from: 13, month_to: 7, day_to: 22 }
      ]
    },
    { code_number: 5, code_name: 'LEO', element: 'fire', planet: 'sun',
      decade: [
        { number: 1, month_from: 7, day_from: 23, month_to: 8, day_to: 1 },
        { number: 2, month_from: 8, day_from: 2, month_to: 8, day_to: 12 },
        { number: 3, month_from: 8, day_from: 13, month_to: 8, day_to: 23 }
      ]
    },
    { code_number: 6, code_name: 'VIRGO', element: 'earth', planet: 'mercury',
      decade: [
        { number: 1, month_from: 8, day_from: 24, month_to: 9, day_to: 3 },
        { number: 2, month_from: 9, day_from: 4, month_to: 9, day_to: 13 },
        { number: 3, month_from: 9, day_from: 14, month_to: 9, day_to: 22 }
      ]
    },
    { code_number: 7, code_name: 'LIBRA', element: 'air', planet: 'venus',
      decade: [
        { number: 1, month_from: 9, day_from: 23, month_to: 10, day_to: 3 },
        { number: 2, month_from: 10, day_from: 4, month_to: 10, day_to: 13 },
        { number: 3, month_from: 10, day_from: 14, month_to: 10, day_to: 23 }
      ]
    },
    { code_number: 8, code_name: 'SCORPIO', element: 'water', planet: 'mars',
      decade: [
        { number: 1, month_from: 10, day_from: 24, month_to: 11, day_to: 2 },
        { number: 2, month_from: 11, day_from: 3, month_to: 11, day_to: 12 },
        { number: 3, month_from: 11, day_from: 13, month_to: 11, day_to: 22 }
      ]
    },
    { code_number: 9, code_name: 'SAGITTARIUS', element: 'fire', planet: 'jupiter',
      decade: [
        { number: 1, month_from: 11, day_from: 23, month_to: 12, day_to: 2 },
        { number: 2, month_from: 12, day_from: 3, month_to: 12, day_to: 12 },
        { number: 3, month_from: 12, day_from: 13, month_to: 12, day_to: 21 }
      ]
    },
    { code_number: 10, code_name: 'CAPRICORN', element: 'earth', planet: 'saturn',
      decade: [
        { number: 1, month_from: 12, day_from: 22, month_to: 12, day_to: 31 },
        { number: 2, month_from: 1, day_from: 1, month_to: 1, day_to: 10 },
        { number: 3, month_from: 1, day_from: 11, month_to: 1, day_to: 20 }
      ]
    },
    { code_number: 11, code_name: 'AQUARIUS', element: 'air', planet: 'saturn',
      decade: [
        { number: 1, month_from: 1, day_from: 21, month_to: 1, day_to: 29 },
        { number: 2, month_from: 1, day_from: 30, month_to: 2, day_to: 8 },
        { number: 3, month_from: 2, day_from: 9, month_to: 2, day_to: 18 }
      ]
    },
    { code_number: 12, code_name: 'PISCES', element: 'water', planet: 'jupiter',
      decade: [
        { number: 1, month_from: 2, day_from: 19, month_to: 2, day_to: 29 },
        { number: 2, month_from: 3, day_from: 1, month_to: 3, day_to: 10 },
        { number: 3, month_from: 3, day_from: 11, month_to: 3, day_to: 20 }
      ]
    }
  ];

  /* generate date */
  var birthDate = new Date(formatedDate.replace( /(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3"));

  /* check input date validation */
  if (Object.prototype.toString.call(birthDate) !== "[object Date]" || isNaN(birthDate.getTime())) {
    return false;
  }

  return function() {
    /* get day and month numbers from input date */
    var bornDay = birthDate.getDate();
    var bornMonth = birthDate.getMonth() + 1;

    /* search accordance in ZODIAC_SIGNS object by decade data */
    return ZODIAC_SIGNS
      .map(function(mainInfo) {
        var decade = mainInfo.decade.filter(function(decade) {
          if (bornMonth == decade.month_from && bornMonth == decade.month_to) {
            return bornDay >= decade.day_from && bornDay <= decade.day_to;
          }
          
          if (bornMonth == decade.month_from && bornMonth != decade.month_to) {
            return bornDay >= decade.day_from && bornDay >= decade.day_to;
          }
          
          if (bornMonth != decade.month_from && bornMonth == decade.month_to) {
            return bornDay <= decade.day_from && bornDay <= decade.day_to;
          }

          return false;
        });

        return decade.length ? {
          code_number: mainInfo.code_number,
          code_name: mainInfo.code_name,
          element: mainInfo.element,
          planet: mainInfo.planet,
          decade: decade[0].number
        } : null;
      })
      .filter(function(x) {
        return x;
      })[0];
  };
};
