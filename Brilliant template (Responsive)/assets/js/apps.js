/*menu*/
$(document).ready(function(){
	/*==============================
	Responsive menu button
	==============================*/
	$("#menu-trig").click(function(){
		$("#menu").slideToggle(500);
	});
	/*==============================
	Menu sliding effect
	==============================*/	
	$("a.anchor-trig").click(function(e){
		e.preventDefault();
		/*==============================
		Close the menu in small screen sizes
		==============================*/			
		if ($(document).width() <= 992) {
			$("#menu").slideUp(500);
		} else {
			null;
		}
		/*==============================
		Menu sliding effect
		==============================*/	
		$("html, body").animate({
			scrollTop:$( $.attr(this, "href")).offset().top - 59
		},500);
		$("#menu").find("a").css({backgroundColor:"transparent",color:"#fff"});
		$(this).css({backgroundColor:"#fff",color:"#000"});
	});
	/*==============================
	Form submit and button effect
	==============================*/
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

	        $('.info').fadeIn().append(response);
			$this.attr({value:"Send Message",disabled:false});
	        setTimeout(function(){$('.info').hide().text('')},5000);
		});
	});
	
});