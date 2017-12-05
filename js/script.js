
jQuery(document).ready(function(){
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
