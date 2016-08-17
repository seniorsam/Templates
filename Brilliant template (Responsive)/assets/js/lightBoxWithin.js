(function($){
	var lightBoxWithin = {

		container: $('.gallery-image-box'),

		lightBoxWrapper: $('.light-box-wrapper'),

		lightBoxStage: $('.light-box-stage'),

		lightBoxContent: $('.light-box-content'),

		lightBoxExit: $('.exit-bt'),

		elements: 
			function(){
				var elems = [];
				// catch all the captions
				lightBoxWithin.container.each(function(index,obj){
					elems.push($ ( obj ).find('.caption'));
				});
				return elems;
			},

		init:
			function(options){
				var lbw = lightBoxWithin;

				// preloader
				$ ( document ).ajaxStart(function() {
					$('<div></div>',{
						class: 'preloader'
					}).appendTo(lbw.lightBoxContent);
				});

				// get the elements
				var elems = lbw.elements();
				for(var i = 0; i < elems.length ; i++){
					elems[i].on('click', lbw.show );
				}
			},

		show:
			function(){
				$this = $(this);
				var lbw = lightBoxWithin;
				// show the container
				lbw.lightBoxWrapper.show();
				setTimeout(function(){
					lbw.lightBoxStage.slideDown();					
				},200);
				lbw.close();
				lbw.grabData($this);
			},

		close:
			function(){
				var lbw = lightBoxWithin;

				lbw.lightBoxExit.on('click',function(){
					lbw.lightBoxWrapper.hide();
					lbw.lightBoxStage.hide();
					lbw.lightBoxContent.html('');
				});
			},

		grabData:
			function(data){
				lightBoxWithin.lightBoxContent.load(data.attr('data-dir')+'.html', function(response, status){
			        if(status == "error")
			            lightBoxWithin.lightBoxContent.html('<p>No data available</p>');
				});
			}
	} 

	lightBoxWithin.init();

}(jQuery));