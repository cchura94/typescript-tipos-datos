"use strict";
// variables y tipos de datos (implicitos)
let x = 100;
// variables y tipos de datos (explícito)
let n = 100;
// tipos
let edad;
edad = 60;
let nombre;
nombre = "Maria";
console.log(`Mi nombre es: ${nombre}, tengo ${edad} años.`);
let mayorDeEdad = false;
if (edad >= 18) {
    mayorDeEdad = true;
}
if (mayorDeEdad) {
    console.log(`Soy mayor de edad`);
}
else {
    console.log(`Soy menor de edad`);
}
let cualquiera = "Cualquier valor";
cualquiera = 1000;
// enums
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
let colorSeleccionado;
colorSeleccionado = Color.Azul;
console.log(colorSeleccionado);
let datos = "Juan";
console.log(datos[1]);
// objectos
let persona = {
    "nombre": "Juan",
    "edad": 30,
    "estado": true
};
console.log(persona);
persona = { "nombres": "Pedro Prueba" };
console.log(persona);
let estudiante;
estudiante = { nombre: "Maria", edad: 20, estado: true };
console.log(estudiante);
let estudiante2;
estudiante2 = { nombre: "Ana", estado: true };
console.log(estudiante2);
let lista_estudiantes = [estudiante, { nombre: "Simon" }, estudiante2];
console.log(lista_estudiantes);
// producto
let producto = {
    nombre: "Laptop",
    precio: 2500,
    categoria: {
        nombre: "Electronico",
        detalle: "equipos electronicos"
    }
};
console.log(producto);
