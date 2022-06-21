$(document).ready(function() {
    // feather icons replace
    feather.replace()

    // navbar
    const navbarNav = $('#navbar-nav')
    const nav = $('nav')
    let lastScrollTop = 0
    $('#nav-toggle:checkbox').change(function() {
        if (this.checked) {
            hideAndShowNavbarNav(true, navbarNav)
        } else {
            hideAndShowNavbarNav(false, navbarNav)
        }
    })

    $(document).scroll(function() {
        st = $(this).scrollTop()
        if (st < lastScrollTop) {
            nav.fadeIn().css({ "position": "fixed" });
        } else {
            nav.fadeOut().removeClass('fixed');
        }
        lastScrollTop = st
    })

    $(window).on('mouseenter', function(e) {
        // tooltip
        if (e.target.matches('.tooltip-trigger')) {
            $(".tooltip-trigger").bind({
                mousemove: changeTooltipPosition(e),
                mouseenter: showTooltip(e, e.target),
                mouseleave: hideTooltip
            })
        } else {
            hideTooltip()
        }
    })


    $(window).click(function(e) {
            // navbar
            if (!$(e.target).parents("#navbar-nav").length) {
                if (navbarNav.navbar == "show") {
                    hideAndShowNavbarNav(false, navbarNav)
                    $('#nav-toggle').prop('checked', false)
                }
            }
            // search
            if (e.target.matches('#search-trigger')) {
                $('#searchModal').fadeIn()
            } else if (!e.target.id == "searchSection" || !$(e.target).parents("#searchSection").length) {
                $('#searchModal').fadeOut()
            }
        })
        // dropdown
    $(function() {
        const dropdown = $('.dropdown').attr('data-target')
        let cl = 0
        $('.dropdown').bind({
            mouseenter: () => {
                $(dropdown).fadeIn()
            },
            click: () => {
                $(dropdown).fadeIn()
                cl++
                if (cl > 1) {
                    $(dropdown).fadeOut()
                    cl = 0
                }
            },

            mouseleave: () => {
                if (cl != 1) {
                    $(dropdown).fadeOut()
                }
            }
        })
    })


    // navbar function
    function hideAndShowNavbarNav(status, nav) {
        if (status === false) {
            nav.addClass('-translate-x-full')
            $('body').removeClass('overflow-y-hidden')
            nav.navbar = "hide"
        } else {
            nav.removeClass('-translate-x-full')
            $('body').addClass('overflow-y-hidden')
            nav.navbar = "show"
        }
    }

    // tooltip
    function changeTooltipPosition(event) {
        let tooltipX = event.pageX - 12;
        let tooltipY = event.pageY + 18;
        $('div.tooltip').css({ top: tooltipY, left: tooltipX });
    };

    function showTooltip(event, data) {
        $('div.tooltip').remove();
        $('<div class="tooltip absolute z-50 px-2 py-1 bg-dark rounded text-white text-sm">' + $(data).attr('data-tooltip') + '</div>')
            .appendTo('body');
        changeTooltipPosition(event);
    };

    function hideTooltip() {
        $('div.tooltip').remove();
    };

    // general












})