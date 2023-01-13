var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event){

    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){ //função de tempo pro js ter um delay para excluir o evento
        event.target.parentNode.remove();
    }, 500);
    
});
//CÓDIGO COMPLETO - OTIMIZADO EM UMA ÚNICA LINHA ACIMA
    /*
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // Tr = paciente = remover
    paiDoAlvo.remove();
});
*/