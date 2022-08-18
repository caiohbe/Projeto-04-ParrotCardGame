let qtt = prompt('Com quantas cartas você deseja jogar? (4-14 apenas par)')

while (qtt < 4 || qtt > 14 || qtt % 2 !== 0) {
    qtt = prompt('Com quantas cartas você deseja jogar? (4-14 apenas par)')  
}


const parrots = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif'] 

function comparador() { 
	return Math.random() - 0.5; 
}
parrots.sort(comparador)


let game = []
for(let i = 0; i < qtt/2; i++) {
    game.push(parrots[i], parrots[i])
}

game.sort(comparador)
console.log(game)

const parrotList = document.querySelectorAll("span")
for(let i = 0; i < qtt; i++) {
    parrotList[i].innerHTML = `<img src="imgs/${game[i]}" alt="">`
    parrotList[i].classList.add('unhidden')
}