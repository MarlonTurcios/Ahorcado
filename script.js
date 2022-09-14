let palabras = ["ALURA", "ORACLE", "ONE", "HTML"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";

//PalabraSecreta

function escojerPalabraSecreta() {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}

function iniciarJuego() {
    escojerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();   
}