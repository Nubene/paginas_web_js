class App {
    constructor() {
        let nodo1 = document.querySelector('div p')
        console.dir(nodo1)
        let nodo2 = document.querySelector('.importante')
        console.dir(nodo2)
        let nodo3 = document.querySelector('#p1')
        console.dir(nodo3)
        let aNodos = document.querySelectorAll('p')
        console.dir(aNodos)
        aNodos.forEach(
            (node) => { node.innerHTML = 'Ja, Ja'}
        )
    }
}

document.addEventListener('DOMContentLoaded', 
    () => { new App()})