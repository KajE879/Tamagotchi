<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <title>TAMAGOTCHI</title>
</head>
<body>
    <div id="hamburgerMenu" class="hamburgerMenu">
        <button id="menuButton" class="menuButton">☰</button>
        <div id="menuContent" class="menuContent">
            <button id="toggleMusic">Music On/Off</button>
            <ul>
                <p>Keybinds:</p>
                <li>← Hunger</li>
                <li>↓ Sleep</li>
                <li>→ Fun</li>
            </ul> 
        </div>
    </div>
    <div id="start-screen" class="start-screen">
        <h1>Welcome to the YE-magotchi Game</h1>
        <button id="start-button" class="start-button">Start Game</button>
    </div>
    <div id="game-container" style="display: none;">
        <div class="container">
            <div class="screen">
                <div class="stats-bar">
                    <div id="hungerDisplay">🍗100</div>
                    <div id="sleepDisplay">🛏️100</div>
                    <div id="funDisplay">🏀100</div>
                </div>
                <div class="alertDisplay">
                    <div class="alert" id="hungerAlertDisplay"></div>
                    <div class="alert" id="sleepAlertDisplay"></div>
                    <div class="alert" id="funAlertDisplay"></div>
                </div>
                <div class="character">
                    <img src="images/kw.jpg" alt="A tamagotchi character of kanye west">
                </div>
            </div>
            <div class="buttons">
                <button id="increaseHungerButton"></button>
                <button id="increaseSleepButton"></button>
                <button id="increaseFunButton"></button>
            </div>
            <h1>YE-MAGOTCHI ©</h1>
        </div>
    </div>
    <audio id="music" src="audio/music.mp3" loop></audio>
    <script src="main.js"></script>
</body>
</html>