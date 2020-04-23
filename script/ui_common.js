

$(function(){
  // datepicker
  $( ".ip_date input" ).datepicker({
    showOn: "button",
    buttonImage: "../../images/ip_date.png",
    buttonImageOnly: true,
    buttonText: "Select date",
    dateFormat: "yy-mm-dd",
    onSelect : function(){

      if($(this).siblings("i").length>0) {
        $(this).siblings("i").addClass("on");
      }

    }
  });


  // body scroll
  $("body.scrollBody").mCustomScrollbar({
     axis:"xy",
     callbacks:{
      onScroll:function(){
        var left = this.mcs.left;
        $("body").attr("scr_left", left);
      },
      whileScrolling: function(e){
        if(this.mcs.left<0) {
          $(top.document).find("nav .btn_nav").addClass("shadow");
        }else {
          $(top.document).find("nav .btn_nav").removeClass("shadow");
        }
        console.log("ing.." + this.mcs.left);
      }
    }
  });


});


(function($){
  // 파일명 셋팅
  $.fn.fileReady = function() {
    $el = $(this);
    $el.find("input[type=file]").on("change", function(e){
      var val = $(this).val();
      $(this).parent().prev().val(val);
    });
  };

  // 텍스트삭제
  $.fn.inputTextFocus = function() {
    var $el = $(this);
    var $ip = $el.find(".ip_txt");
    valCheck($ip.val());
    $ip.on("change keyup paste", function(e){
      var val = $(this).val();
      valCheck(val);
    });
    $el.find(".btn_txt_del").on("click", function(e){
      $ip.val("");
      $el.removeClass("focus");
      e.preventDefault();
    });
    function valCheck(val){
      val == "" ? $el.removeClass("focus") : $el.addClass("focus");
    }
  };

})(jQuery);
