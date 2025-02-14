document.addEventListener("DOMContentLoaded", () => {
    // Scroll Animation using Intersection Observer
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("visible", entry.isIntersecting);
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // Image Slider Functionality
    const sliders = document.querySelectorAll('.project-slider');

    sliders.forEach(slider => {
        let images = slider.querySelectorAll('img');
        let currentIndex = 0;

        setInterval(() => {
            images.forEach((img) => img.style.display = 'none'); // Hide all images
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].style.display = 'block'; // Show next image
        }, 3000); // Change image every 3 seconds
    });

    // Toggle Read More functionality
    const readMoreBtn = document.querySelector('.read-more-btn');
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function () {
            const moreText = document.querySelector('.more-text');
            if (moreText) {
                moreText.style.display = 'inline';
                this.style.display = 'none'; // Hide the 'Read More' button after it's clicked
            }
        });
    }

    // Contact Form Validation
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Message Sent Successfully!");
        });
    }

    // Projects visibility on scroll
    const projects = document.querySelectorAll(".project");

    function checkProjectInView() {
        const windowHeight = window.innerHeight;
        projects.forEach(project => {
            const rect = project.getBoundingClientRect();
            if (rect.top <= windowHeight * 0.75) { // Trigger when the project is 75% in view
                project.classList.add("visible");
            }
        });
    }
    

    window.addEventListener("scroll", checkProjectInView);
    checkProjectInView(); // Run the function when the page loads to animate already visible elements
});
// Open Modal Functionality
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        const modal = document.getElementById('project-modal');
        const images = modal.querySelectorAll('.modal-slider img');
        
        // Reset the slider (in case previous content is still showing)
        images.forEach(img => img.style.display = 'none');
        
        // Show the modal
        modal.style.display = 'flex';

        // Optionally, you can change the images and content dynamically based on the clicked project
        // Example: Assuming you have the information for each project, you could load them here
        // For example:
        modal.querySelector('.modal-slider img:nth-child(1)').style.display = 'block';
        modal.querySelector('.modal-slider img:nth-child(2)').style.display = 'block';
        modal.querySelector('.modal-slider img:nth-child(3)').style.display = 'block';
        modal.querySelector('.modal-slider img:nth-child(4)').style.display = 'block';

        modal.querySelector('.modal-info h3').innerText = project.querySelector('h3').innerText;
        modal.querySelector('.modal-info .description').innerText = "Detailed description of the project goes here.";
        modal.querySelector('.modal-info p:nth-child(2)').innerText = "Technologies Used: React, JavaScript, CSS";
        modal.querySelector('.modal-info p:nth-child(3)').innerText = "Additional Information: Detailed info about the project.";
    });
});

// Close Modal Functionality
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('project-modal').style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', event => {
    if (event.target == document.getElementById('project-modal')) {
        document.getElementById('project-modal').style.display = 'none';
    }
});
