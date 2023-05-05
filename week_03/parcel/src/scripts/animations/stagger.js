import { fadeInUp } from "./fade";

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const $listItems = entry.target.querySelectorAll('.card');

            $listItems.forEach(($listItem, i) => {
                fadeInUp($listItem, 500, i * 100);
            });

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

export const staggerLists = () => {
    const $lists = document.querySelectorAll("[data-animation='stagger-list']");

    $lists.forEach(($list) => {
        observer.observe($list);
    });
}
