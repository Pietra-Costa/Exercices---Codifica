// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let prompt = require("prompt-sync")()

let appleNum = Number(prompt("Quanta maçãs você comprou? "))

if (appleNum < 6) {
    let total = appleNum * 0.30
    console.log("Você irá pagar R$ 0,30 por maçã, resultando em: R$" + total)
} else if (appleNum >= 6 && appleNum < 12) {
    let total2 = appleNum * 0.45
    console.log("Você irá pagar por maçã R$0,45, resultando em:  R$" + total2)
} else {
    let total3 = appleNum * 0.25
    console.log("Você irá pagar por maçã R$0,25, resultando em:  R$" + total3)
}