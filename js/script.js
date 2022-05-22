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
        lastScrollTop = st
    })

    // tooltip
    $(window).on('mouseenter', function(e) {
        if (e.target.matches('.tooltip-trigger')) {
            // showTooltip(e)
            //     // console.log($(e.target).pageX);
            $(".tooltip-trigger").bind({
                mousemove: changeTooltipPosition(e),
                mouseenter: showTooltip(e, e.target),
                mouseleave: hideTooltip
            });
        } else {
            hideTooltip()
        }
    })

    $(window).click(function(e) {
        // search
        if (e.target.matches('#search-trigger')) {
            $('#searchModal').fadeIn()
        } else if (!e.target.id == "searchSection" || !$(e.target).parents("#searchSection").length) {
            $('#searchModal').fadeOut()
        }
    })

    function changeTooltipPosition(event) {
        var tooltipX = event.pageX - 12;
        var tooltipY = event.pageY + 18;
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













})