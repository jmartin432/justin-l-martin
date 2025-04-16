window.addEventListener('resize', function() {
    setDimension();
});

function setDimension() {
    const swirl = document.getElementById('swirl');
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;
    const radius = Math.max(window.innerHeight, window.innerWidth) / 2;
    const left = ((2 * radius) - innerWidth) / -2;
    const top = ((2 * radius) - innerHeight) / -2;
    swirl.style.setProperty('--radius', radius + 'px');
    swirl.style.setProperty('--left', left + 'px');
    swirl.style.setProperty('--top', top + 'px');
    const swirlOverlay = document.getElementById('swirl-overlay');
    swirlOverlay.style.setProperty('--radius', radius + 'px');
    swirlOverlay.style.setProperty('--left', left + 'px');
    swirlOverlay.style.setProperty('--top', top + 'px');
}

setDimension(); 