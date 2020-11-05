function sendMail(contactForm) {
    emailjs.send("service_gn6ow6m", "template_y77eu9a", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}