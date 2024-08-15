let tn1 = document.querySelector('#txt1');
let tn2 = document.querySelector('#txt2');
let resultado = document.querySelector('#divResultado');

function calcular() {
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);

    let soma = n1 + n2;
    let subtracao = n1 - n2;
    let multiplicacao = n1 * n2;
    let divisao = n1 / n2

    resultado.innerHTML = `
        <p>A soma entre ${n1} e ${n2} é igual a <strong>${soma}</strong></p>
        <p>A subtração entre ${n1} e ${n2} é igual a <strong>${subtracao}</strong></p>
        <p>A multiplicação entre ${n1} e ${n2} é igual a <strong>${multiplicacao}</strong></p>
        <p>A divisão entre ${n1} e ${n2} é igual a <strong>${divisao}</strong></p>
    `;
}

document.querySelector('button').addEventListener('click', calcular);
