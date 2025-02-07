// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombres = [];
let numeroDeNombres = 0;
let nombre = ''
let lista = ''
let = numeroAleatorio = 0

function agregarAmigo(){

    let nombre = document.getElementById('amigo').value

    if (nombre == ""){
        alert("ingresa un nombre")
    }
    else{

    listaNombres.push(nombre)
    console.log(listaNombres)
    console.log((listaNombres).length)
    amigo.value = ''

    imprimirLista()

    }
}

function imprimirLista(){
    let lista = document.querySelector('#listaAmigos')
    lista.innerHTML = ""
    for(let i=0 ; i< listaNombres.length; i++){
        let lis = document.createElement("li")
        lis.textContent = listaNombres[i]
        lista.appendChild(lis)
    }
}

function sortearAmigo(){
if(listaNombres == ""){
    alert("ingresa un nombre para poder sortearlo")
}
else{
    numeroAleatorio = Math.floor(Math.random()*listaNombres.length)
    console.log(numeroAleatorio)

    let resultado = document.getElementById("resultado")
    resultado.innerHTML = listaNombres[numeroAleatorio]
}
}

