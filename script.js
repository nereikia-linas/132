'use strict'

var digits = [100, 21, 10.211, 300, 41, 21, -41, 0, 1, 27]
var sum = 0;
var i;

var stringLine = '';
for (i = 0; i <= digits.length -1; i++) {
  stringLine += '(' + digits[i] + ') ';
}
console.log('Duoti šie skaičiai: ' + stringLine);

for (i=0; i < digits.length; i++) {
  sum += digits[i];
} console.log('Duotų skaičių suma yra: ' + sum.toFixed(3));

var average = (sum / digits.length).toFixed(3);
console.log('Duotų skaičių vidurkis yra: ' + average);

var max = 0;
for (i = 0; i < digits.length; i++) {
  if (digits[i] > max) {
    max = digits[i];
  }
} console.log('Didžiausias skaičius: ' + max);

var min = max;
for (i = 0; i < digits.length; i++) {
  if (digits[i] < min)
  {
    min = digits[i];
  }
} console.log('Mažiausias skaičius: ' + min);
