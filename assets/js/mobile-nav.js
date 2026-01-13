(() => {
  const body = document.body;
  const toggleBtn = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const closeBtn = mobileNav?.querySelector('.mobile-nav__close');
  const overlay = mobileNav?.querySelector('.mobile-nav__overlay');

  if (!toggleBtn || !mobileNav || !closeBtn || !overlay) return;

  const setState = (open) => {
    body.classList.toggle('mobile-nav-open', open);
    toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    mobileNav.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (open) {
      closeBtn.focus();
    } else {
      toggleBtn.focus();
    }
  };

  toggleBtn.addEventListener('click', () => {
    const isOpen = body.classList.contains('mobile-nav-open');
    setState(!isOpen);
  });

  closeBtn.addEventListener('click', () => setState(false));
  overlay.addEventListener('click', () => setState(false));

  // Cerrar al hacer click en un link
  mobileNav.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (a) setState(false);
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && body.classList.contains('mobile-nav-open')) {
      setState(false);
    }
  });
})();
