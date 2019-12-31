function makeNumber(string) {
   let numbers = "";
   for (let i = 0; i < string.length; i++) {

      if (!isNaN(string[i])) {
         numbers += (string[i]);
      }
   }
   return numbers
}

function countNumbers(string) {
   let obj = {};
   let numbers = makeNumber(string);
   for (let i = 1; i < numbers.length; i++) {
      if (obj[numbers[i]]) {
         obj[numbers[i]]++;
      } else {
         obj[numbers[i]] = 1;
      }
   }
   return obj
}
countNumbers('eee11aaa222ooo33qqq11ggg4');
