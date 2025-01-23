/*let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del número secreto";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número del 1 al 10";
*/


// Forma generalizada y más organizada para introducir textos
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log (numeroSecreto);

function asignarElementoTexto (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarNumero() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        asignarElementoTexto('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento': 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (numeroUsuario > numeroSecreto) {
            asignarElementoTexto('p', 'El número secreto es menor');
        }else {
            asignarElementoTexto('p', 'El número secreto es mayor');
        } 
        intentos++
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';
       // '' indica vacio, por eso borra el contenido de la caja

    return;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo ){
        asignarElementoTexto('p','Ya se sortearon todos los números posibles');
    }else {

        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarElementoTexto('h1', 'Juego del número secreto');
    asignarElementoTexto('p', `Indica un número de 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    // limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de número
    // generar el número aleatorio
    // Inicializar el número intentos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

