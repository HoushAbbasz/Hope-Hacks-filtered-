
document.addEventListener('DOMContentLoaded', ()=> {
  // create button element
  const backToTopBtn = document.createElement('button');
  backToTopBtn.id = 'backToTopBtn';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  backToTopBtn.innerHTML = '↑';
  
  // add classes for styling
  backToTopBtn.className = 'fixed bottom-[1.5rem] right-[2rem] w-[3rem] h-[3rem] bg-[#669BBC] text-white rounded-full shadow-lg hover:bg-[#242423] transition-all duration-300 opacity-0 pointer-events-none z-50 flex items-center justify-center text-[1.5rem] font-bold';
  
  // append to body
  document.body.appendChild(backToTopBtn);
  
  // show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
    }
  });
  
  // scroll to top when clicked
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});