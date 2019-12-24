let a, b, c, correctInputData;
correctInputData = true;
let valuesOfTriangleSides = [];


a = parseFloat(prompt('Enter the first value, please.'));
if (!isNaN(a) && a > 0) {
   valuesOfTriangleSides.push(a);
   b = parseFloat(prompt('Enter the second value, please.'));
} else {
   correctInputData = false;
}
if (!isNaN(b) && correctInputData && b > 0) {
   valuesOfTriangleSides.push(b);
   c = parseFloat(prompt('Enter the third value, please.'));
} else {
   correctInputData = false;
}
if (!isNaN(c) && correctInputData && c > 0) {
   valuesOfTriangleSides.push(c);
   let maximum = 0;
   for (let i = 0; i < valuesOfTriangleSides.length; i++) {
      if (valuesOfTriangleSides[i] > maximum) {
         maximum = valuesOfTriangleSides[i];
      }
   }
   if (maximum + maximum - a - b - c >= 0) {
      console.log('Triangle doesn’t exist');
   } else if (a === b && b === c) {
      console.log('Equilateral triangle');
   } else if (a === b || a === c || b === c) {
      console.log('Isosceles triangle');
   } else {
      console.log('Scalene triangle')
   }

} else if (a <= 0 || b <= 0 || c <= 0) {
   console.log('A triangle must have 3 sides with a positive definite length.');
} else {
   console.log('Input values should be ONLY numbers.\nReload the page and try again if you wish.');
}
