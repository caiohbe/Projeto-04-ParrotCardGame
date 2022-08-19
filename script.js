let qtt = prompt('Com quantas cartas você deseja jogar? (4-14 apenas par)')

while (qtt < 4 || qtt > 14 || qtt % 2 !== 0) {
    qtt = prompt('Com quantas cartas você deseja jogar? (4-14 apenas par)')  
}


const parrots = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif',
 'unicornparrot.gif'] 

function comparator() { 
	return Math.random() - 0.5; 
}
parrots.sort(comparator)


let game = []
for(let i = 0; i < qtt/2; i++) {
    game.push(parrots[i], parrots[i])
}

game.sort(comparator)

const parrotList = document.querySelector(".cards")
for(let i = 0; i < qtt; i++) {
    parrotList.innerHTML += `
    <span><div onclick="turn(this)"><img src="imgs/parrot.png" alt=""></div><div class="unturned"><img src="imgs/${game[i]}" alt=""></div></span>
    `
}

let cardContent = ""
let card1 = ""
let card2 = ""
let fails = 0
let correct = 0

function unturn(card) {
    fails += 1
    cardContent = ""
    card.classList.remove('turn')
    adjacent.classList.remove('turned')

    card1.classList.remove('turned')
    card1Verse.classList.remove('turn')
}

function turn(card) {
    card.classList.add('turn')
    adjacent = card.nextElementSibling
    adjacent.classList.add('turned')

    if (cardContent === "") {
        cardContent = adjacent.innerHTML
        card1 = adjacent
        card1Verse = card
    } else {
        if (adjacent.innerHTML == cardContent) {
            cardContent = ""
            correct += 1
            if (correct == qtt/2) {
                alert(`Você ganhou em ${(fails + correct) * 2} rodadas!`)
            }
        } else {
            setTimeout(unturn, 1000, card)
        }
    }
}