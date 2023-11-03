
const evento=document.querySelector("#evento");
const data= document.querySelector("#datahora");
const botao=document.querySelector("#adicionar");
let vet=[];
botao.addEventListener('click',() => {
    const eventos = {
        nome: evento.value,
        horario: data.value
    };
    vet.push(eventos);
    vet.sort((a, b) => new Date(a.horario) - new Date(b.horario));
    const ul=document.querySelector("#lista");
    ul.innerHTML = '';
    vet.forEach(event => {
        const itemLista = document.createElement('li');
        itemLista.textContent = `${event.nome} - ${event.horario}`;
        itemLista.classList.add('ul-classe');
        ul.appendChild(itemLista);
    });
    evento.value='';
    data.value='';
    });