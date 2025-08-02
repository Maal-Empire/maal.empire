document.addEventListener('DOMContentLoaded', function() {
    // List of thumbnail images (no links needed)
    const images = [
        "assets/image1.jpg",
        "assets/image2.jpg",
        "assets/image3.jpg",
        "assets/image4.jpg",
        "assets/image5.jpg"
    ];

    let currentImage = 0;
    const thumbnail = document.getElementById('thumbnail');

    // Initial set
    if (thumbnail) {
        thumbnail.src = images[0];
    }

    // Change image every 5 seconds
    setInterval(() => {
        currentImage = (currentImage + 1) % images.length;
        if (thumbnail) {
            thumbnail.src = images[currentImage];
        }
    }, 5000);

    // Modal logic
    const modal = document.getElementById('signupModal');
    const signupBtn = document.getElementById('signupBtn');
    const closeModal = document.getElementById('closeModal');
    const signupForm = document.getElementById('signupForm');
    const requestsList = document.getElementById('requestsList');

    if(signupBtn && modal){
        signupBtn.addEventListener('click', () => {
            modal.style.display = "block";
        });
    }
    if(closeModal && modal){
        closeModal.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }
    window.addEventListener('click', (e) => {
        if (modal && e.target == modal) modal.style.display = "none";
    });

    // Handle sign up form
    if(signupForm && requestsList && modal){
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.name.value;
            const email = this.email.value;
            const phone = this.phone.value;
            const dob = this.dob.value;
            // Add request to list
            const li = document.createElement('li');
            li.textContent = `Name: ${name}, Email: ${email}, Phone: ${phone}, DOB: ${dob}`;
            requestsList.appendChild(li);
            // Reset form & close modal
            this.reset();
            modal.style.display = "none";
        });
    }

    // Contact Us button
    const contactBtn = document.getElementById('contactBtn');
    if(contactBtn){
        contactBtn.addEventListener('click', () => {
            // Edit these details to your own!
            const whatsappNumber = 'YOUR_WHATSAPP_NUMBER'; // e.g., 1234567890
            const email = 'your@email.com';
            const phone = '+1234567890';

            // Show a simple prompt for contact options
            let contact = prompt("Contact Us:\n1. WhatsApp\n2. Email\n3. Phone\nEnter 1, 2, or 3:");
            if (contact === '1') {
                window.open(`https://wa.me/${whatsappNumber}`, "_blank");
            } else if (contact === '2') {
                window.location.href = `mailto:${email}`;
            } else if (contact === '3') {
                window.location.href = `tel:${phone}`;
            }
        });
    }
});
