$(document).ready(function() {
 

  /*
    Collapsed menu
  */

  $('.collapse-bt').on('click',function(){
    $('.collapse-nav').slideToggle(200);
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
});