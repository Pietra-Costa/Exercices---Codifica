// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

const prompt = require("prompt-sync")()
const numero = Number(prompt("Digite um número: "))

for (let index = 1; index <= 10; index++) {
    console.log(numero * index)

}