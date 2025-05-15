// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require("prompt-sync")()

let soma = 0;

for (let index = 1; index <= 5; index++) {
    let numero = Number(prompt("Digite um número: "))
    soma += numero
}

console.log("A soma foi de: " + soma)

