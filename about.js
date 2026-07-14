const state = {
  theme: localStorage.getItem('nova_theme') || 'dark'
};

function initAbout() {
  setTheme();
  bindEvents();
  setupReveal();
  setupCounters();
}

function bindEvents() {
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  document.getElementById('navToggle').addEventListener('click', toggleNav);
  document.querySelectorAll('.newsletter-form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = form.querySelector('button');
      button.textContent = 'Subscribed';
      setTimeout(() => (button.textContent = 'Subscribe'), 1800);
      form.reset();
    });
  });
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  setTheme();
}

function setTheme() {
  document.body.dataset.theme = state.theme;
  localStorage.setItem('nova_theme', state.theme);
  const icon = document.getElementById('themeToggle').querySelector('i');
  icon.className = state.theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
}

function toggleNav() {
  document.getElementById('siteNav').classList.toggle('open');
}

function setupReveal() {
  document.querySelectorAll('.reveal').forEach((element) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    observer.observe(element);
  });
}

function setupCounters() {
  document.querySelectorAll('.counter').forEach((counter) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = Number(entry.target.dataset.target);
        let current = 0;
        const start = performance.now();
        const duration = 1200;
        const tick = (time) => {
          const progress = Math.min((time - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          current = Math.floor(target * eased);
          entry.target.textContent = `${current}${target > 100 ? '+' : ''}`;
          if (progress < 1) requestAnimationFrame(tick);
          else entry.target.textContent = `${target}${target > 100 ? '+' : ''}`;
        };
        requestAnimationFrame(tick);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.7 });
    observer.observe(counter);
  });
}

document.addEventListener('DOMContentLoaded', initAbout);
