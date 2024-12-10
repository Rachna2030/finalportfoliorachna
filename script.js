document.getElementById("contact").addEventListener("submit", function(event) {
   const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
if (!name || !email || !subject || !message) {
        event.preventDefault(); 
        alert("Please fill in all the fields before submitting.");
        return false; 
    }

   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        event.preventDefault(); 
        alert("Please enter a valid email address.");
        return false;
    }

   alert("Thank you for your message! We will get back to you soon.");
    return true;
});

    document.getElementById('downloadCV').addEventListener('click', function (e) {
        e.preventDefault(); 
        var link = document.createElement('a');
        link.href = 'rachna.pdf';
        link.download = 'RachnaCV.pdf'; 
        link.click();  
    });


