/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputText = document.getElementById("input-text")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function(){
    let givenNum = parseFloat(inputText.value)
    lengthEl.textContent = `${givenNum} meters = ${(givenNum * 3.281).toFixed(3)} feet | ${givenNum} feet = ${(givenNum/3.281).toFixed(3)} meters`
    volumeEl.textContent = `${givenNum} liters = ${(givenNum * 0.264).toFixed(3)} gallons | ${givenNum} gallons = ${(givenNum/0.264).toFixed(3)} liters`
    massEl.textContent = `${givenNum} kilograms = ${(givenNum * 2.204).toFixed(3)} pounds | ${givenNum} pounds = ${(givenNum/2.204).toFixed(3)} kilograms`
})