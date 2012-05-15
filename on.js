if (!$("#cathider").length) {
	$('head').append($(document.createElement("style"))
		.attr("id", "cathider")
		.attr("type", "text/css")
		.text("img { visibility: hidden; } img.cat { visibility: visible !important; }"));
}

$("img:not(.cat)").each(function() {
	if (this.complete) {
		$(this).attr("old-src", $(this).attr("src"));
		$(this).attr("src", getKittenURL($(this).width(), $(this).height()));
		$(this).addClass("cat");
	} else {
		$(this).load(function() {
			$(this).attr("old-src", $(this).attr("src"));
			$(this).attr("src", getKittenURL($(this).width(), $(this).height()));
			$(this).addClass("cat");
		});
	}
});