<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <title>TAMAGOTCHI</title>
</head>
<body>

    <div class="container">
        <div class="screen">
            <div class="stats-bar">
                <div id="hungerDisplay">🍗100</div>
                <div id="sleepDisplay">🛏️100</div>
                <div id="funDisplay">🏀100</div>
            </div>
            <div class="character">
                <img src="images/kw.jpg" alt="A tamagotchi character of kanye west">
            </div>
        </div>
        <div class="buttons">
            <button id="increaseHungerButton"></button>
            <audio id="increaseHungerSound" src="audio/increaseHungerSound.mp3"></audio>
            <button id="increaseSleepButton"></button>
            <audio id="increaseSleepSound" src="audio/increaseSleepSound.mp3"></audio>
            <button id="increaseFunButton"></button>
            <audio id="increaseFunSound" src="audio/increaseFunSound.mp3"></audio>
        </div>
        <h1>TAMAGOTCHI ©</h1>
    </div>
    <script src="main.js"></script>
</body>
</html>