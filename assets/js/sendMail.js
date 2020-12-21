function sendMail(contactForm) {
    emailjs.send("service_gn6ow6m", "template_y77eu9a", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        
    })
    .then(
        function(response) {
            alert("Your message has been sent successfully")
        },
        function(error) {
            alert("Your email adress is not correct")
        }
    );
    return false;  // To block from loading a new page
}