// tab
function openTab() {
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('ul.tabs li a').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $(this).children('a').addClass('current');
        $("#"+tab_id).addClass('current');
    });
}
// input onOff
function inputIcon() {
    $(".icon_login .form_login").focus(function(){
        $(this).next().addClass('on');
    }).blur(function() {
        $(this).next().removeClass('on');
    });
}