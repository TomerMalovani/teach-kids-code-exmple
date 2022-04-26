const ROWS =11;
const COLS =11;

const show_hints = true;

//function that contact to body array of 30x30 div elements
var body = document.querySelector(".container");
var nativeBody = document.querySelector("body");

//function that creates 30x30 div elements

let paintColor = "black";

function changeColor(color) {
	if (color === "brown")
		paintColor = "black";
	else
		paintColor = color;

}

function createDivs(id,color) {
	let cells = []
	var wrapper = document.createElement("div");
	wrapper.className = "wrapper";
	wrapper.id =id;
	wrapper.style.backgroundColor=color
	body.appendChild(wrapper);
	for (var i = 0; i < COLS; i++) {
		for (var j = 0; j < ROWS; j++) {
			var div = document.createElement("div");
			cells.push(div);
			div.className = "cell";

			div.textContent = `[${i},${j}]`;
			div.setAttribute("x", `${i}`);
			div.setAttribute("y", `${j}`);

			wrapper.appendChild(div);
		}
	}
	// create 3 divs and add id to them "yellow","brown","red". append to body
	// let divs = ["yellow", "brown", "red", "black"];
	// divs.forEach(function (div) {
	// 	var newDiv = document.createElement("button");
	// 	newDiv.className = `colorbtn ${div}`;

	// 	// newDiv.textContent = div;
	// 	body.appendChild(newDiv);
	// 	newDiv.addEventListener("click", () => changeColor(div));
	// });

}

function addEventListenerToDivs() {
	let cells = document.querySelectorAll(".cell");

	let activeCell = [];
	 toWinCell = [["2", "3"], ["2", "9"], ["3", "4"], ["3", "8"], ["4", "3"], ["4", "4"], ["4", "5"], ["4", "6"], ["4", "7"], ["4", "8"], ["4", "9"], ["5", "2"], ["5", "3"], ["5", "5"], ["5", "6"], ["5", "7"], ["5", "9"], ["5", "10"], ["6", "1"], ["6", "2"], ["6", "3"], ["6", "4"], ["6", "5"], ["6", "6"], ["6", "7"], ["6", "8"], ["6", "9"], ["6", "10"], ["6", "11"], ["7", "1"], ["7", "3"], ["7", "4"], ["7", "5"], ["7", "6"], ["7", "7"], ["7", "8"], ["7", "9"], ["7", "11"], ["8", "1"], ["8", "3"], ["8", "9"], ["8", "11"], ["9", "4"], ["9", "5"], ["9", "7"], ["9", "8"]]

	for (var i = 0; i < cells.length; i++) {
		cells[i].addEventListener("click", function () {
			if (this.classList.contains("painted")) {
				this.classList.toggle("painted");
				this.style.backgroundColor = "rgb(75, 75, 75)";
				// paintColor = "rgb(36, 32, 32)";
			} else {
				this.classList.toggle("painted");
				this.style.backgroundColor = paintColor;
				// paintColor = "rgb(36, 32, 32)";

			}
			let painted = document.querySelectorAll(".painted");
			// check if painted cells x and y coordinates are in toWinCell array with foreach
			painted.forEach(function (cell) {
				let x = cell.getAttribute("x");
				let y = cell.getAttribute("y");
				// let color=cell.classList[2];
				color = "red"
				win[0].forEach(answer => answer[0] == x && answer[1] == y ? cell.style.backgroundColor = "green" : null);
				if (checkWin(x, y, que) && show_hints) {
					console.log("good");
					win[0].splice(win[0].indexOf(que), 1);	

					que = getRandomItem(win[0]);
					questions.innerText = "column: " + getQuestion(que[0]) + "\n" + "row: " + getQuestion(que[1]);
				
					cell.replaceWith(cell.cloneNode(true));
					console.log(win[0].length)			
				}
			}
			)


		});
	}
}

