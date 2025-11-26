let displayValue = ''; // Variável para armazenar o valor atual exibido na tela
let currentOperation = ''; // Variável para armazenar a operação atual (soma, subtração, etc.)
let previousValue = null; // Variável para armazenar o valor anterior, antes de realizar a operação

// Função para adicionar números ao display
function addToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

// Função para realizar a operação escolhida
function operate(operation) {
    if (previousValue === null) {
        previousValue = parseFloat(displayValue); // Armazenar o valor atual como o anterior
        displayValue = ''; // Limpar o display para o próximo número
    }
    currentOperation = operation;
}

// Função para calcular o resultado
function calculateResult() {
    if (previousValue !== null && displayValue !== '') {
        let currentNumber = parseFloat(displayValue);
        let result;
        switch (currentOperation) {
            case 'soma':
                result = previousValue + currentNumber;
                break;
            case 'subtracao':
                result = previousValue - currentNumber;
                break;
            case 'multiplicacao':
                result = previousValue * currentNumber;
                break;
            case 'divisao':
                if (currentNumber !== 0) {
                    result = previousValue / currentNumber;
                } else {
                    alert('Não é possível dividir por zero!');
                    result = 'Erro';
                }
                break;
            default:
                return;
        }
        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
        previousValue = null; // Limpar o valor anterior após calcular
        currentOperation = ''; // Limpar a operação após calcular
    }
}

// Função para limpar o display
function clearDisplay() {
    displayValue = '';
    previousValue = null;
    currentOperation = '';
    document.getElementById('display').value = '';
}
