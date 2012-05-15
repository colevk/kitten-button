$(function(){
	if (toggled_on) {
		$("img").each(function(){
			$(this).attr("old-src", $(this).attr("src"));
			$(this).attr("src", getKittenURL($(this).width(), $(this).height()));
		});
	} else {
		$("img[old-src]").each(function(){
			$(this).attr("src", $(this).attr("old-src"));
			$(this).removeAttr("old-src");
		});
	}
});
