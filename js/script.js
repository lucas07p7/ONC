const revealPhotos = document.querySelectorAll('.photo-reveal');

if ('IntersectionObserver' in window) {
  const photoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.22,
    rootMargin: '0px 0px -40px 0px'
  });

  revealPhotos.forEach((photo) => photoObserver.observe(photo));
} else {
  revealPhotos.forEach((photo) => photo.classList.add('is-visible'));
}
