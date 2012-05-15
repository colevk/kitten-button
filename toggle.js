$(function(){
	if ($("img[old-src]").length == 0) {
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

// color_kittens is defined in the options
function getKittenURL(width, height) {
	var modifier = color_kittens ? "" : "g/";
	return "http://www.placekitten.com/" + modifier + width + "/" + height;
}