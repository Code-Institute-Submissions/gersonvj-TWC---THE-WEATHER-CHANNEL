function sendMail(contactForm) {

    if(!emailIsValid(contactForm.emailaddress.value)){
        alert("Please enter a valid email address");
        return false;
    }
    
    emailjs.send("service_gn6ow6m", "template_y77eu9a", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
    })
    .then(
        function(response) {
            alert("Your message has been sent successfully");
        },
        function(error) {
            alert("Your email address is not correct");
        }
    );
    return false;  // To block from loading a new page
}

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
