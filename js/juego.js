var canvas;
var ctx;
var FPS = 50;

var anchoCanvas = 400;
var altoCanvas = 640;

//DIMENSIONES REALES DE CADA CUADRO DEL TABLERO (40x40 pixels)
var tamanyoFicha = 40;

var anchoTablero = 10;
var altoTablero = 20;

var anchoF = 40;
var altoF = 40;

//(12x17) - (10x16)
var tablero = 
[
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
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1]
];

var tableroCopia = 
[
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
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1]
];

var margenSuperior = 4;

//COLORES DE LAS FICHAS
var rojo = "#FF0000";
var morado = "#800080";
var naranja = "#FF8C00";
var amarillo = "#FFD700";
var verde = "#008000";
var cyan = "#00CED1";
var azul = "#0000CD";


var fichaGrafico= [
    [
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ]
    ],
    
    [
        [
        [0,0,0,0],
        [2,2,2,2],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0]
        ],
    
        [
        [0,0,0,0],
        [2,2,2,2],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0]
        ]
    
    ],
    
    [
        [
        [0,0,0,0],
        [0,0,3,3],
        [0,3,3,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,3,0],
        [0,0,3,3],
        [0,0,0,3],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,0,3,3],
        [0,3,3,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,3,0],
        [0,0,3,3],
        [0,0,0,3],
        [0,0,0,0]
        ]
    
    ],
    
    [
        [
        [0,0,0,0],
        [0,4,4,0],
        [0,0,4,4],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,4],
        [0,0,4,4],
        [0,0,4,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,0],
        [0,4,4,0],
        [0,0,4,4],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,4],
        [0,0,4,4],
        [0,0,4,0],
        [0,0,0,0]
        ]
    
    ],
    
    [
        [
        [0,0,0,0],
        [0,5,5,5],
        [0,5,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,5,0],
        [0,0,5,0],
        [0,0,5,5],
        [0,0,0,0]
        ],
    
        [
        [0,0,0,5],
        [0,5,5,5],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,5,5,0],
        [0,0,5,0],
        [0,0,5,0],
        [0,0,0,0]
        ]
    
    ],
    
    [
        [
        [0,0,0,0],
        [0,6,6,6],
        [0,0,0,6],
        [0,0,0,0]
        ],
    
        [
        [0,0,6,6],
        [0,0,6,0],
        [0,0,6,0],
        [0,0,0,0]
        ],
    
        [
        [0,6,0,0],
        [0,6,6,6],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,6,0],
        [0,0,6,0],
        [0,6,6,0],
        [0,0,0,0]
        ]
    ],
    
    
    [
        [
        [0,0,0,0],
        [0,7,7,7],
        [0,0,7,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,7,0],
        [0,0,7,7],
        [0,0,7,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,7,0],
        [0,7,7,7],
        [0,0,0,0],
        [0,0,0,0]
        ],
    
        [
        [0,0,7,0],
        [0,7,7,0],
        [0,0,7,0],
        [0,0,0,0]
        ]
    ]
    ];

    function reseteaTablero(){
        console.log('resetea')

        for(py=0;py<21;py++){
            for(px=0;px<12;px++){
                tablero[py][px]=tableroCopia[py][px];
            }
        }
    }


var pieza;

