// SCRIPT ADDED FOR THE RESEARCH GUIDE FILTER PAGES
// To be merged with the research guide filters javascript file on DEVLB

(function () {
    var $document = $(document);

    $document.on({
        'submit-form': function () {
            $('#guide-form').submit();

        }
    });

    $document.ready(function () {

        $('#research-category').on('change', function () {
            $.spinnerDiv('.research-guide-filter-left');
            window.location = "/help-with-your-research/research-guides/?research-category=" + $(this).val();
        });


        $('#keyword').on('change', function () {
            if ($(this).val() != "0") {
                $.spinnerDiv('.research-guide-filter-left');
                $('.rescheck').attr('checked', false);
                $("#rsearch").val("");
                $("#letter").val("");
                $("#rkeyword").val("");
                $("#rfilter").val("");
                window.location.hash = '#step-three';
                window.location = "/help-with-your-research/research-guides-keywords/?show=keywords&keyword-letter=" + $(this).val() + "#step-three";
                $document.trigger('submit-form');
            }
        });

        $('#online-only').on('change', function () {
            $.spinnerDiv('.research-guide-filter-left');
            window.location.hash = '#reload-marker';
            $document.trigger('submit-form');

        });

        $('.js-show-spinner').on('click', function () {
            $.spinnerDiv('.research-guide-filter-left');
        });

        $('.disc-container #menu-disc  li a, .keywords-selectable li a').on('click', function () {
            $.spinnerDiv('.research-guide-filter-left');
        });

        //
        //$('#guide-form').on('submit', function () {
        //    //if(_gaq !== undefined) {
        //    //    _gaq.push(['_trackEvent', 'Form button', 'Filter research guides', 'Find guides button']);
        //    //}
        //});

        $('#guide-search').on('submit', function () {
            $.spinnerDiv('.research-guide-filter-left');
            $document.trigger('submit-form');
        });

        // Start - Access indicator
        var $descriptions = $('.indicator-description'),
            $headings = $('.toggle-heading');

        $headings.eq(0).attr('aria-selected', true);
        $headings.eq(0).parent().addClass('active');

        $descriptions.each(function (index, value) {
            if (index > 0) {
                $(value).attr('aria-hidden', true).hide();
            }
        });

        $headings.on('click', function () {
            var $this = $(this),
                id = $this.attr('id'),
                selector = '[aria-labelledby=' + id + ']';

            $headings.attr('aria-selected', false);
            $this.attr('aria-selected', true);

            $headings.parent().removeClass('active');
            $this.parent().addClass('active');

            $descriptions.attr('aria-hidden', true).hide();

            $(selector).attr('aria-hidden', false).show();

        })

        // Start - Access indicator
        var $buttons = $('.dot-button'),
            $descriptions = $('.indicator-description');

        $buttons.eq(0).attr('aria-selected', true);
        $buttons.eq(0).parent().addClass('active');

        $descriptions.each(function (index, value) {
            if (index > 0) {
                $(value).attr('aria-hidden', true).hide();
            }
        });

        $buttons.on('click', function () {
            var $this = $(this),
                id = $this.attr('id'),
                selector = '[aria-labelledby=' + id + ']';

            $buttons.attr('aria-selected', false);
            $this.attr('aria-selected', true);

            $buttons.parent().removeClass('active');
            $this.parent().addClass('active');

            $descriptions.attr('aria-hidden', true).hide();

            $(selector).attr('aria-hidden', false).show();

        })
    });

})();


$(document).ready(function () {

    // Hide the research guide and category select menu areas by default, unless on the Search results page
    var search = $("h2").text();


    if (search.indexOf('Search') != -1) {
        $("#utility-search").show();
        $("#search-toggle").toggleClass("active");
        $("#utility-search").toggleClass("margin-bottom-medium");
    }
    else {
        $("#utility-search").hide();
    }
    $("#utility-category").hide();

    // SHOW KEYWORDS WHEN LETTER IS SELECTED - only needed for prototype
    // When a letter is clicked
    $("#step-two-toggle").click(function (e) {
        e.preventDefault();

        // Show the step-two container
        $(".step-two").fadeIn();

        // Add the on-state to the letter
        $("#step-two-toggle").addClass("selected");

        // Scroll to step-two container
        $('html, body').animate({
            scrollTop: $('#step-two').offset().top
        }, 1200);
    });

    // SHOW GUIDES WHEN KEYWORD IS SELECTED - only needed for prototype
    // When a letter is clicked
    $("#step-three-toggle").click(function (e) {

        // Show the step-three container
        $(".step-three").fadeIn();

        // Add the on-state to the letter
        $("#step-three-toggle").addClass("selected");

        // Scroll to step-three container
        $('html, body').animate({
            scrollTop: $('#step-three').offset().top
        }, 1000);
    });

    // SHOW GUIDES WHEN KEYWORD IS SELECTED ON MOBILE - only needed for prototype
    // When the select menu is changed
    $("#step-three-toggle-mobile").change(function () {

        // Show the step-three container
        $(".step-three").fadeIn();

        // Scroll to step-three container
        $('html, body').animate({
            scrollTop: $('#step-three').offset().top
        }, 1000);

    });

    // SHOW THE SEARCH AREA
    // When the search toggler is clicked...
    $("#search-toggle").click(function () {

        // Hide the category area
        $("#utility-category").hide();

        // Show the search area
        $("#utility-search").slideToggle();

        // Change the on-state for the search toggler and remove on-state for category toggler
        $("#search-toggle").toggleClass("active");
        $("#category-toggle").removeClass("active");

        // Toggle space for the heading below
        $("#utility-search").removeClass("margin-bottom-medium");
        $("#utility-search").addClass("margin-bottom-medium");

    });

    // SHOW THE CATEGORY AREA
    // When the category toggler is clicked...
    $("#category-toggle").click(function () {

        // Hide the search area
        $("#utility-search").hide();

        // Show the category area
        $("#utility-category").slideToggle();

        // Change the on-state for the category toggler and remove on-state for search toggler
        $("#category-toggle").toggleClass("active");
        $("#search-toggle").removeClass("active");

        // Toggle space for the heading below
        $("#utility-category").removeClass("margin-bottom-medium");
        $("#utility-category").addClass("margin-bottom-medium");

    });

    // TOGGLE FILTERS ON MOBILE
    // If the filter toggler is clicked...
    $("#mobile-only p").click(function () {

        // Show/hide the filters
        $("#toggle-container").slideToggle();

        // Change the on-state for the filter toggler
        $(this).toggleClass("active");

        // Define the appropriate show/hide text
        var str = $(this).text(),
            hide = "Hide filters",
            show = "Show all filters";

        // If the string matches the 'show' variable, then replace with the hide text...
        if (str == show) {
            $(this).text(hide);
        }
        // Or vice versa
        else {
            $(this).text(show);
        }
    });
});
