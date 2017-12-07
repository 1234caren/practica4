
jQuery(document).ready(function(){

	HEADER.init();
	CAREN.init();
	JUAN.init();




});


function newsLeave(sender, defaultValue) {
    if (jQuery.trim(sender.value) == '') sender.value = defaultValue;
}
function newsSelect(sender, defaultValue) {
    if (sender.value == defaultValue) sender.value = '';
    else sender.select();
}

//Header Sticky
var HEADER = {
    init:function(){
        this.stickyHeader();     
    },

    stickyHeader: function(){
        console.log('entro');
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 130) {
                jQuery(".container-nav").addClass('sticky');
            } else {
                jQuery(".container-nav").removeClass('sticky');
            }
        });
    }
}

var CAREN = {
	init:function(){
		this.slide();
	},

	slide:function(){
		jQuery('.lista-uno span').click( function(){
		jQuery(this).toggleClass('open');
		jQuery(this).next('ul').slideToggle();
	});
	}
}

var JUAN = {
	init:function(){
		this.slide();
	},

	slide:function(){
		jQuery('.caja-boton').click( function(){
			jQuery(this).toggleClass('open');
			jQuery(this).children('ul').slideToggle();
		});
	}
}
