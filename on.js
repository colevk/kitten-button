//var style = document.createElement("style");
//style.setAttribute("id", "cathider");
//style.setAttribute("type", "text/css");
//style.innerHTML = "img { visibility: hidden !important;} img.cat { visibility: visible !important; }";
//document.head.appendChild(style);

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