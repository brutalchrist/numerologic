# Numerologic
A node.js package for astrology/numerology esoteric science calculations.

## Installation

```
$ npm install numerologic
```

## Zodiac Sign
Get general astrology info by birth date:

```
var numerology = require('numerologic');
var zodiacSign = numerology('13.08.1989').zodiacSign();
console.log(zodiacSign);
/* 
{ code_number: 5,
  code_name: 'LEO',
  element: 'fire',
  planet: 'sun',
  decade: 3 }
  */
```

## Pythagoras Square
Calculate a "Pythoagoras Square" by birth date. Date must be only in "dd.mm.yyyy" fomat:

```
var numerology = require('numerologic');
var pythogorasSquare = numerology('13.08.1989').pythogorasSquare();
console.log(pythogorasSquare);
/* 
{ '0': 2,
  '1': 4,
  '2': 1,
  '3': 3,
  '4': 0,
  '5': 0,
  '6': 0,
  '7': 1,
  '8': 2,
  '9': 3 } 
  */
```

This result means:

| 1111 | - | 7 |
|------|---|---|
|  2   | - |88 |
| 333  | - |999|

## Life way number
Calculate a "Life way number" by birth date:

```
var lifeWayNumber = numerology('13.08.1989').lifeWayNumber();
console.log(lifeWayNumber); // 3
```

## Moon day number
Calculate a "Moon day" by birth date:

```
var moonDay = numerology('13.08.1989').moonDay();
console.log(moonDay); // 12
```

## Biorhythms
Calculate three chakras ("physical", "emotional", "intellectual") one month ahead from current date by formula:

```
B = (sin(2 * PI * (t - f) / P)) * 100, P = {23,28,33}
```

You get three arrays as result, its a daily bio-points from days with indexes 0..N, where N - today number in next month.

```
var bioRhythms = numerology('13.08.1989').bioRhythms();
console.log(bioRhythms);
/*
{ physical: 
   [ -0, -27, -52,  -73, -89, -98, -100, -94, -82, -63,
     -40, -14, 14, 40, 63, 82, 94, 100, 98, 89,
     73, 52, 27, 0, -27, -52, -73, -89, -98, -100, -94 ],
  emotional: 
   [ 100, 97, 90, 78, 62, 43, 22, 0, -22, -43,
     -62, -78, -90, -97, -100, -97, -90, -78, -62, -43,
     -22, -0, 22, 43, 62, 78, 90, 97, 100, 97, 90 ],
  intellectual: 
   [ 62, 76, 87, 95, 99, 100, 97, 91, 81, 69,
     54, 37, 19, 0, -19, -37, -54, -69, -81, -91,
     -97, -100, -99, -95, -87, -76, -62, -46, -28, -10, 10 ] }
*/
```

## License
MIT