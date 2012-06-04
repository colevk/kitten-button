$("img:not([old-src])").each(function() {
	if (this.complete) {
		convert($(this));
	} else {
		$(this).one("load", function() {
			convert($(this));
		});
	}
});