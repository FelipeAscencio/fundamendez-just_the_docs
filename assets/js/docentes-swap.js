// Implementación del cambio de imagen al pasar el ratón o hacer clic en las imágenes de los docentes.
(() => {
  const imgs = document.querySelectorAll('img.fm-doc-avatar--swap[data-alt]');
  if (!imgs.length) return;

  const swap = (img) => {
    const alt = img.getAttribute('data-alt');
    const src = img.getAttribute('src');
    if (!alt || !src) return;

    img.classList.add('is-swapping');
    setTimeout(() => {
      img.setAttribute('src', alt);
      img.setAttribute('data-alt', src);
      img.classList.remove('is-swapping');
    }, 80);
  };

  imgs.forEach((img) => {
    img.addEventListener('mouseenter', () => swap(img));
    img.addEventListener('mouseleave', () => swap(img));
    img.addEventListener('click', (e) => {
      e.preventDefault();
      swap(img);
    });
  });
})();
