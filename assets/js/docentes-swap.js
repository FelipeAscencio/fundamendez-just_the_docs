(() => {
  const imgs = document.querySelectorAll('img.fm-doc-avatar--swap[data-alt]');

  if (!imgs.length) return;

  const swap = (img) => {
    const alt = img.getAttribute('data-alt');
    const src = img.getAttribute('src');
    if (!alt || !src) return;

    img.classList.add('is-swapping');

    // pequeño delay para que se vea el fade
    setTimeout(() => {
      img.setAttribute('src', alt);
      img.setAttribute('data-alt', src);
      img.classList.remove('is-swapping');
    }, 80);
  };

  imgs.forEach((img) => {
    // Desktop hover
    img.addEventListener('mouseenter', () => swap(img));
    img.addEventListener('mouseleave', () => swap(img));

    // Mobile/touch: tap para alternar
    img.addEventListener('click', (e) => {
      // evita que un tap accidental siga un link cercano en algunos casos
      e.preventDefault();
      swap(img);
    });
  });
})();
