// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")()

let menu = ("⚽ Menu Interativo - Futebol\n" +
    "Escolha uma opção:\n" +
    "1. Ver próximo jogo do Brasil \n" +
    "2. Calcular a idade de um jogador\n" +
    "3. Ver última escalação do Brasil")

console.log(menu)

let choice = Number(prompt("Escolha um número do menu: "))

switch (choice) {
    case 1:
        console.log("Próxima partida: Brasil x Uruguai - 10/05 às 18h00.")
        break;
    case 2:
        let birthYear = Number(prompt("Digite o ano de nascimento do jogador: "))
        const age = 2024 - birthYear
        console.log("A idade do seu jogador é: " + age)
        break;
    case 3:
        console.log("Escalação da Seleção Brasileira:\nGoleiro: Bento\nDefensores: Wesley, Marquinhos, Murillo, Guilherme Arana\nMeio-campistas: André, Joelinton, Raphinha\nAtacantes: Vinícius Júnior, Rodrygo, Matheus Cunha");
        break;
}