const win =[[[1, 2], [1, 8], [2, 3], [2, 7], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [4, 1], [4, 2], [4, 4], [4, 5], [4, 6], [4, 8], [4, 9], [5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [5, 9], [5, 10], [6, 0], [6, 2], [6, 8], [6, 10], [7, 0], [7, 2], [7, 8], [7, 10], [8, 3], [8, 4], [8, 6], [8, 7]]]

function solveBtn() {

	let one = [[1, 2], [1, 8], [2, 3], [2, 7], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [4, 1], [4, 2], [4, 4], [4, 5], [4, 6], [4, 8], [4, 9], [5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [5, 9], [5, 10], [6, 0], [6, 2], [6, 8], [6, 10], [7, 0], [7, 2], [7, 8], [7, 10], [8, 3], [8, 4], [8, 6], [8, 7]]
	let two = [[3, 3], [3, 4], [3, 6], [3, 7], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [7, 4], [7, 5], [7, 6], [8, 5]]
	let three = [[1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [2, 0], [2, 10], [3, 0], [3, 2], [3, 8], [3, 10], [4, 0], [4, 2], [4, 8], [4, 10], [5, 0], [5, 10], [6, 0], [6, 10], [7, 0], [7, 2], [7, 8], [7, 10], [8, 0], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 10], [9, 0], [9, 10], [10, 1], [10, 2], [10, 3], [10, 4], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9]]
	let names = ["one", "two", "three"];
	let pazzles = [one, two, three];
	// map thourgh pazzles and change the color of the cells inside them that are in win array
	pazzles.map((pazzle,i) => {
		let cells = document.querySelectorAll(`#${names[i]} .cell`);
		cells.forEach(cell => {
			let x = cell.getAttribute("x");
			let y = cell.getAttribute("y");
			pazzle.forEach(answer => answer[0] == x && answer[1] == y ? cell.style.backgroundColor = "black" : null);
		})
	})
}

	// toWinCell.map((value, index, array) => {
	// 	let painted = document.querySelectorAll(".cell");
	// 	// check if painted cells x and y coordinates are in toWinCell array with foreach
	// 	painted.forEach(function (cell) {
	// 		let x = cell.getAttribute("x");
	// 		let y = cell.getAttribute("y");
	// 		// let color=cell.classList[2];
	// 		toWinCell.forEach(answer => answer[0] == x && answer[1] == y ? cell.style.backgroundColor = answer[2] : null);
	// 	})
	// })
// }
// listen to saveBtn click and save in a array all x and y coordinates of painted cells
function saveBtn() {
	let cells = document.querySelectorAll(`#three .painted`);
	let paintedCells = [];
	for (var i = 0; i < cells.length; i++) {

		paintedCells = [...paintedCells, [cells[i].getAttribute("x"), cells[i].getAttribute("y"), cells[i].style.backgroundColor]];

	}
	console.log(paintedCells);
	// save all painted cells in log file
	// save painted cells in local storage
	localStorage.setItem("paintedCells", JSON.stringify(paintedCells));
}


document.getElementById("saveBtn").addEventListener("click", saveBtn);
document.getElementById("solveBtn").addEventListener("click", solveBtn);
createDivs("one","red");
// createDivs("two","green");
// createDivs("three","yellow");


addEventListenerToDivs();
if (show_hints) {
const questions = document.getElementById("questions");
// get random item from win array
let que = getRandomItem(win[0]);
questions.innerText = "column: " + getQuestion(que[0]) + "\n" + "row: " +getQuestion(que[1]) ; 
}

// add event listener to all cells
// 	cells.forEach(cell => {
// 		cell.addEventListener("click",(e)=>{
// 	let x = e.target.getAttribute("x");
// 	let y = e.target.getAttribute("y");
// 			console.log(x, y, checkWin(x, y));
// 	if(checkWin(x,y)){
// 		console.log("good");
// 	que = getRandomItem(win[0]);
// 	questions.innerText = "column: " + getQuestion(que[0]) + "\n" + "row: " + getQuestion(que[1]);
// 	}
// })
// 	})

function getRandomItem(array) {
	return array[Math.floor(Math.random() * array.length)];
}


// build a string which represent a basic math question to get to a given number
function getQuestion(number) {
	let question = "";
	let randomNumber = Math.floor(Math.random() * 10);

	let randomOperator = getRandomItem(number % randomNumber === 0 ? ["+", "-", "*", "/"] : ["+", "-"] );
	let randomNumber2;
	switch (randomOperator) {
		case "+":
			randomNumber2 = number - randomNumber;
			break;
		case "-":
			randomNumber2 = number + randomNumber ;
			break;
		case "*":
			
			randomNumber2 = number / randomNumber
			
			break;
		case "/":
			randomNumber2 = number * randomNumber;
			break;
	
		default:
			break;
	}
	question = `${randomNumber2} ${randomOperator} ${randomNumber} = ${number}`;
	return question;
}

// function to check if given x and y are in win array
function checkWin(x, y,num) {
	// let check = false;
	console.log(num);
	if (num[0] == x && num[1] == y)
		return true;
	else
		return false
	// return check;
}


