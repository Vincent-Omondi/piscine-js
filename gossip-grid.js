import { gossips } from './gossip-grid.data.js'

export const grid = () => {
    const mainContainer = document.querySelector('body')
    const controlPanel = createControlPanel()
    const gossipCreationForm = createGossipForm()
    
    mainContainer.append(controlPanel, gossipCreationForm)
    
    displayExistingGossips(mainContainer)
    
    setupEventListeners(gossipCreationForm, controlPanel)
}

const createControlPanel = () => {
    const panel = document.createElement('div')
    panel.classList.add('ranges')
    
    const controls = {
        width: createRangeInput("width", 200, 800),
        fontSize: createRangeInput("fontSize", 20, 40),
        background: createRangeInput("background", 20, 75)
    }
    
    Object.values(controls).forEach(control => panel.append(control))
    
    return panel
}

const createRangeInput = (id, min, max) => {
    const input = document.createElement('input')
    input.type = "range"
    input.id = id
    input.classList.add("range")
    input.setAttribute('min', min.toString())
    input.setAttribute('max', max.toString())
    return input
}

const createGossipForm = () => {
    const form = document.createElement('form')
    form.classList.add("gossip")
    
    const textArea = document.createElement('textarea')
    textArea.placeholder = "Got a gossip to share?"
    
    const submitButton = document.createElement('button')
    submitButton.textContent = "Share gossip!"
    submitButton.type = "submit"
    
    form.append(textArea, submitButton)
    return form
}

const displayExistingGossips = (container) => {
    gossips.forEach(gossip => {
        const gossipElement = createGossipElement(gossip)
        container.append(gossipElement)
    })
}

const createGossipElement = (content) => {
    const element = document.createElement('div')
    element.classList.add("gossip")
    element.textContent = content
    return element
}

const setupEventListeners = (form, controlPanel) => {
    form.addEventListener('submit', handleGossipSubmission)
    
    controlPanel.querySelector('#width').addEventListener('input', updateGossipWidth)
    controlPanel.querySelector('#fontSize').addEventListener('input', updateGossipFontSize)
    controlPanel.querySelector('#background').addEventListener('input', updateGossipBackground)
}

const handleGossipSubmission = (e) => {
    e.preventDefault()
    const textArea = e.target.querySelector('textarea')
    if (!textArea.value) return
    
    const newGossip = createGossipElement(textArea.value)
    newGossip.classList.add('fade-in')
    copyStylesFromForm(newGossip, e.target)
    
    textArea.value = ""
    e.target.insertAdjacentElement('afterend', newGossip)
}

const copyStylesFromForm = (gossipElement, form) => {
    gossipElement.style.width = form.style.width
    gossipElement.style.background = form.style.background
    gossipElement.style.fontSize = form.style.fontSize
}

const updateGossipWidth = (e) => updateGossipStyle('width', e.target.value + "px")
const updateGossipFontSize = (e) => updateGossipStyle('fontSize', e.target.value + "px")
const updateGossipBackground = (e) => updateGossipStyle('background', `hsl(280, 50%, ${e.target.value}%)`)

const updateGossipStyle = (property, value) => {
    const gossipCards = document.getElementsByClassName('gossip')
    for (const card of gossipCards) {
        card.style[property] = value
    }
}