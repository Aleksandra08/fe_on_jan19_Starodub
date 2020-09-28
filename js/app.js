jQuery(document).ready(function ($) {

    var bArray = [];
    var sArray = [4, 6, 8, 10];

    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }

    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    setInterval(function () {
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
                'bottom': '100%',
                'opacity': '-=0.7'
            }, 3000, function () {
                $(this).remove()
            }
        );
    }, 350);
});


/*nav menu*/
const nav = document.querySelector('.navigation');
const menu = document.querySelector('#menu');
const btn = document.querySelector('#button');
const el = $(".js-button");
const div = $('.js-overlay');
const btnClose = $('.js-close');

//fix menu on scrolling//
(function () {
    window.addEventListener('scroll', function navScroll() {

        if (document.documentElement.scrollTop > 0) {
            nav.classList.add('navigation_scroll')
        } else {
            nav.classList.remove('navigation_scroll')
        }
    });
    //modal window//

    // open

    el.click(function() {
        div.fadeIn();
        div.addClass('disabled');
    });

    //close
    $(document).mouseup(function(e) {
        if (!el.is(e.target) && div.has(e.target).length === 0) {
            div.fadeOut();
        }
    });

    btnClose.click(function() {
        div.fadeOut();
    });
})();

//open mobile menu//
(function () {
    btn.addEventListener('click', () => {
        menu.classList.toggle('navigation_expand');
    });
})();


