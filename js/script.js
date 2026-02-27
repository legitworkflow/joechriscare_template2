


// Scroll to Top Button Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create the scroll to top button
  const scrollButton = document.createElement('button');
  scrollButton.id = 'scrollToTop';
  scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollButton.setAttribute('aria-label', 'Scroll to top');
  scrollButton.setAttribute('title', 'Back to top');
  document.body.appendChild(scrollButton);

  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollButton.classList.add('show');
    } else {
      scrollButton.classList.remove('show');
    }
  });

  // Smooth scroll to top when clicked
  scrollButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Auto-close mobile navbar on scroll
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarToggler = document.querySelector('.navbar-toggler');
  
  if (navbarCollapse && navbarToggler) {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
      // Check if navbar is open (has 'show' class)
      if (navbarCollapse.classList.contains('show')) {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Close navbar if user scrolls in any direction
        if (Math.abs(currentScrollTop - lastScrollTop) > 10) {
          // Use Bootstrap's collapse method to properly close the navbar
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          } else {
            // Fallback: manually remove the show class
            navbarCollapse.classList.remove('show');
          }
        }
        
        lastScrollTop = currentScrollTop;
      }
    });
  }
});



