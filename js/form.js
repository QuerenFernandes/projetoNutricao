//CRIANDO EVENTO - SALVAR OS DADOS INSERIDOS NO FORMULÁRIO

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    //Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);   
    //Criando Tr e Td
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if(erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    if (!validaPaciente(paciente)){
        alert("Paciente Inválido!");
        return;
    }

    // Adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

// Criando e adicionando lista de erros
function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    //funcao para zerar a lista de erros criada no html.
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

//Extraindo informações do paciente do form
function obtemPacienteDoFormulario (form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }
    
    return paciente;
}

//Criando Tr e Td
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");  

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd (dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];
    //como o if é declarado em apenas uma linha, podemos eliminas as chaves, o js entende e o código fica otimizado.
    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");

    if(!validaAltura(paciente.altura)) erros.push("Altura é inválida");

    if(paciente.nome.length == 0) {
        erros.push("O nome não pode estar em branco");
    }

    if(paciente.peso.length == 0) {
        erros.push("O peso não pode estar em branco");
    }

    if(paciente.altura.length == 0) {
        erros.push("A altura não pode estar em branco");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode estar em branco");
    }

    return erros;
}