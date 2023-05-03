// punto 1 
const readlineSync = require("readline-sync")

const palabra = readlineSync.question("escriba una palabra")

//for (n=0 ; n <10 ; n++) {
    //console.log(palabra)

//}
console.log(palabra.repeat(10))

// punto 2 

const edad = readlineSync.questionInt("ingrese su edad :")
function imprimirEdad(numero){
    for(i = 1 ; i <= numero  ; i++)
    console.log(  i)
}

imprimirEdad(edad) 

// punto 3

let numerotres = readlineSync.questionInt("numero")
let mostrar = []
for(i=1 ; i<=numerotres ; i=i+2){ 
    mostrar.push(i)
    
}
 console.log(mostrar)

 //punto 4

 let numerocuatro = readlineSync.questionInt("numero piramide")
 let cadena = "*"
 for(i=1 ;i<=numerocuatro ;i++){
    console.log(cadena.repeat (i))
    
 }

 //punto 5

 let numeroCinco = readlineSync.question("ingrese la palabra en reversa")
 function deletrear(){
    for ( i = numeroCinco.length -1 ; i >= 0 ; i--){
     console.log(numerocinco [i] );
     }return " " ;
        
 }

 console.log(deletrear(numeroCinco))