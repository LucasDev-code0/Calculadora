let display = document.getElementById("display");

function adicionar(valor) {
    display.value += valor;
}

function limpar() {
    display.value = "";
}

function apagar() {
    display.value = display.value.slice(0, -1);
}

function calcular() {

    try {

        if (display.value === "") {
            return;
        }

        let resultado = eval(display.value);

        display.value = resultado;

    } catch (erro) {

        display.value = "Erro";

    }
}