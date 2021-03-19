document.getElementById('button').addEventListener('click', calculateArea)
const number = 0
let width = number
let height = number
let area = width * height

function calculateArea () {
  width = document.getElementById('width').value
  height = document.getElementById('height').value
  document.getElementById('area').value = area
  area = width * height
}