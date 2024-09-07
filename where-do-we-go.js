import { places } from './data.js';

export function explore() {
    places.forEach(location => {
        const locationElement = createLocationElement(location);
        document.body.appendChild(locationElement);
    });

    console.log(formatImageName(places[2].name));
}

function createLocationElement(location) {
    const sectionElement = document.createElement("section");
    sectionElement.style.backgroundImage = `url(./images/${formatImageName(location.name)}.jpg)`;
    sectionElement.style.backgroundSize = "100%";
    sectionElement.className = "location";

    const linkElement = createLinkElement(location);
    sectionElement.appendChild(linkElement);

    return sectionElement;
}

function createLinkElement(location) {
    const linkElement = document.createElement('a');
    linkElement.innerHTML = location.name + location.coordinates;
    linkElement.style.color = location.color;
    return linkElement;
}

function formatImageName(name) {
    return name.split(',')[0].toLowerCase().split(' ').join('-');
}