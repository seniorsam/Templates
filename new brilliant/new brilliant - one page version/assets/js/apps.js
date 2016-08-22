$(document).ready(function() {
 

  /*
    Collapsed menu
  */

  $('.collapse-bt').on('click',function(){
    $('.collapse-nav').slideToggle(200);
  });

  /*
    Menu anchor links
  */

  $('.anchor-link').on('click', function(e){
      e.preventDefault();
      // turn off the other buttons
      $(this).closest("ul").find("a").css("borderColor","#fff");
      // highlight
      $(this).css("borderColor", "#f34580");
      //animate the window smoothly
      $("html, body").animate({
        scrollTop: $ ( $.attr(this,"href") ).offset().top - 80
      },500);
      // close the collapsed menu
      ($(document).width() <= 992) ? $(".collapse-nav").slideUp(500) : null;
  });

  /*
    Button to top
  */

  $('.to-top').on('click', function(){
     $("html, body").animate({scrollTop: 0},500);
  });

  /*
    Form submit
  */

  $("#submit").click(function(e){
    $this = $(this);
    e.preventDefault();
    $this.attr({value:"Please wait!",disabled:true});
    // ajax request
    $.post("email-us.php",
    {
      name:    $('#name').val(),
      email:   $('#email').val(),
      message: $('#message').val()
    },
    function(response, status) {
          var data;

          if(status) {
            data = response;  
          } else {
            data = 'Internet problem: please try again later';
          }

          $('.response').fadeIn().append(response);
          $this.attr({value:"Send Message",disabled:false});
          setTimeout(function(){$('.response').hide().text('')},5000);
    });
  });

  /*
    Owl slider start
  */

  $("#main-slider").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay:true 
  });

   $("#team-slider").owlCarousel({

	  navigation : true, // Show next and prev buttons
      autoPlay: 3000,
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });
 
});