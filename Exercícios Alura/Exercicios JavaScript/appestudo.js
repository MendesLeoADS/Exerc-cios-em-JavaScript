// Criar um Alerta para a Pessoa que for jogar! (Alert).
alert('Seja bem vindo ao jogo do número secreto!');


// Criar uma variável com JavaScript (let).
let numeroSecreto = parseInt(Math.random() * 30 + 1) ; //Cria um número aleatório e define o número Secreto do Jogo.
console.log (`Olá Desenvolvedor, o número secreto é este: ${numeroSecreto}`); //Só será possivel visualizar na aba Console, após inspecionar a página web.


// Solicitar para que escolha um número dentro de uma escala (prompt).
// Para que o valor digitado fique armazenado (let "nome escolhido para o comando" = prompt).
let chute; // Nomeado "chute" a ação do usuário de escolher um número.
let tentativas = 1; // Nomeado "tentativas" a ação do usuário de tentar um número.


// Função "enquanto" (while) o chute não for igual ( != );
// A ideia é solicitar informações enquanto o número secreto não for o correto.
while (chute != númeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 30');
{
    {



// Adicionar condição (if = "se/ caso" e else = "se/ caso não").
// Dentro dos parenteses adicionar o que queremos comparar, ou seja, qual a condição que queremos verificar.
// Adicionaremos dois sinais iguais (=) quando tivermos a intenção de comparar algo que será digitado com o que já definimos.
if (chute == numeroSecreto) {  // Se o "número secreto" for igual ao "chute" definiremos uma ação a partir da abertura das chaves ( {} ).
    break; // PARA/ STOP o While.
     // A crase, o cifrão e as chaves, se fazem necessárias quando quisermos adicionar um texto junto a uma variável.
 } else { // Se o "número secreto" nãao for igual ao "chute" definieremos uma ação a partir da abertura das chaves ( {} ).
     if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
     } else {
        alert(`O número secreto é maior que ${chute}`);
     }
       tentativas++; //variável +1.
        }
     }
   }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // As tentativas foram maior que 1 ? Se sim, imprimir "tentativas", senão "tentativa".

if (tentativas > 1) {
    alert(`Boa! Você digitou o número ${numeroSecreto} e acertou o número secreto com ${tentativas} tentativas.`);
  } else {
    alert(`Boa! Você digitou o número ${numeroSecreto} e acertou o número secreto com ${tentativas} tentativa.`);
  }

// função parseINT no JS, significa considerar número inteiro (parte inteira).
// função Math.randon() gera números aleatórios de um intervalo definido pelo desenvolvedor.

