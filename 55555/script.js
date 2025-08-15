// ===============================
// DOM ELEMENTS
// ===============================
const spinButton = document.getElementById('start-spin');
const ebookButton = document.getElementById('buy-ebook');
const ebookPriceInput = document.getElementById('ebook-price');

// Lottie Wheel Element
const wheelElement = document.querySelector('dotlottie-wc');

// ===============================
// SPIN WHEEL LOGIC
// ===============================
let spinning = false;

// Define wheel slices and their "rewards" or percentages
const wheelSlices = [
    { label: '10%', reward: 'Minor Insight' },
    { label: '20%', reward: 'Small Guidance' },
    { label: '40%', reward: 'Noticeable Advice' },
    { label: '70%', reward: 'Big Hint' },
    { label: '80%', reward: 'Strong Revelation' },
    { label: '90%', reward: 'Major Inspiration' },
    { label: '100%', reward: 'Divine Breakthrough' }
];

spinButton.addEventListener('click', () => {
    if (spinning) return; // prevent multiple clicks
    spinning = true;

    // Random slice selection
    const randomIndex = Math.floor(Math.random() * wheelSlices.length);
    const selectedSlice = wheelSlices[randomIndex];

    // Play Lottie animation
    if (wheelElement) {
        wheelElement.setAttribute('autoplay', 'true');
        wheelElement.setAttribute('loop', 'false');
    }

    // Fake spinning duration (simulate real spin)
    const spinDuration = 3000; // 3 seconds
    spinButton.textContent = 'Spinning...';

    setTimeout(() => {
        spinning = false;
        spinButton.textContent = 'Spin to Reveal Your Reward';
        alert(`Your Result: ${selectedSlice.label} - ${selectedSlice.reward}`);
    }, spinDuration);
});

// ===============================
// EBOOK BUY BUTTON LOGIC
// ===============================
ebookButton.addEventListener('click', () => {
    const price = parseFloat(ebookPriceInput.value);

    if (isNaN(price) || price < 1) {
        alert('Please enter a valid price of $1 or more.');
        return;
    }

    // Here you can integrate with payment API or redirect
    alert(`Thank you! You set the eBook price at $${price.toFixed(2)}. Proceeding to unlock...`);
});

// ===============================
// SANTA ANIMATION (Optional Interactive Enhancements)
// ===============================
const santa = document.getElementById('santa');
let santaDirection = 1;
let santaPosition = 0;

function animateSanta() {
    if (!santa) return;

    santaPosition += 0.5 * santaDirection; // speed
    if (santaPosition > 15 || santaPosition < -15) santaDirection *= -1; // bounce
    santa.style.transform = `translateX(${santaPosition}px) translateY(${Math.sin(Date.now()/500)*5}px) rotate(${Math.sin(Date.now()/300)*5}deg)`;

    requestAnimationFrame(animateSanta);
}
animateSanta();

// ===============================
// OPTIONAL: ADD SNOW EFFECT INTERACTIVE LAYER
// ===============================
const snowContainer = document.getElementById('snow-container');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = 2 + Math.random() * 3 + 's';
    snowflake.style.opacity = Math.random();
    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000); // remove after falling
}

setInterval(createSnowflake, 200);
