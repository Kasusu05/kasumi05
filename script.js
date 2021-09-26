$(function () {


  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});



$(window).scroll(function () {

  var scrollTop = $(this).scrollTop();
  var scrollBottom = scrollTop + $(this).height(); 

  $(".title").each(function (i) {

      if (scrollBottom > $(this).offset().top) {

          var target = this;
          setTimeout(function () {
              $(target).addClass("fadein");
          }, 300 * i);

      }

  });
});

$(window).scroll(function () {
    

  var scrollTop = $(this).scrollTop(); 
  var scrollBottom = scrollTop + $(this).height(); 

  $(".mv-title").each(function (i) {

      
      if (scrollBottom > $(this).offset().top) {
          

          var target = this;
          setTimeout(function () {
              $(target).addClass("fadein");
          }, 300 * i);

      }

  });
});


$(window).scroll(function () {
    

  var scrollTop = $(this).scrollTop(); 
  var scrollBottom = scrollTop + $(this).height(); 

  $(".mv-subtitle").each(function (i) {

      
      if (scrollBottom > $(this).offset().top) {
          

          var target = this;
          setTimeout(function () {
              $(target).addClass("fadein");
          }, 300 * i);

      }

  });
});

