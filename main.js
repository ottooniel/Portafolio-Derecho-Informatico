// ── Active nav link on scroll ──────────────────────────────────
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navLinks');

function highlightNav() {
    const y = window.scrollY + 80;
    sections.forEach(sec => {
        if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
            navLinks.forEach(a => a.classList.remove('active'));
            const active = document.querySelector(`.nav-link[href="#${sec.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNav, { passive: true });
highlightNav();

// ── Mobile menu toggle ─────────────────────────────────────────
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// ── Smooth scroll with navbar offset ──────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        window.scrollTo({
            top: target.offsetTop - 62,
            behavior: 'smooth'
        });
    });
});
