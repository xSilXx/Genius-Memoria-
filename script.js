let order = [];
let clickedOrder = [];
let score = 0;

// 0 - blue
// 1 -red
// 2 -yellow
// 3 -green

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

let shuffleOrder = () => {
	let colorOrder = Math.floor(Math.random() * 4);
	order[order.length] = colorOrder;
	clickedOrder = [];

	for (let i in order) {
		let elementColor = createColorElement(order[i]);
		lightColor(elementColor, Number(i) + 1);
	}

}

let lightColor = (element, number) => {
	number = number * 250;
	setTimeout(() => {
		element.classList.add('selected');
	}, number - 125);

	setTimeout(() => {
		element.classList.remove('selected');
	});
}

let checkOrder = () => {
	for(let i in clickedOrder){
		if(clickedOrder[i] != order[i]){
			gameOver();
			break;
		}
	}

	if(clickedOrder.length == order.length){
		alert(`Pontuação: ${score}\nVocê acertou!`);
		nextLevel();
	}
}

let click = (color) => {
	clickedOrder[clickedOrder.length] = color;
	createColorElement(color).classList.add('selected');

	setTimeout(() => {
		createColorElement(color).classList.remove('selected');
		checkOrder();
	},250); 
	
}

let createColorElement = (color) => {
	if(color == 0){
		return blue;
	}else if(color == 1){
		return red;
	}else if(color == 2){
		return yellow;
	}else if(color == 3){
		return green;
	}
}


let nextLevel = () => {
	score++;
	shuffleOrder();
}

let gameOver = () => {
	alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClick em Ok para iniciar um novo jogo`);
	order = [];
	clickedOrder = [];

	playGame();
}

let playGame = () => {
	alert(`Bem vindo ao Genesis\nIniciando novo jogo`);
	score = 0;

	nextLevel();
}


blue.onclik = () => click(0);
red.onclik = () => click(1);
yellow.onclik = () => click(2);
green.onclik = () => click(3);

playGame();
