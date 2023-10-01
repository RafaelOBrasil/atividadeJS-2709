const um = document.querySelector("#um");
const dois = document.querySelector("#dois");
const tres = document.querySelector("#tres");
const quatro = document.querySelector("#quatro");
const cinco = document.querySelector("#cinco");
const seis = document.querySelector("#seis");
const sete = document.querySelector("#sete");
const deck = document.querySelector(".vDeck");

let i = 0;
let cartas = 52;

um.style.display ="none"
dois.style.display ="none"
tres.style.display ="none"
quatro.style.display ="none"
cinco.style.display ="none"
seis.style.display ="none"
sete.style.display ="none"

function darCartas() {
    
    i++

    if (i > 0) {
        um.style.display = "block";
        deck.innerHTML = cartas-1
    }if (i > 1) {
        dois.style.display = "block"
        deck.innerHTML = cartas-3
    }if (i > 2) {
        tres.style.display = "block"
        deck.innerHTML = cartas-6
    }if (i > 3) {
        quatro.style.display = "block"
        deck.innerHTML = cartas-10
    }if (i > 4) {
        cinco.style.display = "block"
        deck.innerHTML = cartas-15
    }if (i > 5) {
        seis.style.display = "block"
        deck.innerHTML = cartas-21
    }if (i > 6) {
        sete.style.display = "block"
        deck.innerHTML = cartas-28
    }
}

