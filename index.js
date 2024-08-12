const startBtn = document.getElementById('go-btn')
const stopBtn = document.getElementById('stop-btn')
const restartBtn = document.getElementById('restart-btn')
const display = document.getElementById('display')
let startingTime
let timeoutId
let timePassed = 0

const startTimer = () => {
	startingTime = Date.now() - timePassed

	timeoutId = setInterval(refreshDisplay, 1000)
}

const refreshDisplay = () => {
	timePassed = Date.now() - startingTime
	let hours = Math.floor((timePassed / (1000 * 3600)) % 60).toString()
	let minutes = Math.floor((timePassed / (1000 * 60)) % 60).toString()
	let seconds = Math.floor((timePassed / 1000) % 60).toString()
	display.textContent = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
}

const stopTimer = () => {
	clearInterval(timeoutId)
}

const restartTimer = () => {
	clearInterval(timeoutId)

	startingTime = Date.now()
	refreshDisplay()
}

startBtn.addEventListener('click', startTimer)
stopBtn.addEventListener('click', stopTimer)
restartBtn.addEventListener('click', restartTimer)
