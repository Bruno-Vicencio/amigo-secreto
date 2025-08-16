// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista donde guardaremos los nombres
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    //Validar si el nombre ya existe.
    if (amigos.some(a => a.toLowerCase() === nombre.toLowerCase())) {
    alert('Ese nombre ya está en la lista.');
    return;
}

    amigos.push(nombre);
    input.value = ""; // Limpiar campo
    mostrarLista();
}

