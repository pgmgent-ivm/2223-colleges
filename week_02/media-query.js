const $buttons = document.querySelectorAll('[data-source]');

$buttons.forEach($button => {
    $button.addEventListener('click', () => {
        const target = document.querySelector(`[data-target='${$button.dataset.source}']`);
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});