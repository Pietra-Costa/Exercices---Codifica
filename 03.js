// Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")()
const grade = Number(prompt("Digite sua nota de 0 a 10: "))

if (grade < 5) {
    console.log("Você está reprovado")
} else if (grade <= 7) {
    console.log("Você está de recuperação")
} else {
    console.log("Você está aprovado!")
}