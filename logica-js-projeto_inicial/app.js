alert("Bem vindo ao jogo do advinhe");
let chute = prompt("Digite aqui o seu chute:");
let numeroSecreto = 5;
if (chute == numeroSecreto) {
    alert("Você acertou o número secreto!! Número: " + numeroSecreto);
} else if (chute > numeroSecreto) {
    alert("O número secreto é menor que o número informado.");
} else {
    alert("O número secreto é maior que o número informado");
}