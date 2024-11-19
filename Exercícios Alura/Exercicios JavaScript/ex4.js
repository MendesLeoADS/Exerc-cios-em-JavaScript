alert ('Vamos ver se você ganhou com base sua pontuação :)');

let numero = prompt('Digite sua pontuação:');

numero = Number(numero);

if (numero >=100) {
    alert('Parabéns! Você venceu :)');
} else {
    alert('Tente novamente para ganhar :(');
}