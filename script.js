
const messages = [
    "U sure?",
    "Do U Really sure??",
    "Legit Ba???",
    "Dale na Pleasseeeeee",
    "Just think about it!",
    "Di ka ba Karmahin niyan??",
    "Iiyak akooo",
    "Eto na, Iiyaak na talaga ako",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;
let noClickCount = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Update the "No" button text with the next message
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase the size of the "Yes" button
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 2.5}px`;

    // Move the "No" button randomly
    moveNoButton();

    // Increment the noClickCount and reset the "Yes" button size if needed
    noClickCount++;
    if (noClickCount >= 5) {
        resetYesButtonSize();
        noClickCount = 0;
    }
}

function resetYesButtonSize() {
    const yesButton = document.querySelector('.yes-button');
    yesButton.style.fontSize = '24px'; // Reset to the original size
}

function handleYesClick() {
    // Redirect to the new page
    window.location.href = "yes_page.html";
}

function moveNoButton() {
    const noButton = document.querySelector('.no-button');
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
