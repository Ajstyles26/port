// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        window.scrollTo({
            top: target.offsetTop - 80, // Adjusted for header height
            behavior: 'smooth'
        });
    });
});

// EmailJS initialization
(function() {
    // Replace "bD1YuvulgWoe0M_wr" with your actual EmailJS public key
    emailjs.init("bD1YuvulgWoe0M_wr");
})();

// Form submission handling with EmailJS
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show sending indicator
        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = "Sending...";
        submitButton.disabled = true;
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Create the email content directly instead of using a template from EmailJS
        const emailContent = {
            service_id: 'service_r1lo3ls',
            template_id: 'email_template', // This can be any template you create in EmailJS (even a blank one)
            user_id: 'bD1YuvulgWoe0M_wr', // Replace with your public key
            template_params: {
                'to_email': 'adebayoboboye7@gmail.com',
                'from_name': name,
                'from_email': email,
                'subject': `Portfolio Contact from ${name}`,
                'message_html': `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="background-color: #3498db; color: white; padding: 20px; text-align: center;">New Contact Form Message</h2>
                        <div style="padding: 20px; border: 1px solid #ddd;">
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Message:</strong></p>
                            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
                                ${message.replace(/\n/g, '<br>')}
                            </div>
                        </div>
                        <div style="text-align: center; margin-top: 20px; color: #777; font-size: 0.8em;">
                            <p>This email was sent from your portfolio website contact form.</p>
                        </div>
                    </div>
                `
            }
        };
        
        // Send the email
        emailjs.send(emailContent.service_id, emailContent.template_id, emailContent.template_params)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                alert(`Thank you ${name} for your message! I'll get back to you soon.`);
                
                // Reset the form
                contactForm.reset();
                
                // Reset button
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            }, function(error) {
                console.log('FAILED...', error);
                
                // Show error message
                alert('Sorry, there was a problem sending your message. Please try again or contact me directly at adebayoboboye7@gmail.com');
                
                // Reset button
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            });
    });
}

// Active navigation highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll reveal animation
window.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.skill, .project, .education-item');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Add initial styles
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check elements on load
    checkScroll();
    
    // Check elements on scroll
    window.addEventListener('scroll', checkScroll);
});