const capital = document.getElementById('value');
const juros = document.getElementById('fee');
const tempo = document.getElementById('time');
const montante = document.getElementById('total');
const calcular = document.getElementById('calculate');

calcular.addEventListener('click', () => {
    const total = capital.value * (1 + juros.value / 100) ** tempo.value;
    montante.innerHTML = 'R$ ' + total.toFixed(2).replace('.', ',');
});