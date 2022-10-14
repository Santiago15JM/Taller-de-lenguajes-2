// Funciones de los ejemplos
function helloJS() { document.getElementById("ej1").innerHTML = "Hello JavaScript"; }

function bigFont() {
    document.getElementById("ej1").style.fontSize = "40px";
    document.getElementById("fontB").onclick = smallFont;
    document.getElementById("fontB").innerHTML = "Encoger texto";
}

function smallFont() {
    document.getElementById("ej1").style.fontSize = "30px";
    document.getElementById("fontB").onclick = bigFont;
    document.getElementById("fontB").innerHTML = "Agrandar texto";
}

function vars() {
    let a = 5, b = 6;
    alert("5+6=" + (a + b));
}

function sumString() {
    let x = 16 + "Volvo";
    alert(x);
}

function object() {
    let carro = { marca: "Ford", color: "Gris", modelo: 2018 };
    alert(`${carro.marca} ${carro.color} ${carro.modelo}`); // ` Es una plantilla literal, permite interpolar variables
}

function slice() {
    let str = "Apple, Banana, Kiwi";
    let part = str.slice(7, 13);
    alert(`Texto completo: ${str} \nRecorte: ${part}`);
}

// Los numeros en JavaScript siempre son floats de 64bit
function accuracy() {
    let x = 0.2 + 0.1;
    alert(`0.2 + 0.1 = ${x}`);
}

function numberFun() {
    alert(`
    true: ${Number(true)}
    false: ${Number(false)}
    "10": ${Number("10")}
    "  10": ${Number("  10")}
    "10.33": ${Number("10.33")}
    "10,33": ${Number("10,33")}
    "10 33": ${Number("10 33")}
    "John": ${Number("John")}`
    )
}

function array() {
    const cars = ["Fiat", "Volvo", "BMW", "Toyota"];
    alert(cars.toString());
}

function sort() {
    var cars = ["Fiat", "Volvo", "BMW", "Toyota"];
    cars.sort();
    alert(cars.join(" "));
}

function spliceArray() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    alert(fruits.toString());

    fruits.splice(2, 0, "Lemon", "Kiwi"); // Reemplaza o inserta elementos
    alert(fruits.toString());
}

function dates() {
    new Date();
    new Date(year, month, day, hours, minutes, seconds, milliseconds);
    new Date(milliseconds);
}

function math() {
    let txt = "";
    txt += Math.round(5.5) + "\n";
    txt += Math.ceil(5.5) + "\n";
    txt += Math.floor(5.5) + "\n";
    txt += Math.trunc(Math.PI) + "\n";
    alert(txt);
}

function rand() {
    alert(`Math.random() siempre devuelve un valor decimal entre 0 y 1: ${Math.random()}`);
}

function bools() {
    alert(`10 > 9 = ${10 > 9}
    "Hello" = ${Boolean("Hello")}
    Math.PI = ${Boolean(Math.PI)}
    0 = ${Boolean(0)}
    "" = ${Boolean("")}
    NaN = ${Boolean(NaN)}
    `);
}

function streq() { // No es aconsejable crear objetos de tipo Boolean 
    const x = new Boolean(false);
    const y = new Boolean(false);
    alert(x === y);
}

function ternary() {
    let age = 19;
    let voteable = (age < 18) ? "No puede votar" : "Puede votar";
    alert(`19 Años: ${voteable}`);
}

function forin() { // Itera en las propiedades de un objeto
    const person = { fname: "John", lname: "Doe", age: 25 };

    let text = "";
    for (let x in person) {
        text += person[x];
    }
    alert(text);
}

function forof() { // Itera en los valores de un objeto iterable
    const cars = [{ Marca: "BMW" }, "Volvo", { Marca: "Mini", color: "Rojo" }];

    let text = "";
    for (let x of cars) {
        text += x + " ";
    }
    alert(text);
}

function regex() {
    let text = "Visit Microsoft!";
    let result = text.replace(/microsoft/i, "W3Schools");
    alert(result);
}

function trycatch() {
    try {
        adddlert("Welcome guest!");
    }
    catch (err) {
        alert(`Error: ${err.message}`);
    }
}

function declare() { // El comportamiento defecto de JS es mover las declaraciones al inicio del bloque, denominado Hoisting
    abc = 5; // Se asigna 5 a x
    alert(abc);                     // Se muestra x in the element

    var abc; // Se declara x
}

function arrow() {
    hello = function () {
        return "Hello World!";
    }

    hello = () => {
        return "Hello World!";
    }
}

// Actualizado



/* Buenas practicas:
    Evitar variables globales, new Objects(), ==, eval() (Evaluar codigo en string)

    */
