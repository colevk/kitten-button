//$("#cathider").each(function() {
//	$(this).remove();
//});

$("img").each(function() {
	$(this).unbind("load");
});

$("img[old-src]").each(function() {
	deconvert($(this));
});