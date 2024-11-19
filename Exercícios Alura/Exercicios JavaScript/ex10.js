// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número,
//  usando um loop while no console do navegador.

// Solicita ao usuário um número final
let numero = parseInt(prompt("Digite um número para a contagem progressiva:"));

// Verifica se o número é válido
if (!isNaN(numero) && numero >= 0) {
    let contador = 0; // Inicializa o contador em 0
    while (contador <= numero) { // Continua enquanto o contador for menor ou igual ao número
        console.log(contador); // Exibe o número atual no console
        contador++; // Incrementa o contador
    }
} else {
    console.error("Por favor, insira um número válido (maior ou igual a 0).");
}
