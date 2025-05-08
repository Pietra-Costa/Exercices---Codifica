// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let prompt = require("prompt-sync")()

let numero = parseInt(prompt("Digite um número inteiro: "));

for (let index = 0; index < 10; index++) {
    console.log(numero)

}