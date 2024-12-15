document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Basic validation (can be extended)
    if (name && email && cardNumber && expiryDate && cvv) {
        displayMessage("Payment successfully processed!", "success");
    } else {
        displayMessage("Please fill out all fields correctly.", "error");
    }
});

function displayMessage(message, type) {
    const messageDiv = document.getElementById('payment-message');
    messageDiv.textContent = message;
    if (type === "success") {
        messageDiv.style.color = "green";
    } else if (type === "error") {
        messageDiv.style.color = "red";
    }
}
