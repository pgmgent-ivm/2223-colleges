import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

// Registreren van plugins is verplicht
// maar moet maar 1x gebeuren, dus dit kan best in app.js bovenaan.
gsap.registerPlugin(ScrollTrigger);
export const initScrollAnimations = () => {
    const box = document.querySelector('.box--danger');

    gsap.to(box, {
        backgroundColor: "blue",
        x: 500,
        rotate: 360,
        scrollTrigger: {
            trigger: '#trigger',
            start: "0% 75%",
            end: "top 25%",
            scrub: true,
            markers: true
        }
    });
}