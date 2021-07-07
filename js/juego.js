var canvas;
var ctx;
var FPS = 50;

var anchoCanvas = 400;
var altoCanvas = 640;

var anchoTablero = 10;
var altoTablero = 16;

var anchoF = 40;
var altoF = 40;

//(12x17) - (10x16)
var tablero = 
[[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1]
];


var pieza;

var objPieza = function(){
    this.x = 0;
    this.y = 0;

    console.log('piezaCreada')
}

function inicializaTeclado(){
    document.addEventListener('keydown', function(tesla){
        if(tesla.keyCode == 38){
            console.log('arriba');
        }
        if(tesla.keyCode == 40){
            console.log('abajo');
        }
        if(tesla.keyCode == 37){
            console.log('izquierda');
        }
        if(tesla.keyCode == 39){
            console.log('derecha');
        }

    });
}

function inicializa(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.style.width = anchoCanvas;
    canvas.style.height = altoCanvas;

    pieza = new objPieza();

    inicializaTeclado();

    setInterval(function(){
        principal();
    },1000/FPS);
}




function borrarCanvas(){
    canvas.width = anchoCanvas;
    canvas.height = altoCanvas;
}

function principal(){
    borrarCanvas();
    console.log('bucle');

}