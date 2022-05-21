$(document).ready(function() {
    // feather icons replace
    feather.replace()

    // navbar
    const navbarNav = $('#navbar-nav')
    const nav = $('nav')
    let lastScrollTop = 0
    $('#nav-toggle:checkbox').change(function() {
        if (this.checked) {
            navbarNav.removeClass('-translate-x-full')
            $('body').addClass(' overflow-y-hidden')
        } else {
            navbarNav.addClass('-translate-x-full')
            $('body').removeClass(' overflow-y-hidden')
        }
    })

    $(document).scroll(function() {
        st = $(this).scrollTop()
        if (st < lastScrollTop) {
            nav.fadeIn().css({ "position": "fixed" });
        } else {
            nav.fadeOut().removeClass('fixed');
        }
        lastScrollTop = st;
    })














})