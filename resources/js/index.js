window.addEventListener('resize', function() {
    //setSwirlSpeed();
    setDimension();
});

function setSwirlSpeed() {
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;
    const hypotenuse = Math.sqrt(innerHeight * innerHeight + innerWidth * innerWidth)
    const speed = (hypotenuse / 1000).toFixed(2) + 's';
    console.log(hypotenuse, speed);
    const swirl = document.getElementById('swirl');
    swirl.style.setProperty('--speed', speed)

}

function setDimension() {
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;
    const swirlContainer = document.getElementById('swirl-container');
    const radius = Math.max(window.innerHeight, window.innerWidth) / 2;
    const left = ((2 * radius) - innerWidth) / -2;
    const top = ((2 * radius) - innerHeight) / -2;
    swirlContainer.style.setProperty('--radius', radius + 'px');
    swirlContainer.style.setProperty('--left', left + 'px');
    swirlContainer.style.setProperty('--top', top + 'px');
    const swirlOverlay = document.getElementById('swirl-overlay');
    swirlOverlay.style.setProperty('--radius', radius + 'px');
    swirlOverlay.style.setProperty('--left', left + 'px');
    swirlOverlay.style.setProperty('--top', top + 'px');
}

//setSwirlSpeed();
setDimension(); 