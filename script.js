let palabras = ["ALURA", "ORACLE", "ONE", "HTML"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";
let letras = [];
let errores = 8;

//PalabraSecreta

function escojerPalabraSecreta() {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}

function comprobarLetras(key) {
    let estado = false;
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
        letras.push(key);
        console.log(key);
        return estado;
    } else {
        estado = true;
        console.log(key);
        return estado;
    }
}

function anhadirLetraIncorrecta() {
    errores -= 1;
    console.log(errores);
}

function iniciarJuego() {
    escojerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();   

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();
        if (comprobarLetras(letra) && palabraSecreta.includes(letra)) {
            
            for (let i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] === letra) {
                    escribirLetraCorrecta(i);
                }
            }

        } else {
            anhadirLetraIncorrecta(letra);
            escribirLetraIncorrecta(letra, errores);
        }
        
    }
}