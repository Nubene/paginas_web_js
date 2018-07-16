// OBJETOS

function algo(x) {}

let o = {
    o1: {}
}

algo(o)
algo({})

// FUNCIONES

function otra(x) {
    let f = x()
}

let o = function () {
    let o1 = function () {}
}

otra(o)
otra(function () {})

// Formas de crear funciones


// Declaracion
function suma1(a,b) {
    return a+b
}

// Asignación
let suma2 = function (a,b) {
    return a+b
} 

// ES6 Funciones Arrow o Lambdas (una forma espefial de asignacion)
let suma3a = (a,b) => {return a+b} 
let suma3a = (a,b) => a+b //se pueden obviar las llaves y el return en enma script6)
let cuadrado = a => a*a // cuando el parámetro es  unico puedo obvia los parentesis
                                                                                                                                                                                              
let z = suma1(5,6)
console.log(z);
console.log(suma2(5,6));