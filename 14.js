// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite um número inteiro: "));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`O fatorial de ${numero} é ${fatorial}`);
