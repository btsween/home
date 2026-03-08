const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateNav() {
  const scrollY = window.scrollY + 120;
  let current = sections[0];

  sections.forEach(section => {
    if (section.offsetTop <= scrollY) {
      current = section;
    }
  });

  navLinks.forEach(link => link.classList.remove('active'));
  const active = document.querySelector(`.nav-link[href="#${current.id}"]`);
  if (active) active.classList.add('active');
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();
