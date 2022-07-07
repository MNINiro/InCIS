// changes navbar style on scroll vertically (scrollY)
window.addEventListener('scroll', () => {
    document.querySelector('.navi').classList.toggle(
        'window-scroll', window.scrollY > 0)
})