//para trabajar con la calculadora se declaran las variables//
let opera1;
let opera2;
let operacion;
//aqui estoy llamando a la funcion init de html es decir a todo el documento//
function init(e) {

    //variables para determinar las teclas de la calculadora//
    let resultado = document.getElementById("resultado"); //existe un elemento que tiene un id dentro del documento//
    let reset = document.getElementById("reset");
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let multiplicacion = document.getElementById("multiplicacion");
    let division = document.getElementById("division");
    let igual = document.getElementById("igual");
    let cero = document.getElementById("cero");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
   
}
//funciones relacionadas con los eventos de los botones de la calculadora //
uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0";
}

reset.onclick = function (e) {
    borrar();
}
suma.onclick = function (e) { //al presionar el boton suma//
    opera1 = resultado.textContent;
    operacion = "+";  //quiere decir que el primer numero que digite (opera1) se mostrara en la casilla llamada resultado y sera contenida y realizara una operacio que este caso es una suma"+"" //
    limpiar();        //aqui teendra que borrarlo de la casilla resultado//
}
resta.onclick = function (e) {
    opera1 = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function (e) {
    opera1 = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function (e) {
    opera1 = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function (e) {
    opera2 = resultado.textContent;
    resolver();
}
//aqui crearemos el boton reset "c"//
function borrar() {
    resultado.textContent = "";
    opera1 = 0;
    opera2 = 0;
    operacion = "";
}
function limpiar() {
resultado.textContent = "";
     //el contenido sera cero//

}
function resolver() {
    var res; //la inicializamos con cero y representa lo siguiente//
    switch (operacion) { //creamos una caja donde si no es una cosa es otra como dijo la chimoltrufia programadora en ese entonces//
        case "+":
            res = parseFloat(opera1) + parseFloat(opera2); //parseint si es numero entero//
            break;
        case "-":
            res = parseFloat(opera1) - parseFloat(opera2);
            break;
        case "*":
            res = parseFloat(opera1) * parseFloat(opera2);
            break;
        case "/":
            res = parseFloat(opera1) / parseFloat(opera2);
            break;
    }
    borrar() ;  
    resultado.textContent = res;
}