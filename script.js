let qtt = prompt('Com quantas cartas você deseja jogar? (4-14 apenas par)')

while (qtt < 4 || qtt > 14 || qtt % 2 !== 0) {
    qtt = prompt('Com quantas cartas você deseja jogar? (4-14 apenas par)')  
}


const parrots = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'] 

function comparador() { 
	return Math.random() - 0.5; 
}
parrots.sort(comparador)


let game = []
for(let i = 0; i < qtt/2; i++) {
    game.push(parrots[i], parrots[i])
}

game.sort(comparador)

const parrotList = document.querySelector(".cards")
for(let i = 0; i < qtt; i++) {
    parrotList.innerHTML += `
    <span><div onclick="turn(this)"><img src="imgs/parrot.png" alt=""></div><div class="unturned"><img src="imgs/${game[i]}" alt=""></div></span>
    `
}

function turn(isso) {
    console.log(isso)
    isso.classList.add('turn')

    adjacent = isso.nextElementSibling
    console.log(adjacent)
    adjacent.classList.add('turned')
}