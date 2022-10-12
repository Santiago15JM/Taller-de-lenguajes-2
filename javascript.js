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
    let txt = "1ra: " + fruits.toString();

    fruits.splice(2, 0, "Lemon", "Kiwi"); // Reemplaza o inserta elementos
    txt += "\n2da: " + fruits.toString();
    alert(txt);
}

// 

function dates() {
    new Date();
    new Date(year, month, day, hours, minutes, seconds, milliseconds);
    new Date(milliseconds);
    new Date(date);
}
