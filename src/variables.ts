// variables y tipos de datos (implicitos)
let x = 100; 

// variables y tipos de datos (explícito)
let n:number = 100; 

// tipos
let edad: number;
edad = 60;

let nombre: string;
nombre = "Maria";

console.log(`Mi nombre es: ${nombre}, tengo ${edad} años.`);

let mayorDeEdad: boolean = false;
if(edad >= 18 ){
    mayorDeEdad = true;
}

if(mayorDeEdad){
    console.log(`Soy mayor de edad`);
}else{
    console.log(`Soy menor de edad`);
}

let cualquiera: any = "Cualquier valor";
cualquiera = 1000;
// enums
enum Color {
    Rojo,
    Verde,
    Azul
}

let colorSeleccionado: Color;
colorSeleccionado = Color.Azul;

console.log(colorSeleccionado)

let datos = "Juan";
console.log(datos[1])

// objectos
let persona: object = {
    "nombre": "Juan",
    "edad": 30,
    "estado": true
}

console.log(persona)

persona = {"nombres": "Pedro Prueba"}

console.log(persona)

// interfaces
interface Persona {
    nombre: string,
    edad?: number,
    estado?: boolean
}

interface Producto {
    nombre: string,
    precio?: number,
    estado?: boolean,
    imagen?: string,
    categoria: Categoria
}

interface Categoria {
    nombre: string,
    detalle?: string
}

let estudiante: Persona;
estudiante = {nombre: "Maria", edad: 20, estado: true};
console.log(estudiante);

let estudiante2:Persona
estudiante2 = {nombre: "Ana", estado: true};
console.log(estudiante2);

let lista_estudiantes: Persona[] = [estudiante, {nombre: "Simon"}, estudiante2];
console.log(lista_estudiantes);

// producto
let producto: Producto = {
                            nombre: "Laptop",
                            precio: 2500,
                            categoria: {
                                nombre: "Electronico",
                                detalle: "equipos electronicos"
                            }
                        }
console.log(producto)