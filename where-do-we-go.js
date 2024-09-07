import { places } from './data.js';

export const renderExploration = () => {
    const sortedDestinations = sortDestinations()
    const bodyElement = document.body

    sortedDestinations.forEach(destination => {
        const destinationSection = createDestinationSection(destination)
        bodyElement.appendChild(destinationSection)
    })

    const currentLocationIndicator = createLocationIndicator(sortedDestinations[0])
    bodyElement.appendChild(currentLocationIndicator)

    const compassElement = createCompass()
    bodyElement.appendChild(compassElement)
    let previousScrollPosition = 0
    let currentScrollPosition = 0

    document.addEventListener("scroll", () => {
        currentScrollPosition = window.scrollY;
        updateCompassDirection(compassElement, previousScrollPosition, currentScrollPosition)
        const currentDestinationIndex = Math.round(window.scrollY / window.innerHeight)
        updateLocationIndicator(currentLocationIndicator, sortedDestinations[currentDestinationIndex])
        previousScrollPosition = window.scrollY;
    })
}

const sortDestinations = () => {
    const northboundDestinations = places.filter(destination => destination.coordinates.includes("N"))
    const southboundDestinations = places.filter(destination => destination.coordinates.includes("S"))
    northboundDestinations.sort((a, b) => compareCoordinates(a, b, "N"))
    southboundDestinations.sort((a, b) => compareCoordinates(a, b, "S"))
    return northboundDestinations.concat(southboundDestinations)
}

const createDestinationSection = (destination) => {
    const sectionElement = document.createElement('section')
    const cityName = destination.name.split(',')[0].toLowerCase().replaceAll(' ', '-')
    sectionElement.style.background = `url('./where-do-we-go_images/${cityName}.jpg')`
    return sectionElement
}

const createLocationIndicator = (destination) => {
    const locationIndicatorElement = document.createElement('a')
    locationIndicatorElement.classList.add('location')
    locationIndicatorElement.textContent = `${destination.name}\n${destination.coordinates}`
    locationIndicatorElement.href = `https://www.google.com/maps/place/${destination.coordinates}`
    locationIndicatorElement.style.color = destination.color
    return locationIndicatorElement
}

const createCompass = () => {
    const compassElement = document.createElement('div')
    compassElement.classList.add('direction')
    return compassElement
}

const compareCoordinates = (a, b, hemisphere) => {
    if (hemisphere === "N") {
        return a.coordinates > b.coordinates ? -1 : 1
    } else {
        return b.coordinates > a.coordinates ? -1 : 1
    }
}

const updateCompassDirection = (compassElement, previousScrollPosition, currentScrollPosition) => {
    compassElement.textContent = currentScrollPosition > previousScrollPosition ? "S" : "N"
}

const updateLocationIndicator = (locationIndicatorElement, destination) => {
    locationIndicatorElement.href = `https://www.google.com/maps/place/${destination.coordinates}`
    locationIndicatorElement.target = "_blank"
    locationIndicatorElement.style.color = destination.color
    locationIndicatorElement.textContent = `${destination.name}\n${destination.coordinates}`
}