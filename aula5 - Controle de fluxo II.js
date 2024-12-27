//Aula 5 - Controle de fluxo II//
/* While */ 
const nomeUsu = ["Joana", "Renata", "Kleber", "Zeca", "Carla"]

// console.log("Olá", nomeUsu[0])
// console.log("Olá", nomeUsu[1])
// console.log("Olá", nomeUsu[2])
// console.log("Olá", nomeUsu[3])

let indiceUsu = 0
let indiceAtual = nomeUsu.length
console.log({ indiceAtual })

while (indiceUsu < indiceAtual){
    console.log("Olá", nomeUsu[indiceUsu])
    indiceUsu += 1 // indiceUsu = indiceUsu + 1
}

//Par ou ímpar em uma lista 
const listaNums = [35, 88, 71, 102, 33, 222, 10, 11, 62]
const listaPar = []
const listaImpar = []

let contador= 0

while(contador < listaNums.length){
    console.log(listaNums[contador])
    if(listaNums[contador] % 2 === 0){
        listaPar.push(listaNums[contador])
    }else{
        listaImpar.push(listaNums[contador])

    }
    contador += 1
}

console.log(listaPar)
console.log(listaImpar)

//Encontra usuário
const listacontatos = ["Paulo", "Selena", "Roger", "Rubens", "Zeca", "Josué", "Natalia", "Bianca"]

let encontrouOuNaoUsu = false 
let contador2 = 0

while(!encontrouOuNaoUsu){
    const usuarioAtual = listacontatos[contador2]
    if(usuarioAtual.startsWith("Z")){
        encontrouOuNaoUsu = true
        console.log(`Usuário encontrado: ${usuarioAtual}`)
    }
    contador2 += 1

    if(contador2 === listacontatos.length){
        encontrouOuNaoUsu = true
        console.log("Usuário não encontrado")
    }
}

/* Do -While */ 
//Encontra usuário com Do-While
do{
    console.log("Rodei?")
    const usuarioAtual = listacontatos[contador2]
    if(usuarioAtual.startsWith("Z")){
        encontrouOuNaoUsu = true
        console.log(`Usuário encontrado: ${usuarioAtual}`)
    }
    contador2 += 1

    if(contador2 === listacontatos.length){
        encontrouOuNaoUsu = true
        console.log("Usuário não encontrado")
    }
} while(!encontrouOuNaoUsu)