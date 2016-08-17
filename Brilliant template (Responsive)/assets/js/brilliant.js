(function($){
	/*------------------------
	* Words sliders
	--------------------------*/
	var sliderContainer = $('.banner');
	var sliderElements  = sliderContainer.find('.banner-item');
	var elementsLength  = sliderElements.length;
    var current = 1;

	setInterval(function(){

		$ ( sliderElements ).each(function(index, obj){$(obj).hide()}); // hide all
		$ ( sliderElements[current] ).fadeToggle(1000); // show the current

		++current; // 0 ok  1 ok  2 ok  3 not ok

		(current === elementsLength) ? current = 0 : '';

	},4000); // 4 seconds

}(jQuery));