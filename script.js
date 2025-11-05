function activate(panel) {
document.querySelectorAll('.panel').forEach(p => {
p.classList.toggle('active', p === panel);
p.setAttribute('aria-pressed', p === panel ? 'true' : 'false');
});
}


// Click to activate
document.querySelectorAll('.panel').forEach((panel) => {
panel.addEventListener('click', () => activate(panel));
// Keyboard support: Enter/Space to activate; Arrow keys to navigate
panel.addEventListener('keydown', (e) => {
const panels = Array.from(document.querySelectorAll('.panel'));
const idx = panels.indexOf(panel);
if (e.key === 'Enter' || e.key === ' ') {
e.preventDefault();
activate(panel);
} else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
e.preventDefault();
const next = panels[(idx + 1) % panels.length];
next.focus();
activate(next);
} else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
e.preventDefault();
const prev = panels[(idx - 1 + panels.length) % panels.length];
prev.focus();
activate(prev);
}
});
});