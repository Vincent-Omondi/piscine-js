import { gossips } from './gossip-grid.data.js'

export function grid() {
  const body = document.querySelector('body')

  // Create ranges container
  const rangesDiv = document.createElement('div')
  rangesDiv.className = 'ranges'
  body.appendChild(rangesDiv)

  // Create range inputs
  const ranges = [
    { id: 'width', min: 200, max: 800, value: 200 },
    { id: 'fontSize', min: 20, max: 40, value: 20 },
    { id: 'background', min: 20, max: 75, value: 20 }
  ]

  ranges.forEach(range => {
    const input = document.createElement('input')
    input.type = 'range'
    input.id = range.id
    input.min = range.min
    input.max = range.max
    input.value = range.value
    input.className = 'range'
    rangesDiv.appendChild(input)
  })

  // Create form for new gossip
  const form = document.createElement('form')
  form.className = 'gossip'
  body.appendChild(form)

  const textarea = document.createElement('textarea')
  form.appendChild(textarea)

  const submitButton = document.createElement('button')
  submitButton.textContent = 'Share gossip!'
  form.appendChild(submitButton)

  // Create gossip cards
  gossips.forEach(gossip => createGossipCard(gossip))

  // Event listener for form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (textarea.value.trim() !== '') {
      createGossipCard(textarea.value)
      gossips.unshift(textarea.value)
      textarea.value = ''
    }
  })

  // Event listeners for range inputs
  document.getElementById('width').addEventListener('input', updateStyles)
  document.getElementById('fontSize').addEventListener('input', updateStyles)
  document.getElementById('background').addEventListener('input', updateStyles)

  updateStyles()
}

function createGossipCard(text) {
  const gossipDiv = document.createElement('div')
  gossipDiv.className = 'gossip'
  gossipDiv.textContent = text
  document.body.appendChild(gossipDiv)
}

function updateStyles() {
  const width = document.getElementById('width').value
  const fontSize = document.getElementById('fontSize').value
  const background = document.getElementById('background').value

  const gossipCards = document.querySelectorAll('.gossip')
  gossipCards.forEach(card => {
    card.style.width = `${width}px`
    card.style.fontSize = `${fontSize}px`
    card.style.background = `hsl(280, 50%, ${background}%)`
  })
}