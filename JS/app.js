$(function() {

    let header = $("#header"),
        aboutOffset = $("#about").offset().top,
        scrollOffset = $(window).scrollTop();

        console.log(aboutOffset);
    // Fixed Header
    checkScroll(scrollOffset);
    
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
        console.log(scrollOffset);

        hoverNavAbout(scrollOffset);
        hoverNavService(scrollOffset);
        hoverNavBlog(scrollOffset);
        hoverNavWork(scrollOffset);
        hoverNavFooter(scrollOffset);

        aboutOffset = $("#about").offset().top;
        checkScroll(scrollOffset, aboutOffset);
    });
    function checkScroll() {
        if(scrollOffset > (aboutOffset - 70)) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };

    // $(window).on("scroll", function() {
    //     scrollOffset = $(this).scrollTop();
    // };

    // Smooth Scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data("scroll"),
            blockOffset = $(blockId).offset().top;
            console.log(blockOffset);
            console.log(blockId);
        
        $("html, body").animate( {
            scrollTop: (blockOffset - 68)
        }, 500);

        checkHeader2();

        // Header Background 2
        function checkHeader2() {
            if(blockId == "#intro") {
                header.removeClass("active");
                $("#nav").removeClass("active");
                $("#nav_toggle").removeClass("active");
            } else {
                header.addClass("active");
                $("#nav").addClass("active");
            }
        };
    });

    // Hover Nav
    // let aboutOffset = $("#about").offset().top,
    let serviceOffset = $("#service").offset().top,
        blogOffset = $("#blog").offset().top,
        workOffset = $("#work").offset().top,
        footerOffset = $("#footer").offset().top;


    function hoverNavAbout() {
        if((scrollOffset >= (aboutOffset - 68)) && (scrollOffset <= (aboutOffset + 200))) {
            $("#link_about").addClass("active");
        } else {
            $("#link_about").removeClass("active");
        }
    };
    function hoverNavService() {
        if((scrollOffset >= (serviceOffset - 68)) && (scrollOffset <= (serviceOffset + 200))) {
            $("#link_service").addClass("active");
        } else {
            $("#link_service").removeClass("active");
        }
    };
    function hoverNavBlog() {
        if((scrollOffset >= (blogOffset - 68)) && (scrollOffset <= (blogOffset + 200))) {
            $("#link_blog").addClass("active") 
        } else {
            $("#link_blog").removeClass("active"); 
        }
    };
    function hoverNavWork() {
        if((scrollOffset >= (workOffset - 68)) && (scrollOffset <= (workOffset + 200))) {
            $("#link_work").addClass("active"); 
        } else {
            $("#link_work").removeClass("active");
        }
    };
    function hoverNavFooter() {
        if((scrollOffset >= (footerOffset - 68)) && (scrollOffset <= (footerOffset + 200))) {
            $("#link_footer").addClass("active");
        } else {
            $("#link_footer").removeClass("active");
        }
    };

    // Menu nav toggle
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        checkHeader1();

        $("#nav a").on("click", function(event) {
            event.preventDefault();

            $("#nav_toggle").removeClass("active");
            $("#nav").removeClass("active");
        });

        // Header Background 1
        function checkHeader1() {
            if($(".header__nav").css("display") == "block") {
                header.addClass("active");
            } else {
                header.removeClass("active");
            }
        };
    });

    // Collapse
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data("collapse");
            
        $(blockId).toggleClass("active");
    });

    // Slider
    $("[data-slider1]").slick( {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        dots: true
    });
    $("[data-slider]").slick( {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        adaptiveHeight: true
    });


    // Modal
    $("[data-modal]").on("click", function(event) {
		event.preventDefault();
		let modalID = $(this).data("modal");
		$(modalID).addClass("show");
		$("body").addClass("no-scroll");
	
	}); 
	$("[data-close]").on("click", function(event) {
		event.preventDefault();
		let modalParent = $(this).parents(".modal");
		modalParent.removeClass("show");
		$("body").removeClass("no-scroll");
	}); 
	$(".modal").on("click", function(event) {
		$(this).removeClass("show");
		$("body").removeClass("no-scroll");
	});
	$(".modal__dialog").on("click", function(event) {
		event.stopPropagation()
	});
});