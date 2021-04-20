$('.product_wrapAll').mouseenter(function () {
    $('.disableBox1').css('margin-top', '60px').css('transition', '0.8s').css('position', 'fixed');

})

$('.disableBox1').mouseenter(function () {
    $('.disableBox1').css('margin-top', '60px').css('transition', '0.8s').css('position', 'fixed');

})


$('.disableBox1').mouseleave(function () {
    $('.disableBox1').css('margin-top', '-500px').css('transition', '1.2s').css('position', 'fixed');

})
$('.product_wrapAll').mouseleave(function () {
    $('.disableBox1').css('margin-top', '-500px').css('transition', '1.2s').css('position', 'fixed');

})




$('.product_wrapAll2').mouseenter(function () {
    $('.disableBox2').css('margin-top', '60px').css('transition', '0.8s').css('position', 'fixed');

})


$('.product_wrapAll2').mouseleave(function () {
    $('.disableBox2').css('margin-top', '-500px').css('transition', '1.2s').css('position', 'fixed');

})

$('.disableBox2').mouseenter(function () {
    $('.disableBox2').css('margin-top', '60px').css('transition', '0.8s').css('position', 'fixed');

})


$('.disableBox2').mouseleave(function () {
    $('.disableBox2').css('margin-top', '-500px').css('transition', '1.2s').css('position', 'fixed');
})







$('.product_wrapAll3').mouseenter(function () {
    $('.disableBox3').css('margin-top', '60px').css('transition', '0.8s').css('position', 'fixed');

})


$('.product_wrapAll3').mouseleave(function () {
    $('.disableBox3').css('margin-top', '-500px').css('transition', '1.2s').css('position', 'fixed');

})

$('.disableBox3').mouseenter(function () {
    $('.disableBox3').css('margin-top', '60px').css('transition', '0.8s').css('position', 'fixed');

})


$('.disableBox3').mouseleave(function () {
    $('.disableBox3').css('margin-top', '-500px').css('transition', '1.2s').css('position', 'fixed');
})









$('.product_wrapAll4').mouseenter(function () {
    $('.disableBox4').css('margin-top', '60px').css('transition', '0.8s').css('position', 'fixed');

})


$('.product_wrapAll4').mouseleave(function () {
    $('.disableBox4').css('margin-top', '-500px').css('transition', '1.2s').css('position', 'fixed');

})

$('.disableBox4').mouseenter(function () {
    $('.disableBox4').css('margin-top', '60px').css('transition', '0.8s').css('position', 'fixed');

})


$('.disableBox4').mouseleave(function () {
    $('.disableBox4').css('margin-top', '-500px').css('transition', '1.2s').css('position', 'fixed');
})








$('.product_wrapAll5').mouseenter(function () {
    $('.disableBox5').css('margin-top', '60px').css('transition', '0.8s').css('position', 'fixed');

})


$('.product_wrapAll5').mouseleave(function () {
    $('.disableBox5').css('margin-top', '-500px').css('transition', '1.2s').css('position', 'fixed');

})

$('.disableBox5').mouseenter(function () {
    $('.disableBox5').css('margin-top', '60px').css('transition', '0.8s').css('position', 'fixed');

})


$('.disableBox5').mouseleave(function () {
    $('.disableBox5').css('margin-top', '-500px').css('transition', '1.2s').css('position', 'fixed');
})







$('.product_wrapAll6').mouseenter(function () {
    $('.disableBox6').css('margin-top', '60px').css('transition', '0.8s').css('position', 'fixed');

})


$('.product_wrapAll6').mouseleave(function () {
    $('.disableBox6').css('margin-top', '-500px').css('transition', '1.2s').css('position', 'fixed');

})

$('.disableBox6').mouseenter(function () {
    $('.disableBox6').css('margin-top', '60px').css('transition', '0.8s').css('position', 'fixed');

})


$('.disableBox5').mouseleave(function () {
    $('.disableBox5').css('margin-top', '-500px').css('transition', '1.2s').css('position', 'fixed');
})




$(function () {
    /* 按下GoTop按鈕時的事件 */
    $('#gotop2').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 'slow'); /* 返回到最頂上 */
        return false;
    });

    /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#gotop2').fadeIn();
        } else {
            $('#gotop2').fadeOut();
        }
    });
});