// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require("prompt-sync")()

let number = Number(prompt("Digite um número para verificarmos se é par ou ímpar: "))

if (number % 2 == 0) {
    console.log("O seu número é par")
} else {
    console.log("Seu número é ímpar")
}