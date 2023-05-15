import gsap from 'gsap';
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

const $parent = document.querySelector("[data-animation='flip-squares']");

const swapElements = ([$a, $b]) => {
    $a.parentNode.children[0] === $a ? $a.parentNode.appendChild($a) : $a.parentNode.appendChild($b);
}

const $squares = gsap.utils.toArray('.square');

$parent.addEventListener('click', () => {
    // First
    const initialState = Flip.getState($squares);
    // Last
    swapElements($parent.children);
    // Invert - Play
    Flip.from(initialState, {
        duration: 2,
        ease: "power1.inOut",
        delay: 5
    });
});