// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    /* Hamburger Menu Toggle */
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-modal'); // Reuse close button
  
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });
  
    // Close mobile menu when clicking outside or on a link
    mobileMenu.addEventListener('click', (e) => {
      if (e.target.classList.contains('mobile-menu') || e.target.tagName === 'A') {
        mobileMenu.classList.remove('active');
      }
    });
  
    /* Portfolio Filtering */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');
  
        const category = button.getAttribute('data-category');
  
        portfolioItems.forEach(item => {
          if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
            item.classList.add('animate');
          } else {
            item.style.display = 'none';
            item.classList.remove('animate');
          }
        });
      });
    });
  
    /* Modal Video Preview */
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const closeModalBtn = document.querySelector('.close-modal');
    const playIcons = document.querySelectorAll('.play-icon');
  
    playIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        const videoSrc = icon.getAttribute('data-video') + "?autoplay=1";
        modalVideo.src = videoSrc;
        modal.style.display = 'block';
      });
    });
  
    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      modalVideo.src = "";
    });
  
    // Close modal when clicking outside the video
    window.addEventListener('click', (e) => {
      if (e.target == modal) {
        modal.style.display = 'none';
        modalVideo.src = "";
      }
    });
  });
  