const questionBox = document.getElementById('question-box');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const wrongSound = new Audio('sounds/wrong.wav');

questionBox.classList.add('show');

yesBtn.addEventListener('click', () => {
    window.location.href = 'index2.html';
});

noBtn.addEventListener('click', () => {
    wrongSound.currentTime = 0; 
    wrongSound.play();

    const randomX = Math.floor(Math.random() * (window.innerWidth - questionBox.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - questionBox.offsetHeight));

    questionBox.style.left = randomX + 'px';
    questionBox.style.top = randomY + 'px';

    questionBox.classList.remove('show');
    setTimeout(() => {
        questionBox.classList.add('show');
    }, 100);
});
