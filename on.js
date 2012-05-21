//var style = document.createElement("style");
//style.setAttribute("id", "cathider");
//style.setAttribute("type", "text/css");
//style.innerHTML = "img { visibility: hidden !important;} img.cat { visibility: visible !important; }";
//document.head.appendChild(style);

$("img:not([old-src])").each(function() {
	if (this.complete) {
		convert($(this));
	} else {
		$(this).load(function() {
			convert($(this));
		});
	}
});