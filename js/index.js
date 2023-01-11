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


    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso Inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        /*NÃO APLICAR O ESTILO DIRETAMENTE NO JS, CRIAR UMA CLASSE NO CSS.
        paciente.style.color = "black";
        paciente.style.backgroundColor = "#FF6464";
        */
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
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
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2); //funcao - limita a quantidade de casas decimais
    }
}

//CRIANDO EVENTO - SALVAR OS DADOS INSERIDOS NO FORMULÁRIO

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(nomeTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});