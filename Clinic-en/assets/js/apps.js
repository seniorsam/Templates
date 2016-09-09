$(document).ready(function() {
  /* Collapsed menu */
  $('.collapse-menu-but').on('click',function(){
    $('.collapse-menu').slideToggle(200);
  });


 /* Gallery */
 $('.cats-buttons').on('click','button',function(){

    var cat = $(this).data('cat'),
        container = $('.cats .row'),
        cats  = container.find( "." + cat ),
        all   = container.children(),
        error = $('.nodata');  

    //if all category
    if(cat === "all"){
      all.css("opacity","1");
      error.css("display","none");
    } 

    //Other categories
    else{
        //hide all childrens
        all.css("opacity","0.2");
        //show related pictures 
        if(cats.length !== 0){
          cats.css("opacity","1");
          error.css("display","none");
        //what if there aren't pictures for this cat
        }else{
          error.css("display","block");
        }
    }
    
 });

});