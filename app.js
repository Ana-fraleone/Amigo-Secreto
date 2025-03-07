let amigos = [];
let sorteados = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    let nome = input.value.trim("");

    if (nome === "" || !isNaN(nome)) {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (!window.amigos) {
        window.amigos = [];

    }

    amigos.push(nome);
    atualizarLista();

    input.value = "";
}


function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    (lista.innerHTML = "");
      amigos.forEach((amigo, _index) => {
        const h1 = document.createElement("h1");
        h1.textContent = amigo + (_index < amigos.length - 1 ? "," : "");
        lista.appendChild(h1);
    });
}

function sortearAmigoSecreto() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 participantes.");
        return;
    }

    let indiceSorteado = [...amigos];
    do {
        indiceSorteado.sort(() => Math.random() - 0.1);
    } while (indiceSorteado.some((amigo, h1) => amigo === amigos[h1]));

    let resultadolista = document.getElementById("resultado");
    resultadolista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${amigos[i]} -> ${indiceSorteado[i]}`;
        resultadolista.appendChild(li);
    }
}