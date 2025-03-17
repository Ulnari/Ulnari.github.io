// Get elements
const screenshots = document.querySelectorAll('.screenshots img');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');
const closeBtn = document.getElementById('close-overlay');

// Add click event to each screenshot
screenshots.forEach(img => {
  img.addEventListener('click', () => {
    overlayImg.src = img.src; // Set overlay image to clicked image
    overlay.style.display = 'flex'; // Show overlay
  });
});

// Close overlay when close button is clicked
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Optional: Close overlay when clicking outside the image
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});
