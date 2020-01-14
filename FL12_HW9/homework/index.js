/*============"(  01  )"=============*/

function convert() {
   let arr = [];
   for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'number') {
         arr.push(arguments[i] + '');
      } else if (typeof arguments[i] === 'string') {
         arr.push(arguments[i] * 1);
      }
   }
   return arr
}
//convert(1,2,3,4,5,'6','7','8','9');



/*============"(  02  )"=============*/

function executeforEach(a, b) {
   for (let i = 0; i < a.length; i++) {
      b(a[i]);
   }
}
//executeforEach([1,2,3], function(el) { console.log(el * 2) });



/*============"(  03  )"=============*/

function mapArray(a, b) {
   let arr = [];
   executeforEach(a, function(x) {
      x *= 1;
      arr.push(b(x));
   });
   return arr
}
//mapArray([2, '5', 8], function(el) { return el + 3 });



/*============"(  04  )"=============*/

function filterArray(a, b) {
   let arr = [];
   executeforEach(a, function(x) {
      if (b(x)) {
         arr.push(x);
      }
   });
   return arr
}
//filterArray([2, 5, 8], function(el) { return el % 2 === 0 });



/*============"(  05  )"=============*/


function flipOver(someString) {
   let arr = [];
   executeforEach(someString, function(x) {
      arr.unshift(x);
   });
   return arr.join('');
}
//flipOver('hey world');



/*============"(  06  )"=============*/

function makeListFromRange(a) {
   let arr = [];
   for (let i = a[0]; i <= a[1]; i++) {
      arr.push(i);
   }
   return arr
}
//makeListFromRange([2, 7]);



/*============"(  07  )"=============*/

const actors = [
   { name: 'tommy', age: 36 },
   { name: 'lee', age: 28 },
   { name: 'Duncan MacLeod', age: 428 }
];

function getArrayOfKeys(someArray, key) {
   let arr = [];
   executeforEach(someArray, function(x) {
      arr.push(x[key]);
   });
   return arr
}
//getArrayOfKeys(actors, 'age');
//getArrayOfKeys(actors, 'name');



/*============"(  08  )"=============*/

const ageRestriction = 30;

function substitute(a) {
   return mapArray(a, function(el) {
      if (el < ageRestriction) {
         return '*'
      } else {
         return el
      }
   });
}
//substitute([58, 14, 48, 2, 31, 29, 428]);



/*============"(  09  )"=============*/

const year = 2019;
const day = 2;
const date = new Date(year, 0, day);
const msecondsInDay = 86400000;

function getPastDay(date, days) {
   let daysByMiliseconds = days * msecondsInDay;
   let startDate = new Date(date.getTime() - daysByMiliseconds);
   let numberOfDay = startDate.getDate();
   return numberOfDay
}
//getPastDay(date, 1122);



/*============"(  10  )"=============*/

function formatDate(date) {
   let year = date.getFullYear();
   let month = date.getMonth() + 1;
   let day = date.getDate();
   let hour = date.getHours();
   let minute = date.getMinutes();
   const twoDigitNumber = 10;

   function formatStringWithZero(number) {
      if (number < twoDigitNumber) {
         return '0' + number
      } else {
         return number
      }
   }

   return year + '/' + month + '/' + day + ' ' + formatStringWithZero(hour) + ':' + formatStringWithZero(minute);
}

//formatDate(new Date('6/15/2018 09:05:00'));
//formatDate(new Date());
