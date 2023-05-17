// Function to handle the passcode submission in index.html
function handleSubmit(event) {
    event.preventDefault();

    const passcodeInput = document.getElementById("passcode-input");
    const passcode = passcodeInput.value;

    // Check if the entered passcode is correct
    if (passcode === "your-passcode") {
        window.location.href = "signup.html";
    } else {
        const passcodeError = document.getElementById("passcode-error");
        passcodeError.style.display = "block";
        passcodeInput.value = "";
    }
}

// Function to handle the sign-up form submission in signup.html
function handleSubmit(event) {
    event.preventDefault();

    const slotsSelect = document.getElementById("slots");
    const selectedSlot = slotsSelect.value;

    const nameInput = document.getElementById("name");
    const name = nameInput.value;

    // Perform any additional validation if needed

    // Simulate AJAX request to update the list
    // Replace this with your actual AJAX request to the server
    setTimeout(() => {
        console.log(`User ${name} signed up for Slot ${selectedSlot}`);
        window.location.href = "thankYou.html";
    }, 1000);
}

// Function to handle the passcode submission in thankYou.html
function handlePasscode(event) {
    event.preventDefault();

    const passcodeInput = document.getElementById("passcode");
    const passcode = passcodeInput.value;

    // Check if the entered passcode is correct
    if (passcode === "your-passcode") {
        window.location.href = "signup.html";
    } else {
        alert("Invalid passcode. Please try again.");
        passcodeInput.value = "";
    }
}
