window.addEventListener('resize', function() {
    setDimension();
});

function setDimension() {
    const swirl = document.getElementById('swirl');
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;
    const radius = Math.max(window.innerHeight, window.innerWidth) / 2;
    // const radius = Math.round(Math.sqrt((innerHeight / 2) * (innerHeight / 2) + (innerWidth / 2) * (innerWidth / 2))) + 20;
    const left = ((2 * radius) - innerWidth) / -2;
    const top = ((2 * radius) - innerHeight) / -2;
    swirl.style.setProperty('--radius', radius + 'px');
    swirl.style.setProperty('--left', left + 'px');
    swirl.style.setProperty('--top', top + 'px');
}

setDimension(); 