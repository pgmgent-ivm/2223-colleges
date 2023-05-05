const $playButton = document.getElementById('play-animation-button');
const $pauseButton = document.getElementById('pause-animation-button');
const $reverseButton = document.getElementById('reverse-animation-button');
const $box = document.getElementById('box');

const boxAnimation = $box.animate([
        {backgroundColor: 'red', transform: 'translateX(0) rotate(0deg)'},
        {backgroundColor: 'blue', transform: 'translateX(200px) rotate(90deg)'}
    ], {
        duration: 1000,
        easing: "cubic-bezier(0.68,-0.55,0.27,1.55)",
        fill: 'forwards',
        direction: 'alternate',
        iterations: 1
    }
);

boxAnimation.pause();

boxAnimation.addEventListener('finish', () => {
    console.log('Animation finished!');
});

boxAnimation.addEventListener('cancel', () => {
    console.log('Animation cancelled!');
});

$playButton.addEventListener('click', () => {
    boxAnimation.play();
});

$pauseButton.addEventListener('click', () => {
    boxAnimation.pause();
});

$reverseButton.addEventListener('click', () => {
    boxAnimation.reverse();
});