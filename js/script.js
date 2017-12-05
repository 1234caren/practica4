
jQuery(document).ready(function(){

	HEADER.init();

	jQuery('.lista-uno').on('click', function(){
		jQuery('.lista-dos',this).slideToggle();
		
	});
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

