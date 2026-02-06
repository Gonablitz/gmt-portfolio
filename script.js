function welcomeAlert() {
    alert("Welcome to my journey! Explore my childhood, education, skills, and projects to see how I've grown and what I'm passionate about 😁");
}

function validateForm(e) {
    e.preventDefault();
    alert("Form submitted successfully!");
    return true;
}

// Prevents the page from refreshing on form submission
function sendToWhatsApp(event) {
    event.preventDefault(); 

   
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMsg').value;

    
    const myNumber = "+254708443570"; 

   
    const encodedMessage = `*New Portfolio Message*%0A%0A` +
        `*Name:* ${firstName} ${lastName}%0A` +
        `*Email:* ${email}%0A` +
        `*Message:* ${message}`;

  
    const whatsappUrl = `https://wa.me/${myNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank').focus();

   
    alert("Redirecting you to WhatsApp to send your message...");
}