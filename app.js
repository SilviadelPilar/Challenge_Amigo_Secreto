let amigosInscritos = [ ];

function agregarAmigo () {
    let amigoAdicionado = document.getElementById("amigo").value; 
     if (amigoAdicionado == "") {
        alert("Por favor, inserte un nombre.");
     }   else {
        amigosInscritos.push(amigoAdicionado);
        limpiarCampo();
        actualizarLista(amigosInscritos);
        }
return; 
}

function limpiarCampo() {
    document.getElementById("amigo").value="";
    document.getElementById("amigo").focus();
return;
}

function actualizarLista(array) {
    document.getElementById("listaAmigos").innerHTML="";
    for (let i = 0; i < array.length; i++) {
        let item = document.createElement("li");
        item.textContent = array[i];
        listaAmigos.appendChild(item);
        }
return; 
}

function sortearAmigo() {
    if (amigosInscritos.length === 0) {
        alert("No existen amigos inscritos");
    } else {
        let amigoSorteado = amigosInscritos[ Math.floor(Math.random()* amigosInscritos.length)];
        document.getElementById("resultado").innerHTML = `El amigo sorteado es ${amigoSorteado}`;
        }
return; 
}