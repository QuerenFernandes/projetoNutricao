var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes ...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

    var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            console.log(resposta);
            console.log(typeof resposta); //mostra o tipo do elemento que está sendo buscado, no caso string.
            var pacientes = JSON.parse(resposta);
    
           pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
           });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("invisivel");
        }

    });

    xhr.send();

});