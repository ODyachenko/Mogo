$(function () {
    var header_inner = $("#header-inner")
        , headerH = $("#header").innerHeight();
    var scrollOffset = $(window).scrollTop();

    /*Fixed header_inner*/
    checkScroll(scrollOffset);
    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= headerH) {
            header_inner.addClass("fixed");
        }
        else {
            header_inner.removeClass("fixed");
        }
    }
    /*Smooth scroll*/
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        var $this = $(this)
            , blockId = $this.data('scroll')
            , blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    /*Menu nav toggle*/
    $("#nav-toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /*Collapse*/
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();
        var $this = $(this)
            , blockId = $this.data('collapse');

        $this.toggleClass("active");
    });

    /*Slider https://kenwheeler.github.io/slick/*/
    $("[data-slider]").slick({
        infinite: true
        , slidesToShow: 1
        , slidesToScroll: 1
    });
});
