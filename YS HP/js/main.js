  $(function() {

    window.onload = function() {
      scroll_effect();
    
      $(window).scroll(function(){
      scroll_effect();
      });
    
      function scroll_effect(){
      $('.effect-fade').each(function(){
        var elemPos = $(this).offset().top + 100;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight){
        $(this).addClass('effect-scroll');
        }
      });
      }
    };

  });
