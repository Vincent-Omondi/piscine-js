// Function to create a new circle element on mousedown
export function createCircle() {
    document.addEventListener('mousedown', event => {
        const circleElement = document.createElement('div');
        circleElement.setAttribute('class', 'circle');
        circleElement.setAttribute('id', 'Tester');
        
        // Calculate circle position (offset by half its size)
        const posX = event.clientX - 25;
        const posY = event.clientY - 25;
        
        // Set circle position and initial color
        circleElement.style.cssText = `left: ${posX}px; top: ${posY}px; background: white;`;
        document.body.appendChild(circleElement);
    });
}

// Function to move the circle and handle interactions with the box
export function moveCircle() {
    document.addEventListener('mousemove', event => {
        const activeCircle = document.querySelector('div:last-child');
        const boxElement = document.querySelector('div.box');
        const boxBounds = boxElement.getBoundingClientRect();

        // Update circle position to follow the mouse
        updateCirclePosition(activeCircle, event.clientX, event.clientY);

        // Check if the circle is inside the box and update color
        updateCircleColor(activeCircle, boxBounds);

        // Constrain circle movement if it's purple (inside the box)
        if (activeCircle.style.background === 'var(--purple)') {
            constrainCircleMovement(activeCircle, event, boxBounds);
        }
    });
}

// Helper function to update circle position
function updateCirclePosition(circle, mouseX, mouseY) {
    circle.style.left = `${mouseX - 25}px`;
    circle.style.top = `${mouseY - 25}px`;
    document.body.append(circle);
}

// Helper function to update circle color based on position
function updateCircleColor(circle, boxBounds) {
    if (circle.getAttribute('class') !== 'box') {
        const circleLeft = parseInt(circle.style.left);
        const circleTop = parseInt(circle.style.top);
        
        if (circleLeft > boxBounds.x && 
            circleLeft < boxBounds.right - 50 && 
            circleTop > boxBounds.top && 
            circleTop < boxBounds.bottom - 50) {
            circle.style.background = 'var(--purple)';
        }
    }
}

// Helper function to constrain circle movement within the box
function constrainCircleMovement(circle, event, boxBounds) {
    const mouseX = event.clientX - 25;
    const mouseY = event.clientY - 25;

    // Constrain horizontal movement
    if (mouseX < boxBounds.x) {
        circle.style.left = `${boxBounds.x}px`;
    } else if (mouseX > boxBounds.right - 50) {
        circle.style.left = `${boxBounds.right - 50}px`;
    }

    // Constrain vertical movement
    if (mouseY < boxBounds.top) {
        circle.style.top = `${boxBounds.top}px`;
    } else if (mouseY > boxBounds.bottom - 50) {
        circle.style.top = `${boxBounds.bottom - 50}px`;
    }
}

// Function to create and append the center box
export function setBox() {
    const boxElement = document.createElement('div');
    boxElement.setAttribute('class', 'box');
    document.body.append(boxElement);
}