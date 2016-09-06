var array = process.argv;
var suma = 0;
for (var i = 2; i < array.length; i++) {
	suma += +array[i];
}
console.log(suma);