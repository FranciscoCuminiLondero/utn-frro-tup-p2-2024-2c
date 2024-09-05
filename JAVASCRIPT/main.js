// EJERCICIO 1
// alert("Hello World!");

// EJERCICIO 2
document.write("Hello World!");

// EJERCICIO 3
document.write(`<br> La suma de 3 + 5 = ${3 + 5}`);

// EJERCICIO 4
var nombreUsuario = prompt("Ingrese su nombre: ", "Francisco");
document.write("<br> Hola " + nombreUsuario);

// EJERCICIO 5
var num1 = Number(prompt("Ingrese el primer número: ", "5"));
var num2 = Number(prompt("Ingrese el segundo número: ", "3"));
document.write(`<br> La suma entre ${num1} + ${num2} = ${num1 + num2}`);

// EJERCICIO 6
var numero1 = Number(prompt("Ingrese el primer número: ", "5"));
var numero2 = Number(prompt("Ingrese el segundo número: ", "3"));
if (numero1 > numero2) {
  document.write(`<br> El número ${numero1} es mayor a ${numero2}`);
} else {
  document.write(`<br> El número ${numero2} es mayor a ${numero1}`);
}
