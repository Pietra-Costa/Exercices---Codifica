// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

let prompt = require("prompt-sync")()

let value1 = Number(prompt("Digite um número: "))
let value2 = Number(prompt("Digite um segundo número (diferente do primeiro): "))

if (value1 > value2) {
    console.log("Os números em ordem crescente seria: " + value2 + "e" + value1)
} else {
    console.log("Os números em ordem crescente seria: " + value1 + "e" + value2)
}