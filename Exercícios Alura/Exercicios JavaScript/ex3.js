alert('Vou te dizer se o número digitado é positivo ou negativo!');

let numero = prompt('Digite um número');

numero = Number(numero);

if (numero > 0) {
    alert ('O número é positivo :)');
}

if ( numero < 0) {
  alert ('O número é negativo :)');
} 

if (numero == 0) {
    alert ('O número é zero :)');
} 

if (numero = " ") {
    alert ('Digite algum número :)');
}
