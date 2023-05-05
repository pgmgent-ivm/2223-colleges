const fade = ($element, beginAnimations, endAnimations, duration = 1000, delay = 0) => {
    return $element.animate([
        {opacity: 0, ...beginAnimations},
        {opacity: 1, ...endAnimations},
    ], {
        fill: 'forwards',
        duration: duration,
        delay: delay
    });
}

export const fadeIn = ($element, $duration) => {
    return fade($element, null, null, $duration);
}

export const fadeInUp = ($element, $duration, $delay) => {
    return fade($element, {transform: 'translateY(1rem)'}, {transform: 'translateY(0)'}, $duration, $delay);
}

