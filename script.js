// Get DOM elements
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

// Function to validate US phone numbers
function validatePhoneNumber(phoneNumber) {
    // Valid US phone number patterns
    const validPatterns = [
        /^1\s\d{3}-\d{3}-\d{4}$/,      // 1 555-555-5555
        /^1\s\(\d{3}\)\s\d{3}-\d{4}$/,  // 1 (555) 555-5555
        /^1\(\d{3}\)\d{3}-\d{4}$/,      // 1(555)555-5555
        /^1\s\d{3}\s\d{3}\s\d{4}$/,     // 1 555 555 5555
        /^\d{10}$/,                     // 5555555555
        /^\d{3}-\d{3}-\d{4}$/,          // 555-555-5555
        /^\(\d{3}\)\d{3}-\d{4}$/        // (555)555-5555
    ];
    
    // Check if the phone number matches any valid pattern
    for (let pattern of validPatterns) {
        if (pattern.test(phoneNumber)) {
            return true;
        }
    }
    
    return false;
}

// Function to display results
function displayResult(phoneNumber, isValid) {
    resultsDiv.className = 'results';
    
    if (isValid) {
        resultsDiv.textContent = `Valid US number: ${phoneNumber}`;
        resultsDiv.classList.add('valid');
    } else {
        resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
        resultsDiv.classList.add('invalid');
    }
}

// Function to clear results
function clearResults() {
    resultsDiv.textContent = '';
    resultsDiv.className = 'results empty';
}

// Event listener for check button
checkBtn.addEventListener('click', () => {
    const phoneNumber = userInput.value.trim();
    
    // Check if input is empty
    if (!phoneNumber) {
        alert('Please provide a phone number');
        return;
    }
    
    // Validate the phone number
    const isValid = validatePhoneNumber(phoneNumber);
    displayResult(phoneNumber, isValid);
});

// Event listener for clear button
clearBtn.addEventListener('click', () => {
    userInput.value = '';
    clearResults();
});

// Event listener for Enter key on input
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkBtn.click();
    }
});

// Initialize with empty results
clearResults();