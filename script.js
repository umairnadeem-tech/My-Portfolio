// Handle the form submission
document.getElementById("contact_form").addEventListener("submit", function(event){
    event.preventDefault();  // Prevent the form from submitting normally

    // Get form values
    var name = document.getElementById("user_name").value;
    var email = document.getElementById("user_email").value;
    var subject = document.getElementById("user_subject").value;
    var message = document.getElementById("user_message").value;

    // Ensure that all fields are filled
    if (name && email && subject && message) {
        // Send the email using EmailJS
        emailjs.send("service_jedbhw9", "template_pf8gure", {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_name: "Muhammad Umair",  // Replace this with the name of the recipient
        })
        .then(function(response) {
            // If the email was sent successfully
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your message has been sent successfully!',
                showConfirmButton: false,
                timer: 1500
            });
            console.log("Success:", response);
        }, function(error) {
            // If there was an error
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong. Please try again later.',
                showConfirmButton: true
            });
            console.log("Error:", error);
        });
    } else {
        // If any fields are missing
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Please fill out all fields.',
            showConfirmButton: true
        });
    }
});
