function welcomeAlert() {
    alert("Welcome to my journey! Explore my childhood, education, skills, and projects to see how I've grown and what I'm passionate about 😁");
}

function validateForm(e) {
    e.preventDefault();
    alert("Form submitted successfully!");
    return true;
}

function sendToWhatsApp(event) {
    event.preventDefault(); // Prevents the page from refreshing

    // 1. Capture the form data
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMsg').value;

    // 2. Your Phone Number (International format: CountryCodeNumber)
    const myNumber = "+254708443570"; 

    // 3. Craft the encoded URL message
    // %0A creates a "New Line" in WhatsApp
    const encodedMessage = `*New Portfolio Message*%0A%0A` +
        `*Name:* ${firstName} ${lastName}%0A` +
        `*Email:* ${email}%0A` +
        `*Message:* ${message}`;

    // 4. Open the WhatsApp API link in a new tab
    const whatsappUrl = `https://wa.me/${myNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank').focus();

    // 5. Optional: Show an alert on the website too
    alert("Redirecting you to WhatsApp to send your message...");
}