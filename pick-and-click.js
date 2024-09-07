// Function to initialize the color picker
export const pick = () => {
    // Initialize color values
    let currentHue = 0;
    let currentLuminosity = 0;

    // Get reference to the body element
    const pageBody = document.querySelector('body');

    // Create and append HSL display element
    const hslDisplay = document.createElement('div');
    hslDisplay.classList.add("hsl");
    hslDisplay.textContent = "hsl";
    pageBody.append(hslDisplay);

    // Create and append Hue display element
    const hueDisplay = document.createElement('div');
    hueDisplay.classList.add("hue", "text");
    hueDisplay.textContent = currentHue;
    pageBody.append(hueDisplay);

    // Create and append Luminosity display element
    const luminosityDisplay = document.createElement('div');
    luminosityDisplay.classList.add("luminosity", "text");
    luminosityDisplay.textContent = currentLuminosity;
    pageBody.append(luminosityDisplay);

    // Create SVG element for crosshair
    const crosshairSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const horizontalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    const verticalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    horizontalLine.id = "axisX";
    verticalLine.id = "axisY";
    crosshairSVG.append(horizontalLine, verticalLine);
    pageBody.append(crosshairSVG);

    // Event listener for click to copy color value
    document.addEventListener('click', function(event) {
        // Calculate hue and luminosity based on click position
        currentHue = Math.round((event.clientX / window.innerWidth) * 360);
        currentLuminosity = Math.round((event.clientY / window.innerHeight) * 100);
        // Copy the HSL value to clipboard
        navigator.clipboard.writeText(`hsl(${currentHue}, 50%, ${currentLuminosity}%)`);
    });

    // Event listener for mouse movement to update display
    document.addEventListener('mousemove', function(event) {
        // Update crosshair position
        updateCrosshair(horizontalLine, verticalLine, event);

        // Calculate new hue and luminosity values
        currentHue = Math.round((event.clientX / window.innerWidth) * 360);
        currentLuminosity = Math.round((event.clientY / window.innerHeight) * 100);

        // Update display elements
        updateDisplays(hslDisplay, hueDisplay, luminosityDisplay, currentHue, currentLuminosity);

        // Update background color
        pageBody.style.background = `hsl(${currentHue}, 50%, ${currentLuminosity}%)`;
    });
};

// Helper function to update crosshair position
function updateCrosshair(hLine, vLine, event) {
    hLine.setAttribute("y1", "0");
    hLine.setAttribute("y2", window.innerHeight);
    hLine.setAttribute("x1", event.clientX);
    hLine.setAttribute("x2", event.clientX);
    vLine.setAttribute("y1", event.clientY);
    vLine.setAttribute("y2", event.clientY);
    vLine.setAttribute("x1", "0");
    vLine.setAttribute("x2", window.innerWidth);
}

// Helper function to update display elements
function updateDisplays(hslElem, hueElem, lumElem, hue, lum) {
    hslElem.textContent = `hsl(${hue}, 50%, ${lum}%)`;
    hueElem.textContent = `hue\n${hue}`;
    lumElem.textContent = `${lum}\nluminosity`;
}