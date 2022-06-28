
$('.project_wrap').hover(function(){
    $(this).find('.project_arrow').animate({width:'toggle'},350);
    $(this).find('.project_pic').animate({width:'toggle'},350);
    $(this).find('.project_title').addClass('active');
    },function(){
        $(this).find('.project_arrow').toggle({ direction: "left" }, 1000);
        $(this).find('.project_pic').toggle({ direction: "left" }, 1000);
        $(this).find('.project_title').removeClass('active');

});


