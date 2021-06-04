'use strict'

var digits = [100, 21, 10.211, 300, 41, 21, -41, 0, 1, 27]
const suma = (digits).reduce((partial_sum, z) => partial_sum + z,0);
var minimum = Math.min.apply(Math, digits);
var maximum = Math.max.apply(Math, digits);
console.log('Duoti šie skaičiai: ' + digits);
console.log('Duotų skaičių suma yra: ' + suma.toFixed(3));
console.log('Duotų skaičių vidurkis yra: ' + (eval(digits.join('+'))/digits.length).toFixed(3));
console.log('Didžiausias skaičius: ' + minimum);
console.log('Mažiausias skaičius: ' + maximum);
