/* function calcular() {
  const botonprimernumero = document.querySelector("#primernumero").value;
  const botonsegundonumero = document.querySelector("#segundonumero").value;
  const botonoperacion = document.querySelector("#operacion").value;
  const botonr;
  switch (operacion) {
    case "+":
      r = parseInt(primernumero) + parseInt(segundonumero);
      break;
    case "-":
      r = parseInt(primernumero) - parseInt(segundonumero);
      break;
    case "*":
      r = parseInt(primernumero) * parseInt(segundonumero);
      break;
    case "/":
      r = parseInt(primernumero) / parseInt(segundonumero);
      break;
    default:
      r = 0;
      break;
  }
  console.log(r);
} */
const operandoa = "";
const operandob = "";
const operacion = undefined;


const botonRefrech = document.getElementById("refrech");
const botonCero = document.getElementById("cero");
const botonUno = document.getElementById("uno");
const botonDos = document.getElementById("dos");
const botonTres = document.getElementById("tres");
const botonCuatro = document.getElementById("cuatro");
const botonCinco = document.getElementById("cinco");
const botonSeis = document.getElementById("seis");
const botonSiete = document.getElementById("siete");
const botonOcho = document.getElementById("ocho");
const botonNueve = document.getElementById("nueve");
const botonDivision = document.getElementById("division");
const botonMultiplicacion = document.getElementById("multiplicacion");
const botonResta = document.getElementById("suma");
const botonSuma = document.getElementById("resta")[0];
const botonIgual = document.getElementById("igual")[0];
const botonRefrech = document.getElementById("refrech");
var resultado = document.getElementById("casilla")


  uno.forEach(function (boton) {
    boton.addEventListener("click" , function(){
      agregarnumero(boton.innerText); 
    })
  })

      

  dos.onclick = function () {
    casilla.textContent = casilla.textContent + "2";
  }
  tres.onclick = function () {
    casilla.textContent = casilla.textContent + "3";
  }
  cuatro.onclick = function () {
    casilla.textContent = casilla.textContent + "4";
  }
  cinco.onclick = function () {
    casilla.textContent = casilla.textContent + "5";
  }
  seis.onclick = function () {
    casilla.textContent = casilla.textContent + "6";
  }
  siete.onclick = function () {
    casilla.textContent = casilla.textContent + "7";
  }
  ocho.onclick = function () {
    casilla.textContent = casilla.textContent + "8";
  }
  nueve.onclick = function () {
    casilla.textContent = casilla.textContent + "9";
  }
  cero.onclick = function () {
    casilla.textContent = casilla.textContent + "0";
  }


  refrech.onclick = function () {
    resetear/limpiar();
  }
  suma.onclick = function () {
    operandoa = casilla.textContent;
    operacion = "+";
    limpiar();
  }
  resta.onclick = function () {
    operandoa = casilla.textContent;
    operacion = "-";
    limpiar();
  }
  multiplicacion.onclick = function () {
    operandoa = casilla.textContent;
    operacion = "*";
    limpiar();
  }
  division.onclick = function () {
    operandoa = casilla.textContent;
    operacion = "/";
    limpiar();
  }
  igual.onclick = function () {
    operandoab = casilla.textContent;
    resolver();
  }


function limpiar() {
  operandoa = "";
  operandob = "";
  operacion = undefined;
  }

function resetear() {
  casilla.textContent = "";
  operandoa = "";
  operandob = "";
  operacion = undefined;
}

function resolver() {
  const res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;

    case "-":
      res = parseFloat(operandoa) - parseFloat(operandob);
      break;

    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;

    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
}




