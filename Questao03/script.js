class Transacao {
    constructor(descricao, valor) {
        this.descricao = descricao;
        this.valor = parseFloat(valor);
    }
}
const tabelatransacao = document.getElementById('tabelatransacao');
const transacaobody = document.getElementById('transacaobody');
const total = document.getElementById('total');
const formulario= document.querySelector("#formulariotabela");
let saldo=0;
formulario.addEventListener('submit', (event)=> {
    event.preventDefault();
    
    const descricao = document.getElementById('descricao').value;
    const valor = document.getElementById('valor').value;
    const transacao = new Transacao(descricao, valor);
    adicionarTransacao(transacao);
    event.target.reset();
});

function adicionarTransacao(transacao) {
    const row = transacaobody.insertRow(-1);
    const descricaorow = row.insertCell(0);
    const valorrow = row.insertCell(1);

    descricaorow.textContent = transacao.descricao;
    valorrow.textContent = transacao.valor.toFixed(2);

    if (transacao.valor < 0) {
        valorrow.classList.add('negative');
    } else {
        valorrow.classList.add('positive');
    }

    saldo += transacao.valor;
    total.textContent = saldo.toFixed(2);
}