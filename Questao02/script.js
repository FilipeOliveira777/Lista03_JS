const botao = document.querySelector("#adicionar");
const div = document.querySelector("#div")
const nome = document.querySelector("#nome")
const saldo = document.querySelector("#saldo");
const documento = document.querySelector("#documento");
let clientes = [];

botao.addEventListener('click', (event) => {
    event.preventDefault();
    if (nome.value && saldo.value && documento.value) {
        class ClienteBanco {
            constructor(nome, saldo, documento) {
                this.nome = nome;
                this.saldo = parseFloat(saldo);
                this.documento = documento;
            }
            depositar() {
                this.saldo += 100;
            }
            sacar() {
                if (this.saldo >= 100) {
                    this.saldo -= 100;
                } else {
                    alert("Saldo insuficiente");
                }
            }
        }

        const novoCliente = new ClienteBanco(nome.value, saldo.value, documento.value);
        clientes.push(novoCliente);
        div.innerHTML = '';
        exibirClientes();
        nome.value = "";
        saldo.value = "";
        documento.value = "";
    } else {
        alert('Preencha todos os campos antes de adicionar um novo cliente.');
    }
});

function exibirClientes() {
    const clientesListados = document.querySelector('#div');
    clientesListados.innerHTML = '';

    clientes.forEach((cliente, index) => {
        const clienteDiv = document.createElement('div');
        clienteDiv.classList.add('cliente');

        clienteDiv.innerHTML = `
            <p><strong>Nome:</strong> ${cliente.nome}</p>
            <p><strong>Documento:</strong> ${cliente.documento}</p>
            <p><strong>Saldo:</strong> ${cliente.saldo}</p>
            <button onclick="depositar(${index})">Depositar R$100</button>
            <button onclick="sacar(${index})">Sacar R$100</button>
        `;

        clientesListados.appendChild(clienteDiv);
    });
}

function depositar(clienteindice) {
    clientes[clienteindice].depositar();
    exibirClientes();
}
function sacar(clienteindice) {
    clientes[clienteindice].sacar();
    exibirClientes();
}
