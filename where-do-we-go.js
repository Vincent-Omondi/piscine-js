import { places } from './where-do-we-go.data.js';

export const explore = () => {
    const rankedLocations = organizeLocations()
    const mainContainer = document.body

    rankedLocations.forEach(location => {
        const locationElement = document.createElement('section')
        const cityName = extractCityName(location.name)
        locationElement.style.background = `url('./where-do-we-go_images/${cityName}.jpg')`
        mainContainer.appendChild(locationElement)
    })

    const positionDisplay = createPositionDisplay(rankedLocations[0])
    mainContainer.appendChild(positionDisplay)

    const directionIndicator = createDirectionIndicator()
    mainContainer.appendChild(directionIndicator)

    let previousScrollPosition = 0

    document.addEventListener("scroll", () => {
        const currentScrollPosition = window.scrollY
        updateDirectionIndicator(directionIndicator, currentScrollPosition, previousScrollPosition)
        
        const currentIndex = calculateCurrentIndex()
        updatePositionDisplay(positionDisplay, rankedLocations[currentIndex])
        
        previousScrollPosition = currentScrollPosition
    })
}

const organizeLocations = () => {
    const northernLocations = places.filter(place => place.coordinates.includes("N"))
    const southernLocations = places.filter(place => place.coordinates.includes("S"))
    
    const sortByCoordinates = (a, b) => {
        if (a.coordinates > b.coordinates) return -1
        if (b.coordinates > a.coordinates) return 1
    }
    
    northernLocations.sort(sortByCoordinates)
    southernLocations.sort((a, b) => sortByCoordinates(b, a))
    
    return northernLocations.concat(southernLocations)
}

const extractCityName = (fullName) => {
    return fullName.split(',')[0].toLowerCase().replaceAll(' ', '-')
}

const createPositionDisplay = (initialLocation) => {
    const display = document.createElement('a')
    display.classList.add('location')
    updatePositionDisplay(display, initialLocation)
    return display
}

const updatePositionDisplay = (display, location) => {
    display.textContent = `${location.name}\n${location.coordinates}`
    display.href = `https://www.google.com/maps/place/${location.coordinates}`
    display.target = "_blank"
    display.style.color = location.color
}

const createDirectionIndicator = () => {
    const indicator = document.createElement('div')
    indicator.classList.add('direction')
    return indicator
}

const updateDirectionIndicator = (indicator, currentScroll, previousScroll) => {
    indicator.textContent = currentScroll > previousScroll ? "S" : "N"
}

const calculateCurrentIndex = () => {
    return Math.round(window.scrollY / window.innerHeight)
}