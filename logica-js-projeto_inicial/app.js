// Criamos a mensagem inicial do jogo
alert("Bem vindo ao jogo do advinhe");
let numeroMaximo = 1000;
// Definindo o número secreto
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
// Criando variável para armazenar o chute do usuário
let chute;
let tentativas = 0;
// Criando o loop para o jogo
while (chute != numeroSecreto) {
    // Pedindo para o usuário digitar o seu chute
    chute = prompt("Escolha um número de 1 a " + numeroMaximo);
    // Verificando se o usuário acertou
    if (chute == numeroSecreto) {
        alert("Você acertou o número secreto!! Número: " + numeroSecreto);
        tentativas++;
    } else {
        if (chute < numeroSecreto) {
            alert("O número secreto é maior que: " + chute);
        } else {
            alert("O número secreto é menor que: " + chute);
        }
        tentativas++;
    }
}
// Criando uma variável para uma mensagem alternativa 
// e retornando a mensagem personalizada de acordo com a quantidade de acertos
let tentativasMensagem = tentativas > 1 ? "tentativas." : "tentativa."
alert("Você descobriu o número secreto " + numeroSecreto + " com " + tentativas + " " + tentativasMensagem);