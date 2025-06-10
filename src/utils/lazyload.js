export function initializeLazyLoading() {
  const lazyloadImages = document.querySelectorAll('.lazyload');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazyload');
        observer.unobserve(img);
      }
    });
  });

  lazyloadImages.forEach(image => {
    observer.observe(image);
  });
}
