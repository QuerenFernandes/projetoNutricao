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

/*COLOCANDO CONDIÇÕES PARA O CÁLCULO*/
var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso Inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso Inválido!";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Peso Inválido!");
    alturaEhValida = false;
    tdImc.textContent = "Altura Inválida!";
}

if (pesoEhValido && alturaEhValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}



console.log(paciente);
console.log(peso);
console.log(altura);
console.log(imc);