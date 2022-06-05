function randomRGB() {
    r = Math.floor(Math.random * 256);
    g = Math.floor(Math.random * 256);
    b = Math.floor(Math.random * 256);
    return `rgb(${r},${g},${b})`
}

const letters = document.querySelectorAll('.letter');
const intervalId = setInterval(function() {
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 1000);