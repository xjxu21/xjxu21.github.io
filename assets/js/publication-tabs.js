(() => {
  const ids = ['interactive-world-models', 'multimodal-understanding-and-generation'];
  const headings = ids.map(id => document.getElementById(id));
  if (headings.some(heading => !heading)) return;

  const tablist = document.createElement('div');
  tablist.className = 'publication-tabs';
  tablist.setAttribute('role', 'tablist');
  tablist.setAttribute('aria-label', 'Research topics');
  headings[0].before(tablist);

  const panels = headings.map((heading, index) => {
    const panel = document.createElement('section');
    panel.id = ids[index];
    panel.className = 'publication-panel';
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', `tab-${ids[index]}`);
    panel.tabIndex = 0;
    heading.removeAttribute('id');
    heading.before(panel);
    let next = heading.nextElementSibling;
    while (next && next.classList.contains('paper-box')) {
      const paper = next;
      next = next.nextElementSibling;
      panel.append(paper);
    }
    const button = document.createElement('button');
    button.type = 'button';
    button.id = `tab-${ids[index]}`;
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-controls', panel.id);
    button.textContent = heading.textContent;
    tablist.append(button);
    heading.remove();
    return panel;
  });
  const buttons = Array.from(tablist.children);
  function select(index) {
    panels.forEach((panel, i) => {
      panel.hidden = i !== index;
      buttons[i].setAttribute('aria-selected', String(i === index));
      buttons[i].tabIndex = i === index ? 0 : -1;
    });
  }
  function fromHash(scroll = false) {
    const index = ids.indexOf(location.hash.slice(1));
    select(index < 0 ? 0 : index);
    if (scroll && index >= 0) tablist.scrollIntoView({block: 'start'});
  }
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      select(index);
      history.pushState(null, '', `#${ids[index]}`);
    });
    button.addEventListener('keydown', event => {
      let target;
      if (event.key === 'ArrowRight') target = (index + 1) % buttons.length;
      if (event.key === 'ArrowLeft') target = (index + buttons.length - 1) % buttons.length;
      if (event.key === 'Home') target = 0;
      if (event.key === 'End') target = buttons.length - 1;
      if (target === undefined) return;
      event.preventDefault();
      buttons[target].focus();
      buttons[target].click();
    });
  });
  document.querySelectorAll('.biography a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const index = ids.indexOf(link.hash.slice(1));
      if (index < 0) return;
      event.preventDefault();
      buttons[index].click();
      tablist.scrollIntoView({block: 'start'});
    });
  });
  window.addEventListener('hashchange', () => fromHash(true));
  document.querySelector('.profile-home')?.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    history.pushState(null, '', event.currentTarget.href);
    select(0);
    window.scrollTo({top: 0, behavior: 'instant'});
  });
  fromHash(ids.includes(location.hash.slice(1)));

  // Warm both topic panels immediately, including images in the hidden panel.
  // Decode asynchronously so switching topics does not wait on lazy loading.
  panels.forEach(panel => {
    panel.querySelectorAll('img').forEach(img => {
      img.decoding = 'async';
      img.loading = 'eager';
      if (typeof img.decode === 'function') img.decode().catch(() => {});
    });
  });
})();
