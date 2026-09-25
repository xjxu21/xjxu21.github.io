(() => {
  const links = Array.from(document.querySelectorAll('.section-navigation a'));
  const sections = links.map(link => document.querySelector(link.hash));
  if (sections.some(section => !section)) return;
  let pending = false;
  function update() {
    let active = 0;
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top <= 130) active = index;
    });
    if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) active = links.length - 1;
    links.forEach((link, index) => {
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    pending = false;
  }
  function schedule() {
    if (!pending) { pending = true; requestAnimationFrame(update); }
  }
  window.addEventListener('scroll', schedule, {passive: true});
  window.addEventListener('resize', schedule);
  document.addEventListener('click', schedule);
  update();
})();
