// Adiciona valor à tela da calculadora
function adicionarValor(valor) {
    document.getElementById('tela').value += valor;
}

// Calcula o valor na tela
function calcular() {
    let expressao = document.getElementById('tela').value;
    try {
        let resultado = eval(expressao); // Avalia a expressão matemática
        document.getElementById('tela').value = resultado;
    } catch (e) {
        document.getElementById('tela').value = 'Erro';
    }
}

// Limpa a tela
function limparTela() {
    document.getElementById('tela').value = '';
}

function apagarUtimoDigito() {
    let valorAtual = document.getElementById('tela').value;
    document.getElementById('tela').value = valorAtual.slice(0, -1);
}