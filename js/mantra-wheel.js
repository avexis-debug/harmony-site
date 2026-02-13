/* === Mantra Wheel === */
document.addEventListener('DOMContentLoaded', () => {
    const MANTRAS = [
        "Je suis en paix avec mon passé",
        "Mon énergie est fluide et harmonieuse",
        "Je rayonne la lumière et la bienveillance",
        "Je suis ancré et en toute sécurité",
        "Ma parole est juste et sincère",
        "Mon intuition me guide avec sagesse",
        "Je m'ouvre à l'abondance de l'univers",
        "Chaque respiration m'apporte la sérénité"
    ];

    const wheel = document.getElementById('mantra-wheel');
    const spinBtn = document.getElementById('mantra-spin-btn');
    const spinLabel = document.getElementById('mantra-spin-label');
    const resultContainer = document.getElementById('mantra-result');
    const resultText = document.getElementById('mantra-result-text');
    const closeBtn = document.getElementById('mantra-close-btn');

    if (!wheel || !spinBtn) return;

    let isSpinning = false;
    let currentRotation = 0;

    spinBtn.addEventListener('click', () => {
        if (isSpinning) return;
        isSpinning = true;
        spinLabel.textContent = '...';

        // Hide previous result
        resultContainer.classList.remove('opacity-100', 'translate-y-0');
        resultContainer.classList.add('opacity-0', 'translate-y-10');

        // Random rotation: 5-10 full rotations + random extra
        const extraDegrees = Math.floor(Math.random() * 360);
        const totalRotation = currentRotation + (360 * (5 + Math.floor(Math.random() * 5))) + extraDegrees;
        currentRotation = totalRotation;

        wheel.style.transform = `rotate(${totalRotation}deg)`;

        // Wait for animation to finish (5s)
        setTimeout(() => {
            isSpinning = false;
            spinLabel.textContent = 'Rayonner';

            // Calculate the selected mantra
            const actualDegrees = totalRotation % 360;
            const index = Math.floor(((360 - actualDegrees + 22.5) % 360) / 45);
            resultText.textContent = `"${MANTRAS[index]}"`;

            // Show result
            resultContainer.classList.remove('opacity-0', 'translate-y-10');
            resultContainer.classList.add('opacity-100', 'translate-y-0');
        }, 5000);
    });

    closeBtn.addEventListener('click', () => {
        resultContainer.classList.remove('opacity-100', 'translate-y-0');
        resultContainer.classList.add('opacity-0', 'translate-y-10');
    });
});
