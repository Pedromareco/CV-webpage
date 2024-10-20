// Initialize variables for About Me section
let currentCard = 0; 
const cards = document.querySelectorAll('.about-card'); 

function updateCardDisplay() {
    const cardsContainer = document.querySelector('.about-cards');
    const cardWidth = cards[0].offsetWidth; 
    cardsContainer.style.transform = `translateX(-${currentCard * cardWidth}px)`; 
}

// Next button functionality for cards
document.getElementById('next-card').addEventListener('click', function() {
    if (currentCard < cards.length - 1) {
        currentCard++;
        updateCardDisplay();
    }
});

document.getElementById('prev-card').addEventListener('click', function() {
    if (currentCard > 0) {
        currentCard--;
        updateCardDisplay();
    }
});

//  first card display
updateCardDisplay();

function openTestimonial(evt, testimonialName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all tabs
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected tab content and add active class to the tab
    document.getElementById(testimonialName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Show the first testimonial by default
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks").click();
});

// Skill Bar Animation
window.onload = function() {
    const skills = document.querySelectorAll('.skill .bar');
    skills.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0%'; 
        setTimeout(() => {
            skill.style.width = width; 
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
        popup.style.display = 'none'; 
    };

    // Exit button event
    exitButton.onclick = function() {
        alert("Game Over! Thanks for visiting.");
        window.location.href = "about:blank"; 
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

//  Contact Form Submission and Email Sending
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    emailjs.sendForm('service_upd0knq', 'template_8x2vc28', this)
        .then(function() {
            alert('Nachricht erfolgreich gesendet!');
            document.getElementById('contact-form').reset(); 
        }, function(error) {
            alert('Fehler beim Senden der Nachricht: ' + JSON.stringify(error));
        });
});