var objPieza = function(){
    this.x = 0;
    this.y = 0;

    this.angulo = 0;
    this.tipo = 0;

    this.retraso = 50;
    this.fotograma = 0;


    this.nueva = function(){
        this.tipo = Math.floor(Math.random()*7);
        this.y = 0;
        this.x = 4;
    };

    this.compruebaSiPierde = function(){
        var pierde = false;

        for(px=1;px<anchoTablero+1;px++){
           if( tablero[2][px]>0){
               pierde=true;
           }
        }    
        return pierde;
};

this.limpia = function(){
    var filaCompleta;
    for(py=margenSuperior;py<altoTablero;py++){
        filaCompleta=true;

        for(px=1;px<anchoTablero+1;px++){
            if(tablero[py][px]==0){
                filaCompleta=false;
            }
        }
        if(filaCompleta==true){
            for(px=1;px<anchoTablero+1;px++){
                tablero[py][px]=0;
            }
        }
    }

};

    this.caer = function(){
        if(this.fotograma < this.retraso){
            this.fotograma++;
        }
        else{
            if(this.colision(this.angulo,this.y+1,this.x)==false){
                this.y++;
            }
            else{
                this.fijar();
                this.limpia();
                this.nueva();

                if(this.compruebaSiPierde()==true){
                    reseteaTablero();
                }
            }
            this.fotograma = 0;
            }
    }

    this.fijar = function(){
        for(py=0;py<4;py++){
            for(px=0;px<4;px++){
              if(fichaGrafico[this.tipo][this.angulo][py][px]>0){
                  tablero[this.y+py][this.x+px]= fichaGrafico[this.tipo][this.angulo][py][px]
              }  
            }
        }
     }

    this.colision = function(anguloNuevo,yNueva,xNueva){
        var resultado = false;

        for(py=0;py<4;py++){
            for(px=0;px<4;px++){
                if(fichaGrafico[this.tipo][anguloNuevo][py][px]>0){
                    if(tablero[yNueva+py][xNueva+px]>0){
                        resultado = true;

                    }
                }
            }
        }
        return resultado;
    };

    

    this.dibuja = function(){
        for(py=0;py<4;py++){
            for(px=0;px<4;px++){

                if(fichaGrafico[this.tipo][this.angulo][py][px]!=0){ 
                    
                    if(fichaGrafico[this.tipo][this.angulo][py][px]==1)
                        ctx.fillStyle = rojo;

                    if(fichaGrafico[this.tipo][this.angulo][py][px]==2)    
                        ctx.fillStyle = naranja;
                    
                    if(fichaGrafico[this.tipo][this.angulo][py][px]==3)    
                    ctx.fillStyle = amarillo;

                    if(fichaGrafico[this.tipo][this.angulo][py][px]==4)    
                        ctx.fillStyle = verde;
                    
                    if(fichaGrafico[this.tipo][this.angulo][py][px]==5)    
                    ctx.fillStyle = cyan;

                    if(fichaGrafico[this.tipo][this.angulo][py][px]==6)    
                        ctx.fillStyle = azul;

                    if(fichaGrafico[this.tipo][this.angulo][py][px]==7)    
                    ctx.fillStyle = morado;


                    ctx.fillRect((this.x+px-1)*anchoF, (this.y+py-margenSuperior)*altoF, anchoF, altoF)
                }
            }
        }
    };

    this.rotar = function(){

    var anguloNuevo = this.angulo;
        if(this.angulo < 3 ){
            anguloNuevo++;
        }
        else{
            anguloNuevo = 0;
        }

        if(this.colision(anguloNuevo,this.y,this.x)==false){
            this.angulo = anguloNuevo;
        }
        console.log('Rotar')
    };




    
    this.abajo = function(){
        if(this.colision(this.angulo,this.y+1,this.x)==false){
            this.y++
            console.log('Abajo')

        }

    };
    this.derecha = function(){
        if(this.colision(this.angulo,this.y,this.x+1)==false){
            this.x++
            console.log('Derecha')

        }
    };
    this.izquierda = function(){
        if(this.colision(this.angulo,this.y,this.x-1)==false){
            this.x--
            console.log('Izquierda')

        }
    };
    this.nueva();
};


//DIBUJA EL TABLERO CON TODAS LAS FICHAS QUE YA HAN CAÍDO
function dibujaTablero(){
	for(py=margenSuperior;py<=altoTablero;py++){
		for(px=1;px<=anchoTablero+1;px++){

			if(tablero[py][px]>0){
				if(tablero[py][px]==1)
					ctx.fillStyle=rojo;
				if(tablero[py][px]==2)
					ctx.fillStyle=naranja;
				if(tablero[py][px]==3)
					ctx.fillStyle=amarillo;
				if(tablero[py][px]==4)
					ctx.fillStyle=verde;
				if(tablero[py][px]==5)
					ctx.fillStyle=cyan;
				if(tablero[py][px]==6)
					ctx.fillStyle=azul;
				if(tablero[py][px]==7)
					ctx.fillStyle=morado;

				//A la posición this.py le restamos el margen superior para que dibuje en la zona de la pantalla física que toque
				ctx.fillRect(((this.px-1)*tamanyoFicha),((this.py-margenSuperior)*tamanyoFicha),tamanyoFicha,tamanyoFicha);
			}
		}
	}
}

function inicializaTeclado(){
    document.addEventListener('keydown', function(tesla){
        if(tesla.keyCode == 38){
            pieza.rotar();
        }
        if(tesla.keyCode == 40){
            pieza.abajo();
        }
        if(tesla.keyCode == 37){
            pieza.izquierda();
        }
        if(tesla.keyCode == 39){
            pieza.derecha();
        }
        
    });

    
};

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
    dibujaTablero();
    pieza.caer();
    pieza.dibuja();


}