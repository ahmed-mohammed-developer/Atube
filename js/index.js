//acive booton
$(document).ready(function() {
     $(".first-list-element").addClass("active");
          


     $(".nav-item").click(function() {
          $(".nav-item").removeClass("active");
          $(this).addClass("active");
     });

     // bars toggler 
     $("#toggler").click(function(event){
          $('#wrap').toggleClass('toggled');

          // layer 
          let right = $('.sidbar').css("right");
          if (right == '0px')
          {
               $('.sidbar').css({'right': '-17rem'});
               $('.layer').fadeOut();
          }
          else {
               $('.sidbar').css({'right': '0'});
               $('.layer').fadeIn();
          }
     });

     //عند الضغط على layer

     $('.layer').click(function () {
          $('.sidbar').css({'right': '-17rem'});
               $('.layer').fadeOut();
     });

     //search-input 
     $(".search-icon").click(function (){
          $(".search-input").slideToggle("slow")
     });
});