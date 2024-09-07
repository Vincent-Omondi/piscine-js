// Importing styles from a data file
import { styles } from './pimp-my-style.data.js';

// Initializing counter variable
let i = 0;

// Function to pimp or unpimp a button
export const pimp = () => {
    // Selecting the button element
    const button = document.querySelector('.button');

    // Checking if the button is currently unpimped
    const isUnpimping = button.classList.contains('unpimp');

    // Removing or adding a style based on the current state
    isUnpimping ? button.classList.remove(styles[i--]) : button.classList.add(styles[i++]);

    // Handling the counter and toggling the 'unpimp' class
    if (i === -1 || i === 15) {
        button.classList.toggle('unpimp');
        i = i === -1 ? 0 : 14;
    }
};