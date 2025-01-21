const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const bgMusic = document.getElementById('bgMusic');
const eatSound = document.getElementById('eatSound');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Laad afbeeldingen
const kanyeImage = new Image();
kanyeImage.src = 'kanye_pixel_art.png';
const bgImage = new Image();
bgImage.src = 'ye_base.jpg';
const bgImageAldi = new Image();
bgImageAldi.src = 'ye_aldi.png';

// Controleer of de afbeelding correct is geladen
kanyeImage.onload = () => {
    console.log('Afbeelding is geladen');
};

// Karakter object
const kanye = {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    speed: 5
};

// Speltoestand
let currentBackground = bgImage;
let userAction = null;

// Gebeurtenis luisteraars voor karakter beweging
window.addEventListener('keydown', (event) => {
    userAction = event.key;
});
window.addEventListener('keyup', () => { userAction = null; });

function updateCharacterPosition() {
    switch(userAction) {
        case 'ArrowRight':
            kanye.x += kanye.speed;
            break;
        case 'ArrowLeft':
            kanye.x -= kanye.speed;
            break;
        case 'ArrowUp':
            kanye.y -= kanye.speed;
            break;
        case 'ArrowDown':
            kanye.y += kanye.speed;
            break;
        case 'e': // Eet actie
            eatSound.play();
            currentBackground = bgImageAldi;
            break;
        default:
            break;
    }
}

// Teken alles op canvas
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(currentBackground, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(kanyeImage, kanye.x, kanye.y, kanye.width, kanye.height);
}

// Spel loop
function gameLoop() {
    updateCharacterPosition();
    draw();
    requestAnimationFrame(gameLoop);
}

// Initial draw call
kanyeImage.onload = () => {
    bgImage.onload = () => {
        gameLoop();
    };
};

// Controleer of er fouten zijn
if (kanyeImage.complete && kanyeImage.naturalWidth === 0) {
    console.error('Afbeelding niet correct geladen');
}
