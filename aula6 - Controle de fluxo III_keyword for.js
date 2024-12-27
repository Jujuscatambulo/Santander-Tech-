//Aula 6 -Controle de fluxo III: keyword for
/*For - mais verboso e iperativo (mais voltado para a máquina)*/
const listaNumeros = [33, 131, 155, 555, 222, -21, -56]
const usuarios = ["José", "Antonio"]

for (let contador =0; contador < listaNumeros.length; contador ++){
    console.log(listaNumeros[contador])
}

console.log("Print via while\n")
let indiceNumero = 0
while (indiceNumero < listaNumeros.length){
    console.log(listaNumeros[indiceNumero])
    indiceNumero += 1
}

/*For-of (usado para arrays)*/ 
console.log("Print via for\n")
for (let numero of listaNumeros){
    console.log(numero)
}

for (const usu of usuarios){
    console.log(usu)
}

/* Objetos */ 
const animal = {
    especie: 'Canis lupos',
    habitatComum: 'Florestas dos EUA',
    expectativaVida: 20, 
    terrestre: true
}
console.log(animal.especie)

animal.população = 1_000 //o underline ´eum separador para a visualização de numeros grandes ficar melhor 

/* For-in (usado para objetos) */ 
const user = {
    name: "José moTa",
    email: "JOSEmota@gmail.com",
    idade: 20,
    endeereco: "Rua Xis, 123"
}

for(const prop in user){
    if(prop === "name"){
        const names = user[prop].split(' ')
        user[prop] = "" //limpa o nome

        for(const name of names){
            const normalizedName = name.toLowerCase()
            const [primeiraLetra, ...restoNome] = normalizedName //desetrutura o array com rest operator (...)
            
            user[prop] = user[prop] + ' '+ primeiraLetra.toUpperCase() + restoNome.join("")
            user[prop] = user[prop].trim()

        }
    } if(prop === "email"){
        user[prop] = user[prop].toLowerCase()
    }
}

console.log(user)


