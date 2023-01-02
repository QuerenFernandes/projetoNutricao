/*ALTERANDO O TÍTULO*/
var titulo = document.querySelector(".container__titulo");
titulo.textContent = "Tabela de Nutrição";

/*BUSCANDO DADOS DO PACIENTE*/
var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
var imc = peso / (altura * altura);
tdImc.textContent = imc;


console.log(paciente);
console.log(peso);
console.log(altura);
console.log(imc);