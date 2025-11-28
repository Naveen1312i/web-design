function showMessage() {
    alert("Welcome! Start exploring amazing destinations.");
}

function submitForm() {
    const name = document.getElementById("name").value;
    alert("Thank you, " + name + "! Your message has been sent.");
    return false; // Prevent actual form submission
}
