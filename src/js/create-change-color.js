import refs from './refs'
import colors from '../db/db.json'

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let intervalId = null
let isActive = false

export function startСhangeСolor() {
  if (isActive) {
    return
  }

  isActive = true

  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length - 1)]}`
  }, 1000)
}

export function stopСhangeСolor() {
  clearInterval(intervalId)

  isActive = false
}
