//ALTERANDO O TÍTULO
var titulo = document.querySelector(".container__titulo");
titulo.textContent = "Tabela de Nutrição";

/*
//BUSCANDO DADOS DO PACIENTE
var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

//COLOCANDO CONDIÇÕES PARA O CÁLCULO
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

*/

/*INSERINDO ARRAY PARA OTIMIZAÇÃO DO CÓDIGO (mesmo código comentado acima)*/

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");


    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) { //testando se o peso é inválido
        console.log("Peso Inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        /*NÃO APLICAR O ESTILO DIRETAMENTE NO JS, CRIAR UMA CLASSE NO CSS.
        paciente.style.color = "black";
        paciente.style.backgroundColor = "#FF6464";
        */
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) { //testando se a altura é inválido
        console.log("Alura Inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida!";
        /*NÃO APLICAR O ESTILO DIRETAMENTE NO JS, CRIAR UMA CLASSE NO CSS.
        paciente.style.color = "black";
        paciente.style.backgroundColor = "#FF6464";
        */
       paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc; 
    }
}

function validaPeso(peso) {
   
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.00){
        return true;
    }else {
        return false;
    }
    
}

function calculaImc (peso, altura) {
    var imc = 0;

    imc = peso / (altura*altura);

    return imc.toFixed(2); //funcao - limita a quantidade de casas decimais
}