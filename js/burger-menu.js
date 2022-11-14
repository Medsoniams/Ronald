(function () {
    const headerBurger = document.querySelector('.header__burger');
    const headerNav = document.querySelector('.header__nav');
    headerBurger.addEventListener('click', function () {
        headerBurger.classList.toggle('active')
        headerNav.classList.toggle('active')
    })

    if (windowinnerWidth >= 992) {
        headerBurger.classList.remove('active')
        headerNav.classList.remove('active')
    }
})();