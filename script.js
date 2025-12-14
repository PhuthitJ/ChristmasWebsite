document.addEventListener('DOMContentLoaded', () => {
    // Snowfall Logic
    const snowContainer = document.getElementById('snow-container');
    const snowflakeCount = 50;

    for (let i = 0; i < snowflakeCount; i++) {
        createSnowflake();
    }

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        const size = Math.random() * 5 + 2 + 'px';
        snowflake.style.width = size;
        snowflake.style.height = size;
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.opacity = Math.random();
        
        snowContainer.appendChild(snowflake);

        // Reset snowflake after animation
        snowflake.addEventListener('animationiteration', () => {
            snowflake.style.left = Math.random() * 100 + 'vw';
            snowflake.style.opacity = Math.random();
        });
    }

    // Wishes Logic
    const wishes = [
        "Merry Christmas! May your happiness be large and your bills be small.",
        "Wishing you a season full of light and laughter.",
        "May the magic of Christmas fill your heart all year long.",
        "Eat, drink, and be merry!",
        "Santa told me you were good this year... mostly.",
        "Sending you warm hugs and hot cocoa desires.",
        "May your Christmas be wrapped in happiness and tied with love.",
        "Have a holly, jolly Christmas!",
        "Peace, Love, and Joy to you and your family.",
        "Phuthitj wishes you a Merry Christmas and a Happy New Year!"
    ];

    const gingerbreadContainer = document.getElementById('gingerbread-container');
    const gingerbreadImg = document.getElementById('gingerbread');
    const wishContainer = document.getElementById('wish-container');
    const wishText = document.getElementById('wish-text');
    const resetBtn = document.getElementById('reset-btn');

    let isCracked = false;

    gingerbreadContainer.addEventListener('click', () => {
        if (isCracked) return;

        // Add shake animation
        gingerbreadContainer.classList.add('shaking');

        // After shake, crack it!
        setTimeout(() => {
            gingerbreadContainer.classList.remove('shaking');
            gingerbreadImg.src = 'br_gingerbread-broken.png';
            isCracked = true;

            // Show Wish
            const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
            wishText.textContent = randomWish;
            wishContainer.classList.remove('hidden');
        }, 750);
    });

    resetBtn.addEventListener('click', () => {
        wishContainer.classList.add('hidden');
        
        // Wait for fade out to reset
        setTimeout(() => {
            gingerbreadImg.src = 'br_gingerbread.png';
            isCracked = false;
        }, 300);
    });

    // Music Logic
    const musicBtn = document.getElementById('music-toggle');
    const audio = document.getElementById('bg-music');
    let isPlaying = false;

    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            musicBtn.textContent = 'Play Music 🎵';
        } else {
            audio.play().then(() => {
                musicBtn.textContent = 'Pause Music ⏸️';
            }).catch(error => {
                console.log("Audio play failed, user interaction needed first.", error);
            });
        }
        isPlaying = !isPlaying;
    });

    // Try auto-playing (often blocked, but worth a try with muted)
    // audio.play().catch(() => { /* Autoplay blocked */ });
});
