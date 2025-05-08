// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.


let prompt = require("prompt-sync")()

let value1 = Number(prompt("Digite o primeiro valor da aresta do seu triângulo: "))
let value2 = Number(prompt("Digite o segundo valor da aresta do seu triângulo: "))
let value3 = Number(prompt("Digite o terceiro valor da aresta do seu triângulo: "))

if (value1 + value2 > value3 && value1 + value3 > value2 && value2 + value3 > value3) {
    if (value1 == value2 && value2 == value3) {
        console.log("Seus valores formam um triângulo e ele é Equilátero")
    } else if (value1 == value2 || value1 == value2 || value2 == value3) {
        console.log("Seus valores formam um triângulo, e ele é do tipo Isóceles")
    } else {
        console.log("Seus valores formam um triângulo e do tipo Escaleno")
    }
} else {
    console.log("Seus valores não formam um triângulo")
}