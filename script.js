// =============================================
// PART 2: JAVASCRIPT FUNCTIONS
// =============================================

// Global variable to demonstrate scope
let calculationCount = 0;

// Function with parameters and return value
function addNumbers(a, b) {
    // Local variable - only accessible within this function
    const result = a + b;
    return result;
}

// Another function with parameters and return value
function multiplyNumbers(a, b) {
    return a * b;
}

// Function that uses global and local scope
function updateCalculationCount() {
    // Modifying global variable
    calculationCount++;
    // Local variable
    const message = `Calculations performed: ${calculationCount}`;
    console.log(message);
    return calculationCount;
}

// Function to demonstrate user input and output
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    let result;
    
    if (operation === 'add') {
        result = addNumbers(num1, num2);
        displayResult(`${num1} + ${num2} = ${result}`);
    } else if (operation === 'multiply') {
        result = multiplyNumbers(num1, num2);
        displayResult(`${num1} × ${num2} = ${result}`);
    }
    
    updateCalculationCount();
}

// Function with return value
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Function that uses a returned value
function generateRandomNumber() {
    const randomNum = getRandomNumber();
    displayResult(`Random Number: ${randomNum}`);
}

// Function to display results
function displayResult(message) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = message;
    resultElement.style.animation = 'pulse 0.5s';
    setTimeout(() => {
        resultElement.style.animation = '';
    }, 500);
}

// Function to clear results
function clearResults() {
    document.getElementById('result').innerHTML = 'Results will appear here...';
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}

// =============================================
// PART 3: COMBINING CSS ANIMATIONS WITH JAVASCRIPT
// =============================================

// Function to toggle CSS animations
function toggleAnimation(animationType) {
    const box = document.getElementById('animation-box');
    
    // Remove all animation classes first
    box.classList.remove('spin', 'bounce', 'color-change', 'expand');
    
    // If the animation is not already active, add it
    if (!box.classList.contains(animationType)) {
        box.classList.add(animationType);
    }
}

// Function to reset all animations
function resetAnimations() {
    const box = document.getElementById('animation-box');
    box.classList.remove('spin', 'bounce', 'color-change', 'expand');
}

// =============================================
// EVENT LISTENERS
// =============================================

// Initialize page with some animations
document.addEventListener('DOMContentLoaded', function() {
    // Start with a subtle pulse animation on the box
    document.getElementById('animation-box').style.animation = 'pulse 2s infinite';
    
    // Add hover effect to result box
    const resultBox = document.getElementById('result');
    resultBox.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    resultBox.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Add event listeners to buttons
    document.getElementById('add-btn').addEventListener('click', function() {
        calculate('add');
    });
    
    document.getElementById('multiply-btn').addEventListener('click', function() {
        calculate('multiply');
    });
    
    document.getElementById('random-btn').addEventListener('click', function() {
        generateRandomNumber();
    });
    
    document.getElementById('clear-btn').addEventListener('click', function() {
        clearResults();
    });
    
    document.getElementById('spin-btn').addEventListener('click', function() {
        toggleAnimation('spin');
    });
    
    document.getElementById('bounce-btn').addEventListener('click', function() {
        toggleAnimation('bounce');
    });
    
    document.getElementById('color-btn').addEventListener('click', function() {
        toggleAnimation('color-change');
    });
    
    document.getElementById('expand-btn').addEventListener('click', function() {
        toggleAnimation('expand');
    });
    
    document.getElementById('reset-btn').addEventListener('click', function() {
        resetAnimations();
    });
});