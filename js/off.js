$("#cathider").each(function() {
	$(this).remove();
});

$("img").each(function() {
	if ($(this).prop("loadfunction")) {
		$(this).unbind("load");
	}
});

$("img[old-src]").each(function() {
	deconvert($(this));
});