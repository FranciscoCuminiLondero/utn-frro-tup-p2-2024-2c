// EJERCICIO 1
// alert("Hello World!");

// EJERCICIO 2
document.write("EJERCICIO 2 → Hello World!");

// EJERCICIO 3
document.write(`<br> EJERCICIO 3 → La suma de 3 + 5 = ${3 + 5}`);

// EJERCICIO 4
let nombreUsuario = prompt("Ingrese su nombre: ", "Francisco");
document.write("<br> EJERCICIO 4 → Hola " + nombreUsuario);

// EJERCICIO 5
let num1 = Number(prompt("Ingrese el primer número: ", "5"));
let num2 = Number(prompt("Ingrese el segundo número: ", "3"));
document.write(`<br> EJERCICIO 5 → La suma entre ${num1} + ${num2} = ${num1 + num2}`);

// EJERCICIO 6
document.write("<br> EJERCICIO 6 → ");
let numero1 = Number(prompt("Ingrese el primer número: ", "5"));
let numero2 = Number(prompt("Ingrese el segundo número: ", "3"));
if (numero1 > numero2) {
  document.write(`El número ${numero1} es mayor a ${numero2}`);
} else {
  document.write(`El número ${numero2} es mayor a ${numero1}`);
}

// EJERCICIO 7
document.write("<br> EJERCICIO 7 → ");
let n1 = Number(prompt("Ingrese el primer número: ", "28"));
let n2 = Number(prompt("Ingrese el primer número: ", "18"));
let n3 = Number(prompt("Ingrese el primer número: ", "6"));

if (n1 > n2 && n1 > n3) {
  document.write(`El número ${n1} es mayor a ${n2} y ${n3}`);
} else if (n2 > n3) {
  document.write(`El número ${n2} es mayor a ${n1} y ${n3}`);
} else {
  document.write(`El número ${n3} es mayor a ${n1} y ${n2}`);
}

// EJERCICIO 8
document.write("<br> EJERCICIO 8 → ");
let num = Number(prompt("Ingrese un número", "18"));
if (num % 2 === 0) {
  document.write(`El número ${num} es divisible por 2`);
} else {
  document.write(`El número ${num} NO es divisible por 2`);
}

// EJERCICIO 9
let frase = prompt("Ingrese una frase", "El que mucho abarca, poco aprieta");
let contador = 0;
for (let i = 0; i < frase.length; i++) {
  if (frase[i] === "a") {
    contador++;
  }
}
document.write(`<br> EJERCICIO 9 → La letra 'a' aparece ${contador} veces`);

// EJERCICIO 10
document.write("<br> EJERCICIO 10 → Vocales: ");
for (let i = 0; i < frase.length; i++) {
  if (frase[i] === "a" || frase[i] === "e" || frase[i] === "i" || frase[i] === "o" || frase[i] === "u") {
    document.write(`${frase[i]} `);
  }
}

// EJERCICIO 11
contador = 0;
for (let i = 0; i < frase.length; i++) {
  if (frase[i] === "a" || frase[i] === "e" || frase[i] === "i" || frase[i] === "o" || frase[i] === "u") {
    contador++;
  }
}

document.write(`<br> EJERCICIO 11 → Son vocales ${contador} letras`);

// EJERCICIO 12
let contador_a = 0;
let contador_e = 0;
let contador_i = 0;
let contador_o = 0;
let contador_u = 0;

for (let i = 0; i < frase.length; i++) {
  if (frase[i] === "a") {
    contador_a++;
  } else if (frase[i] === "e") {
    contador_e++;
  } else if (frase[i] === "i") {
    contador_i++;
  } else if (frase[i] === "o") {
    contador_o++;
  } else if (frase[i] === "u") {
    contador_u++;
  }
}

document.write(
  `<br> EJERCICIO 12 → La vocal 'a' aparece ${contador_a} ${
    contador_a > 1 ? "veces" : "vez"
  }, la vocal 'e' aparece ${contador_e} ${contador_e > 1 ? "veces" : "vez"}, la vocal 'i' aparece ${contador_i} ${
    contador_i > 1 ? "veces" : "vez"
  }, la vocal 'o' aparece ${contador_o} ${contador_o > 1 ? "veces" : "vez"} y la vocal 'u' aparece ${contador_u} ${
    contador_u > 1 ? "veces" : "vez"
  } `
);

// EJERCICIO 13
document.write(`<br> EJERCICIO 13 → `);
let numero = Number(prompt("Ingrese un número: ", "14"));
if (numero % 2 === 0) {
  document.write(`El número ${numero} es divisible por 2`);
} else if (numero % 3 === 0) {
  document.write(`El número ${numero} es divisible por 3`);
} else if (numero % 5 === 0) {
  document.write(`El número ${numero} es divisible por 5`);
} else if (numero % 7 === 0) {
  document.write(`El número ${numero} es divisible por 7`);
} else {
  document.write(`El número ${numero} NO es divisible por 2, 3, 5 o 7 `);
}

