import { gsap } from 'gsap';

const showWelcome = (callback) => {
    const $welcomeContainer = document.getElementById('welcome');
    const $word = $welcomeContainer.querySelector('span');

    const timeline = gsap.timeline({
        onComplete: () => {
            callback();
        }
    });

    timeline
    .to($word, {
        scale: 2
    })
    .to($word, {
        scale: 1,
        rotate: 180
    })
    .to($welcomeContainer, {
        opacity: 0
    })
}

export default showWelcome;