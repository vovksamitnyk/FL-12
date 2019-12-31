function makeNumber(string) {
   let numbers = "";
   for (let i = 0; i < string.length; i++) {

      if (!isNaN(string[i])) {
         numbers += (string[i]);
         //console.log(numbers);
      }
   }
   return numbers
}

makeNumber('1aaaa2qqqq3cccc4gggg5zzzz');
makeNumber('');
