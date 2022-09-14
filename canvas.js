
function dibujarCanvas() {
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle ="#f3f5f6";
    tablero.strokeStyle = "#8a3871";
    
    //Rellenar canvas e iniciarlo
    tablero.fillRect(0, 0, 1200, 500);
    tablero.beginPath();

    //Crear base
    tablero.moveTo(650, 290);
    tablero.lineTo(900, 290);
    
    //Crear poste
    tablero.moveTo(775, 290);
    tablero.lineTo(775, 10);

    //Crear soporte
    tablero.moveTo(775, 10);
    tablero.lineTo(900, 10);
    
    //Crear lazo
    tablero.moveTo(900, 10);
    tablero.lineTo(900, 60);

    //Cabeza
    tablero.moveTo(900, 60);

    tablero.stroke();
    tablero.closePath();
}

function dibujarLinea() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle ="#f3f5f6";
    tablero.strokeStyle = "#8a3871";

    let anchura = 600 / palabraSecreta.length;

    for (let i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(500 + (anchura*i), 372);        
        tablero.lineTo(550 + (anchura*i), 372);        
    }

    tablero.stroke();
    tablero.closePath();
}