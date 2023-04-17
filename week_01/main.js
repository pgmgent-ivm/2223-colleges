const $loaderButtons = document.querySelectorAll('.btn--loader');

$loaderButtons.forEach($button => {
    $button.addEventListener('click', () => {
        $button.classList.add('btn--loading');

        setTimeout(() => {
            $button.classList.remove('btn--loading');
        }, 5000);
    });
});