let nomesAmigos = [];

function adicionarAmigo(){
    let campoNome = document.getElementById('amigo');
    let nomeAmigo = campoNome.value;
    let resultado = document.getElementById('resultado');

    if(!nomeAmigo){
        alert('Por favor, insira um nome válido!');
        return;
    }

    if(resultado.value != ""){
        resultado.innerHTML="";
    }

    nomesAmigos.push(nomeAmigo);
    campoNome.value = "";
    campoNome.focus();
    atualizarListaAmigos();
}

function atualizarListaAmigos(){

    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for(let contador = 0; contador < nomesAmigos.length; contador++){
        let novoLi = document.createElement('li');
        novoLi.innerHTML = nomesAmigos[contador];
        listaAmigos.appendChild(novoLi);
    }
}

function sortearAmigo(){
    if (nomesAmigos.length<1) {
        alert('A lista está vazia, por favor insira um nome para ser sorteado!');
        return;
    }
    let nomeSorteado = nomesAmigos[parseInt(Math.random() * nomesAmigos.length)];
    console.log(nomeSorteado);
    let resultado = document.getElementById('resultado');
    nomesAmigos = [];
    atualizarListaAmigos();
    resultado.innerHTML = "O amigo secreto sorteado foi: "+nomeSorteado;
}