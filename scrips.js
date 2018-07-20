// adding in right column, changing the main size, changing left navigation size
    $(".item").click(function() {
        $(".column_hidden").addClass("right_column");
        $(".assets_main").addClass("asset_main2");
        $(".left_nav").addClass("left_nav_2");
    });

    $(".number_link").click(function() {
        $(".column_hidden").addClass("right_column");
        $(".assets_main").addClass("asset_main2");
        $(".left_nav").addClass("left_nav_2");
    });

    // adding the blue button to active elements 
    $(".assets_main .asset_list .item").click(function() {
        $(".asset_list .item").removeClass("blue");
        $(this).addClass("blue");
    });

    // on click selected items in nav add the class of active 
       $(".olc-assets-page .nav_items a").each(function(){
               if ($(this).attr("href") == window.location.pathname){
                       $(this).addClass("active");
               }
       });

    // selecting the content based on a href id for items 
    $(".asset_list .item").live("click", function(e) {
        var contentId = "[id^=item_]" + $(this).attr("id");
        $(".show_item").hide();
        $("#" + contentId).show();
    });

    // selecting the content based on a href id for numbers
    $(".asset_list .number_link").live("click", function(e) {
        var contentId = "[id^=item_]" + $(this).attr("id");
        $(".show_item").hide();
        $("#" + contentId).show();
    });
    // prevent default on click  item/number 
    $(".asset_list .item").click(function(e) {
        e.preventDefault();
    });

    $(".asset_list .number_link").click(function(e) {
        e.preventDefault();
    });
    // exit the right column, the main size change, left navigation size change
    $(".exit").click(function() {
        $(this).removeClass("right_column");
        $(this).removeClass("asset_main2");
        $(this).removeClass("left_nav_2");
    });

    // page refresh for different size pages for jquery under 640 - Firefox included
    $(window).bind('resize', function() {
        if ($(window).width() <= 641) {
            window.location.href = window.location.href;
        }
    });

    //Start izimodal jquery here
    // Common iziModal settings
    $('.iziModalAsset').iziModal({
        headerColor: '#F1EFEE',
        transitionIn: 'fadeInDown',
        transitionOut: 'fadeOutUp',
        navigateArrows: false,
        borderBottom: false,
        closeButton: true,
        overlayColor: 'rgba(98, 91, 196, 0.95)',
        radius: 0,
        appendTo: 'form'
    });

    // IziModal to appear on click of event
    $(document).on('click', '.zoom_feature_link', function(event) {
        event.preventDefault();

        var zoomID = $(this).attr('href');
        var imgTarget = $(this).siblings('img');
        var imgSrc = imgTarget.attr('src');

        $('.iziModalAsset .modalContent img').attr('src', imgSrc);

        /* Act on the event */
        $('.iziModalAsset').iziModal('open', event);
    });

    // 640 and under so that the information displays underneath the clicked div element
    if ($(window).width() < 641) {
        $(function() {
            $(".asset_list").on('click', function() {
                $(this).parent().find(".selected").removeClass("selected");
                $(this).addClass("selected");
            });
        });
        $(".asset_list a").live("click", function(e) {
            $(".right_column").insertAfter(".selected");
        });
    }
});

