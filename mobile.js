
// mobile
$(window).on("load resize", function(){

  // console.log( $(this).width() );
  if ($(this).width() < 500) {
    $('.question-body').removeClass("desktop");
    $('.question-body').addClass("mobile");
  } else {
    $('.question-body').removeClass("mobile");
    $('.question-body').addClass("desktop");
  }

});


// matrix
$(document).ready(function(){

    // This allows the height to animate to and from '0' and 'auto'.  
    $('.statement-container').click(function () {

        var el = $(this).siblings('.scale-container'),
        curHeight = el.height(),
        autoHeight = el.css('height', 'auto').height(); //temporarily change to auto and get the height.
        el.height(curHeight).animate({ height: autoHeight === curHeight ? "0px" : autoHeight }, 200, function() {
            // change height to auto when animation finishes, if it's supposed to be auto and not "0"
            if (el.height() > 0) {
                el.css('height', 'auto');             
            }
        });
        // optional - animate the siblings to 0 on click. 
        var sib = $(this).parent('.q-row').siblings().children('.scale-container');
        sib.animate({height: "0px"}, 200);

        // change the arrow to X or ^

    });

});