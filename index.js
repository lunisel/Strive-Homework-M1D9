let newCell
let oldH2 = document.getElementById("random-number")
oldH2.innerHTML = ""

window.onload = function(){
    displayNumbers()
}
const displayNumbers = function(){
    let bingoBoard = document.getElementById("bingo-board")
    bingoBoard.innerHTML = ""
    for(let i = 1 ; i<76 ; i++){
        newCell = document.createElement("div")
        newCell.innerHTML = i
        newCell.classList = "numbers"
        bingoBoard.appendChild(newCell)
    }
}

const randomNumber = function(){
    const randomH2 = Math.floor(Math.random()*75)+1
    oldH2.innerHTML = `${randomH2}`  
    let selectedCell = document.getElementsByClassName("numbers")
    let indexOfCell = randomH2 - 1
    selectedCell[indexOfCell].classList.add("extracted-numbers")  
}

/*let arrayOfNumbers = []
    for(let i=1 ; i<76; i++){
arrayOfNumbers.push(i)
let result = []
for(let i=1; i<outputCount; i++){
    
    result.push(arrayOfNumbers[randomH2])
    arrayOfNumbers[randomH2] = */