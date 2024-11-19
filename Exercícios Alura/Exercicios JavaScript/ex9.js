// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, 
//usando um loop while no console do navegador.

// Solicita ao usuário um número inicial
let numero = parseInt(prompt("Digite um número para começar a contagem regressiva:"));

// Verifica se o número é válido
if (!isNaN(numero)) {
    while (numero >= 0) {
        console.log(numero); // Exibe o número atual no console
        numero--; // Decrementa o número
    }
} else {
    console.error("Por favor, insira um número válido.");
}
