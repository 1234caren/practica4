
jQuery(document).ready(function(){

	HEADER.init();
	SLIDEFILTRO.init();


});


function newsLeave(sender, defaultValue) {
    if (jQuery.trim(sender.value) == '') sender.value = defaultValue;
}
function newsSelect(sender, defaultValue) {
    if (sender.value == defaultValue) sender.value = '';
    else sender.select();
}
	function myFunction(x) {
    x.classList.toggle("change");
}

//Header Sticky
var HEADER = {
    init:function(){
        this.stickyHeader();     
    },

    stickyHeader: function(){
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 130) {
                jQuery(".container-nav").addClass('sticky');
            } else {
                jQuery(".container-nav").removeClass('sticky');
            }
        });
    }
}

var SLIDEFILTRO = {
    init:function(){
        this.slide();     
        this.slide2();     
    },

    slide: function(){
	   	jQuery('.grilla .contenedor-mobile .filtro').click(function(){
	    	console.log('entro');
	    	jQuery(this).toggleClass('abrir');
	     	jQuery('.grilla .columna-uno').slideToggle();
	    });
    },

 	slide2: function(){
		jQuery('.lista-uno span').click(function(){
		    jQuery(this).toggleClass('open');
		    jQuery(this).next('ul').slideToggle();
		});
 	}   
}
