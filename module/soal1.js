var calculator = require('./rumus.js')

var s = 15, p = 30, l = 5

console.log("\n------------------------ MENGHITUNG LUAS DAN KELILING PERSEGI ------------------------")

console.log("\nLuas Persegi dengan sisi "+ s +" cm adalah     : " + calculator.luaspersegi(s) + " cm^2")

console.log("\nKeliling Persegi dengan sisi "+ s +" cm adalah : " + calculator.kelilingpersegi(s) + " cm")

console.log("\n-------------------- MENGHITUNG LUAS DAN KELILING PERSEGI PANJANG --------------------")

console.log("\nLuas Persegi Panjang dengan panjang "+ p +" cm dan lebar " + l + " cm adalah     : " + calculator.luaspersegipanjang(p, l) + " cm^2")

console.log("\nKeliling Persegi Panjang dengan panjang "+ p +" cm dan lebar " + l + " cm adalah : " + calculator.kelilingpersegipanjang(p, l) + " cm\n")