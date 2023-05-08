import gsap from 'gsap';

const playButton = document.getElementById('play-timeline');
const [firstCircle, secondCircle, thirdCircle] = document.querySelectorAll('.circle');

const circleTimeline = gsap.timeline({
    paused: true,
});

circleTimeline
    .to(firstCircle, {
        backgroundColor: 'red'
    })
    .to(secondCircle, {
        x: 80,
        duration: 10
    }, '+=2')
    .to(thirdCircle, {
        y: 100
    }, '-=.5')

    playButton.addEventListener('click', () => {
        circleTimeline.play();
    });