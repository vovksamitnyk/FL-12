function isLeapYear(date) {
   let year = new Date(date).getFullYear();
   if (year) {
      if (year % 100 === 0 && year % 400 !== 0 || year % 4 !== 0) {
         return year + ' is not a leap year'
      } else {
         return year + ' is a leap year'
      }
   } else {
      return 'Invalid Date'
   }
}

isLeapYear('2021-01-15 13:00:00');
isLeapYear('2021-01-15 13:00:0077');
isLeapYear(15093093039);
isLeapYear(1509309965976587658765874854875487787487487487487487474747474674743039);
