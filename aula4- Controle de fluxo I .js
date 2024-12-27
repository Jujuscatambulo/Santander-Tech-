//Aula 4 - Controle de fluxo I 

//Maior, menor ou igual 
const num1 = 20
const num2 = 100

if (num1 > 1){
    console.log(`${num1} é maior que 1`)
}

if (num1 > 200){
    console.log(`${num2}  é maior que 200`)
} else {
    console.log(`${num2}  é menor ou igual a 200`)
}

if (num2 <= num1){
    console.log(`O número ${num1} é menor ou igual a ${num2}`)
} 

//Igualdade
const numCorreto = 30
const numString = "30"

if (numCorreto == numString){
    console.log("Os números são iguais em valor apenas, e podem ter ocorrido coerções implícitas")
} 
if (numCorreto === numString){
    console.log("Os números são iguais em valor e tipo")
}

//Operadores Booleanos
if (true){
    console.log("Expressão verdadeira")
}

if (false){
    console.log("Nunca aparecerei")
}

console.log(true||true)
console.log(true||false)
console.log(false||false)

console.log(true && true)
console.log(true && false)
console.log(false && false)

//Truthy e Falsy
/* Verdadeiro */
console.log(!![], !!{}, !!1, !!"string n vazia")

if ([] && {} && 1 && "string n vazia"){
    console.log("Tudo é Truthy")
}

/* Falso */
console.log(!!null, !!undefined, !!"", !!NaN)

//Ternários
const idade = 19
const temCNH = true
const podeDirigir = idade > 18 && temCNH


if(podeDirigir){
    console.log("Pessoa está habilitada para conduzir um veículo")
}else{
    console.log("Não pode dirigir")
}

const numPassageiros = podeDirigir ? 4 : 0 
console.log(numPassageiros)

/* 
depois da ? = caso seja vdd (if)
depois dos : = caso seja falso (else) 

let numPassageiros

if(podeDirigir){
    numPassageiros = 4
}else{
    numPassageiros = 0
}
*/ 





