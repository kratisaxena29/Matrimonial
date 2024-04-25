import React, { useEffect, useState } from 'react';
import './MasterStyleSheet.css'; // You can style your components in this CSS file
import $ from 'jquery'; // Import jQuery

const MasterStyleSheet = () => {
    const [windowScrollTop, setWindowScrollTop] = useState(0);

    useEffect(() => {
        // Mobile menu hide and show
        $('.desk-menu').on('click', function () {
            $('.menu-pop1, .pop-bg').addClass('act');
        });

        $('.menu-pop-clo').on('click', function () {
            $('.menu-pop, .pop-bg').removeClass('act');
        });

        $('.pop-bg').on('click', function () {
            $('.pop-bg, .menu-pop, .mob-me-all').removeClass('act');
            $("body").css('overflow', 'visible');
        });

        // On load start animations
        $('.ban-wedd').addClass('anistart');

        // Share popup
        $('.shar-1 .fa-share-alt').on('click', function () {
            $(this).toggleClass("act");
        });

        // Share URL
        const cururl = window.location.href;
        $("#shareurl").val(cururl);

        // Agent window open
        $('.head-pro').on('click', function () {
            $('.menu-pop2, .pop-bg').addClass('act');
        });

        // Search open and close
        $('.ser-open').on('click', function () {
            $('.pop-search').show();
        });

        $('.ser-clo').on('click', function () {
            $('.pop-search').hide();
            $('.pop-bg').removeClass('act');
        });

        // Mobile menu
        $('.mob-menu span').on('click', function () {
            const mobil = $(this).attr("data-mob");
            $("." + mobil + "_menu").addClass('act');
            $('.pop-bg').addClass('act');
            $("body").css('overflow', 'hidden');
        });

        $('.mob-me-clo').on('click', function () {
            $('.mob-me-all, .pop-bg').removeClass('act');
            $("body").css('overflow', 'visible');
        });

        // Filter on all listing page - Mobile view only
        $('.fil-mob').on('click', function () {
            $('.fil-mob-view').slideDown();
        });

        $('.filter-clo').on('click', function () {
            $('.fil-mob-view').slideUp();
        });

        // Chosen select
        const cform = $(".cform");
        if (cform.length > 0) {
            $(".fvali").validate();
        }

        // Enquiry and review like
        $(".enq-sav i").on('click', function () {
            $(this).toggleClass('sav-act');
        });

        $(".ldelik").on('click', function () {
            $(this).toggleClass('sav-act');
        });

        // Home page banner bg slider height set
        if ($(window).width() < 1250) {
            const homSerHei = $(".hom-head").outerHeight();
            $(".ban-sli li div img").css("height", homSerHei + 70 + "px");
        }

        // Profile page get name and image
        $(".cta-sendint, .cta-chat").on('click', function () {
            const proname = $(this).parent().siblings(".s2").find("h1").text();
            const proimg = $(this).parent().siblings(".s1").find("img").attr("src");
            $(".intename1").text(proname);
            $(".intephoto1").attr("src", proimg);

            const pronameall = $(this).parent().siblings("h4").find("a").text();
            const proimgall = $(this).parent().parent().siblings(".pro-img").find("img").attr("src");
            $(".intename2").text(pronameall);
            $(".intephoto2").attr("src", proimgall);
        });

        // Chat window available status
        $(".cta-chat").on('click', function () {
            const avlsts = $(this).parent().parent().parent(".all-pro-box").attr("data-useravil");
            const avltxt = $(this).parent().parent().parent(".all-pro-box").attr("data-aviltxt");
            $(".avlsta").removeClass("avilyes avilno");
            $(".avlsta").addClass(avlsts);
            $(".avlsta").text(avltxt);
        });

        // Chat window open and close
        $(".cta-chat").on('click', function () {
            $(".chatbox").addClass("open")
        });

        $(".comm-msg-pop-clo").on('click', function () {
            $(".chatbox").removeClass("open")
        });

        // Gallery image path get & set to a tag
        $(".img-wrapper a").each(function () {
            const galImgPath = $(this).children("img").attr("src");
            $(this).attr("href", galImgPath);
        });

        // Video page video play
        $(".vid-play").on('click', function () {
            $(".vid-play, .wedd-vid img").hide();
            $(".wedd-vid iframe").show();
            const getVid = $(this).attr("data-video");
            $(".wedd-vid iframe").attr("src", getVid);
        });

        // Profile sort
        $(".sort-grid").on('click', function () {
            $(".sort-grid").removeClass("act");
            $(this).addClass("act");
        });

        $(".sort-grid-2").on('click', function () {
            $(".all-list-sh").removeClass("view-grid");
        });

        $(".sort-grid-1").on('click', function () {
            $(".all-list-sh").addClass("view-grid");
        });

        // Tool tip
        $('[data-toggle="tooltip"]').tooltip();

        // Chosen select
        const chosel = $(".chosenini");
        if (chosel.length > 0) {
            $('.chosen-select').chosen({
                placeholder_text_single: "Select Project/Initiative...",
                no_results_text: "Oops, nothing found!"
            });
        }

        // Scroll event
        const handleWindowScroll = () => {
            const windowpos = $(window).scrollTop();
            setWindowScrollTop(windowpos);

            // Home top menu fix
            if (windowpos >= 200) {
                $('.hom-top').addClass("act");
            } else {
                $('.hom-top').removeClass("act");
            }

            // Video page banner animation
            const wtpx = "-" + windowpos / 3 + "px";
            const wtpx1 = windowpos / 3 + "px";
            $(".wedd-vid-tre-1").css({
                transform: 'translateX(' + wtpx + ')'
            });
            $(".wedd-vid-tre-2").css({
                transform: 'translateX(' + wtpx1 + ')'
            });

            // On scroll animation
            $(".animate").each(function () {
                const anisec = $(this).offset().top + $(this).outerHeight() - 10;
                const whei = $(window).scrollTop() + $(window).height();
                const aniname = $(this).attr("data-ani");
                const anidely = $(this).attr("data-dely");
                if (whei >= anisec) {
                    $(this).addClass(aniname);
                    $(this).addClass("anistart");
                    $(this).css("animation-delay", anidely + "s");
                }
            });

            // Home page animation
            if ($(".home-about, .count").length) {
                const homfotban = $(".count").offset().top - 350;
                if (windowpos >= homfotban) {
                    $(".count").addClass("act");
                }
            }
        };

        $(window).scroll(handleWindowScroll);

        // Preloading
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, [windowScrollTop]);

    // Share URL copy & paste
    const shareurl = () => {
        const copyText = document.getElementById("shareurl");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);

        const tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copied";
    };

    const shareurlout = () => {
        const tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy to clipboard";
    };

    // Render your component
    return (
        <div>
            {/* Add your JSX here, using React components and elements */}
        </div>
    );
};

export default MasterStyleSheet;
