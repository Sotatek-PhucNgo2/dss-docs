/* ── Hamburger ── */
const hamburger = document.getElementById('hamburger');
const sidebar   = document.getElementById('sidebar');
const overlay   = document.getElementById('overlay');

function toggleSidebar() {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}
hamburger.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

/* ── Theme toggle ── */
const toggleBtn = document.getElementById('themeToggle');
const html      = document.documentElement;

const ICON = { light: '🌙', dark: '☀️' };

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  toggleBtn.textContent = ICON[theme];
  localStorage.setItem('dss-theme', theme);
}

// init — default = light
const saved = localStorage.getItem('dss-theme') || 'light';
applyTheme(saved);

toggleBtn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});
