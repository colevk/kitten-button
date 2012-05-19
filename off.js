$("#cathider").each(function() {
	$(this).remove();
});

$("img:not(.cat)").each(function() {
	$(this).unbind("load");
});

$("img[old-src]").each(function() {
	$(this).attr("src", $(this).attr("old-src"));
	$(this).removeAttr("old-src");
	$(this).removeClass("cat");
});