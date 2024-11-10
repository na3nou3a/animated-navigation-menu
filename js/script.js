const header = document.querySelector('.main-header');
const headerImg = document.querySelector('.header-img');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelectorAll('.nav-link');

menuBtn.addEventListener('click', () => header.classList.toggle('active'));

navLinks.forEach((link) => {
  const text = link.textContent;
  link.textContent = '';
  text.split('').forEach((letter, i) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.className = 'letter';
    span.style.cssText = `--i: ${(i / 10 + 0.2).toFixed(1)}s`;
    link.appendChild(span);
  });
  link.addEventListener('mouseenter', () => {
    headerImg.style.left = link.dataset.position + '%';
    headerImg.style.transform = `translate(-50%, -50%) rotate(${link.dataset.position * 8}deg)`;
  });
  link.addEventListener('mouseleave', () => {
    headerImg.style.left = '25%';
    headerImg.style.transform = `translate(-50%, -50%) rotate(0deg)`;
  });
});