// EJERCICIO 14
let divisores = "";
document.write(`<br> EJERCICIO 14  ↓`);
if (numero % 2 === 0) {
  divisores = divisores + "2";
}
if (numero % 3 === 0) {
  divisores = divisores + "3";
}

if (numero % 5 === 0) {
  divisores = divisores + "5";
}

if (numero % 7 === 0) {
  divisores = divisores + "7";
}

for (let i = 0; i < divisores.length; i++) {
  document.write(`<br> El número ${numero} es divisible por ${divisores[i]}`);
}

// EJERCICIO 15
document.write(`<br> EJERCICIO 15  →`);
numero = 81;
for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    document.write(i + " ");
  }
}

// EJERCICIO 16
document.write(`<br> EJERCICIO 16  → `);
n1 = 81;
n2 = 36;
let mayor = n1;

if (n1 > n2) {
  mayor = n1;
} else {
  mayor = n2;
}

for (let i = 1; i <= mayor; i++) {
  if (n1 % i === 0 && n2 % i === 0) {
    document.write(i + " ");
  }
}

// EJERCICIO 17
document.write(`<br> EJERCICIO 17  → `);

numero = 0;
contador = 0;
for (let i = numero; i > 1; i--) {
  if (numero % i === 0) {
    contador++;
  }
}

if (numero <= 0) {
  document.write("El número " + numero + " NO aplica, debe ser mayor a 0");
} else {
  if (contador <= 2) {
    document.write("El número " + numero + " es Primo");
  } else {
    document.write("El número " + numero + " NO es Primo");
  }
}

// EJERCICIO 18
document.write(`<br> EJERCICIO 18  → `);
let edadUsuario = Number(prompt("Ingrese su edad", "18"));
if (edadUsuario >= 18) {
  document.write("Con " + edadUsuario + " años de edad, podes conducir");
} else {
  document.write("Con " + edadUsuario + " años de edad, NO podes conducir");
}

// EJERCICIO 19
document.write(`<br> EJERCICIO 19  → `);
let nota = Number(prompt("Ingrese una nota", "7"));
switch (nota) {
  case (0, 1, 2, 3):
    document.write("Muy deficiente");
    break;
  case (4, 5):
    document.write("Insuficiente");
    break;
  case 6:
    document.write("Suficiente");
    break;
  case 7:
    document.write("Bien");
    break;
  case (8, 9):
    document.write("Notable");
    break;
  case 10:
    document.write("Sobresaliente");
    break;
  default:
    document.write("Ingrese una nota valida del 0 al 10");
    break;
}

// EJERCICIO 20
document.write(`<br> EJERCICIO 20  → `);
let cadena = "";
let palabra;
do {
  palabra = prompt("Ingrese una palabra");
  if (palabra !== null && palabra !== "" && palabra !== " ") {
    String(palabra);
    cadena = cadena + " - " + palabra;
  }
} while (palabra !== null);

document.write(cadena);

// EJERCICIO 21
document.write(`<br> EJERCICIO 21  → `);
let numeroUsuario;
let acumulador = 0;
let bandera = true;
while (bandera === true) {
  numero = prompt("Introduce un número");
  if (numero === null) {
    bandera = false;
  } else if (isNaN(numero)) {
    alert("Introduce un número valido");
  } else {
    acumulador += Number(numero);
  }
}

document.write("La suma total es: " + acumulador);

// EJERCICIO 22
document.write(`<br> EJERCICIO 22  ↓ `);
let dniUsuario = 0;
bandera = true;
while (bandera) {
  dniUsuario = prompt("Ingrese su dni");
  if (dniUsuario === null) {
    bandera = false;
  } else if (isNaN(dniUsuario)) {
    alert("Introduce un número válido");
  } else if (dniUsuario > 0 && dniUsuario < 99999999) {
    let resto = 0;
    resto = Number(dniUsuario) % 23;
    document.write("<br>");
    switch (resto) {
      case 0:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'T'");
        break;
      case 1:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'R'");
        break;
      case 2:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'W'");
        break;
      case 3:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'A'");
        break;
      case 4:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'G'");
        break;
      case 5:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'M'");
        break;
      case 6:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'Y'");
        break;
      case 7:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'F'");
        break;
      case 8:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'P'");
        break;
      case 9:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'D'");
        break;
      case 10:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'X'");
        break;
      case 11:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'B'");
        break;
      case 12:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'N'");
        break;
      case 13:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'J'");
        break;
      case 14:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'Z'");
        break;
      case 15:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'S'");
        break;
      case 16:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'Q'");
        break;
      case 17:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'V'");
        break;
      case 18:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'H'");
        break;
      case 19:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'L'");
        break;
      case 20:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'C'");
        break;
      case 21:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'K'");
        break;
      case 22:
        document.write("La letra que corresponde al dni " + dniUsuario + " es la 'E'");
        break;
    }
  }
}

// EJERCICIO 23
document.write(`<br> EJERCICIO 23  ↓ <br>`);
for (let i = 1; i <= 30; i++) {
  let linea = "";
  for (let j = 1; j <= i; j++) {
    linea += i;
  }
  document.write(linea + "<br>");
}
