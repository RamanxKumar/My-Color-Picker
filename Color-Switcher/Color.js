const button = document.querySelector('#btn');
const color_code = document.querySelector('#color-code');
const body = document.querySelector('body');

// Function to generate a random color
const getColor = () => {
    // Generate two random colors for the gradient
    const randomNumber1 = Math.floor(Math.random() * 16777215);
    const randomColor1 = "#" + randomNumber1.toString(16);
    
    const randomNumber2 = Math.floor(Math.random() * 16777215);
    const randomColor2 = "#" + randomNumber2.toString(16);
    
    // Create a linear gradient
    const gradient = `linear-gradient(45deg, ${randomColor1}, ${randomColor2})`;

    // Apply the gradient as the background
    body.style.background = gradient;
    
    // Display the hex code of the colors
    color_code.innerText = `${randomColor1} && ${randomColor2}`;
    
    // Copy the gradient to clipboard
    navigator.clipboard.writeText(gradient);
}

// Event Call
button.addEventListener('click', getColor);

// Initial Call
getColor();