document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to elements
    const elementsToAnimate = document.querySelectorAll('.project-card, .blog-card, .about, .hero');
    elementsToAnimate.forEach(element => {
      element.classList.add('fadeIn');
    });
  
    // Form validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        let hasError = false;
        
        // Name validation
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        
        if (nameInput.value.trim() === '') {
          nameError.textContent = 'Please enter your name';
          hasError = true;
        } else {
          nameError.textContent = '';
        }
        
        // Email validation
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailPattern.test(emailInput.value)) {
          emailError.textContent = 'Please enter a valid email address';
          hasError = true;
        } else {
          emailError.textContent = '';
        }
        
        // Message validation
        const messageInput = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        
        if (messageInput.value.trim() === '') {
          messageError.textContent = 'Please enter your message';
          hasError = true;
        } else if (messageInput.value.trim().length < 10) {
          messageError.textContent = 'Message must be at least 10 characters';
          hasError = true;
        } else {
          messageError.textContent = '';
        }
        
        if (hasError) {
          e.preventDefault();
        }
      });
      
      // Real-time validation
      const inputs = contactForm.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        input.addEventListener('input', function() {
          if (input.id === 'name') {
            const nameError = document.getElementById('nameError');
            if (input.value.trim() === '') {
              nameError.textContent = 'Please enter your name';
            } else {
              nameError.textContent = '';
            }
          }
          
          if (input.id === 'email') {
            const emailError = document.getElementById('emailError');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailPattern.test(input.value) && input.value.trim() !== '') {
              emailError.textContent = 'Please enter a valid email address';
            } else {
              emailError.textContent = '';
            }
          }
          
          if (input.id === 'message') {
            const messageError = document.getElementById('messageError');
            
            if (input.value.trim() === '') {
              messageError.textContent = 'Please enter your message';
            } else if (input.value.trim().length < 10) {
              messageError.textContent = 'Message must be at least 10 characters';
            } else {
              messageError.textContent = '';
            }
          }
        });
      });
    }
  });