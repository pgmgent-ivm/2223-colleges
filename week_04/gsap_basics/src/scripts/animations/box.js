import gsap from 'gsap';

export const boxAnimation = () => {
    const playButton = document.getElementById('play');
    const reverseButton = document.getElementById('reverse');

    playButton.addEventListener('click', () => {
        anim.play();
    });

    reverseButton.addEventListener('click', () => {
        anim.reverse();
    });

    const anim = gsap.to('.box', {
            backgroundColor: 'red',
            x: 100,
            y: 50,
            rotate: 25,
            duration: 1,
            ease: 'elastic',
            paused: true,
            stagger: {
                amount: 3
            }
        });
}