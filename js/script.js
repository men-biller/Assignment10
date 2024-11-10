// Manipulate Image 1 (e.g., toggle visibility)
const ef5damage = document.getElementById('ef5damage');
ef5damage.onclick = () => {
    ef5damage.style.display = (ef5damage.style.display === 'none') ? 'block' : 'none';
};

// Manipulate Image 2 (e.g., rotate on hover)
const ef4damage = document.getElementById('ef4damage');
ef4damage.onmouseenter = () => {
    ef4damage.style.transform = 'rotate(180deg)';
    ef4damage.style.transition = 'transform 0.5s';
};
ef4damage.onmouseleave = () => {
    ef4damage.style.transform = 'rotate(0deg)';
};
