// Initialize an empty string to hold the largest number
let largestNumber = '';

// Function to generate large random numbers in string format
function generateLargerNumber() {
    // Use setInterval to generate digits at intervals of 1 millisecond
    const interval = setInterval(() => {
        // Generate a random chunk of 20 digits and concatenate it to the largest number
        let randomChunk = Math.floor(Math.random() * 1e20).toString(); // Generate a 20-digit random number

        // Pad the chunk to ensure it always has 20 digits
        randomChunk = randomChunk.padStart(20, '0');

        // Append the random chunk to the growing largest number
        largestNumber += randomChunk;

        // Update the result display with the entire number
        document.getElementById("result").textContent = largestNumber; // Display the entire number

        // Optional: Scroll to the bottom of the result for better visibility
        const resultElement = document.getElementById("result");
        resultElement.scrollTop = resultElement.scrollHeight; // Scroll to the bottom

        // Stop generating after reaching 300 million digits
        if (largestNumber.length >= 300000000) {
            clearInterval(interval);
            alert("Reached 300 million digits! Stopping the generation.");
        }
    }, 1); // Generates new chunk every 1 millisecond
}

// Add event listener to the button to start the automatic number generation on click
document.getElementById("generateBtn").addEventListener("click", generateLargerNumber);
