// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require("prompt-sync")()

let weight = Number(prompt("Digite o seu peso: "))
let height = Number(prompt("Digite o a sual altura: "))


const calculoImc = weight / (height * height)


console.log("Seu IMC é de: " + calculoImc.toFixed(2))
if (calculoImc < 18.5) {
    console.log("Seu IMC se enquadra em Baixo Peso")
} else if (calculoImc >= 18.5 && calculoImc <= 24.9) {
    console.log("Seu IMC se enquadra em Peso Normal")
} else if (calculoImc >= 25 && calculoImc <= 29.9) {
    console.log("Seu IMC se enquadra em Sobrepeso")
} else if (calculoImc >= 30 && calculoImc <= 34.9) {
    console.log("Seu IMC se enquadra em Obesidade I")
} else if (calculoImc >= 35 && calculoImc <= 39.9) {
    console.log("Seu IMC se enquadra em Obesidade II")
} else {
    console.log("Seu IMC se enquadra em Obesidade III")
}

