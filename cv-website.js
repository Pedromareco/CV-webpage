// Skill Bar Animation
window.onload = function() {
    const skills = document.querySelectorAll('.skill .bar');
    skills.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0%'; // Start from 0%
        setTimeout(() => {
            skill.style.width = width; // Animate to actual width
        }, 100);
    });

    // Pop-up Welcome Screen
    const popup = document.getElementById('welcome-popup');
    const playButton = document.getElementById('play-button');
    const exitButton = document.getElementById('exit-button');

    // Display the popup
    popup.style.display = 'flex';

    // Play button event
    playButton.onclick = function() {
        popup.style.display = 'none'; // Close popup
    };

    // Exit button event
    exitButton.onclick = function() {
        alert("Game Over! Thanks for visiting.");
        window.location.href = "about:blank"; // Redirect to a blank page
    };
};

// Accordion FAQ
const acc = document.querySelectorAll(".accordion");
acc.forEach(button => {
    button.addEventListener("click", function() {
        this.classList.toggle("active");

        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});

// Handling Feedback Form Submission and Email Sending
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.send("service_upd0knq", "template_54m056l", {
        rating: document.getElementById('rating').value,
        feedback: document.getElementById('feedback').value
    })
    .then(function(response) {
        alert('Feedback erfolgreich gesendet!');
        document.getElementById('feedback-form').reset(); // Reset form after sending
    }, function(error) {
        alert('Fehler beim Senden des Feedbacks: ' + JSON.stringify(error));
    });
});

// Handling Contact Form Submission and Email Sending
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way
    
    emailjs.sendForm('service_upd0knq', 'template_8x2vc28', this)
        .then(function() {
            alert('Nachricht erfolgreich gesendet!');
            document.getElementById('contact-form').reset(); // Reset form after sending
        }, function(error) {
            alert('Fehler beim Senden der Nachricht: ' + JSON.stringify(error));
        });
});
