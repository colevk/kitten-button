// Class for storing locations of the cat pictures
// faceRect is the x, y, height, width of the important part of the picture
CatPic = function(filename, size, faceCenter) {
	this.filename = filename;
	this.size = size;
	this.faceCenter = faceCenter;
}

if (typeof color_kittens == "undefined") { color_kittens = false; }
var img_location = (color_kittens ? "color/" : "grayscale/");

var hide_images = $(document.createElement("style"))
	.attr("id", "cathider")
	.attr("type", "text/css")
	.text("img { visibility: hidden; } img.cat { visibility: visible !important; }");
var toggled;
var placeholder = chrome.extension.getURL("images/placeholder.png");
var kittenPics = [
	new CatPic("cat1.jpg", [1024,768], [461,379]), 
	new CatPic("cat2.jpg", [1024,768], [556,447]),
	new CatPic("cat3.jpg", [1024,768], [321,447]),
	new CatPic("cat4.jpg", [1024,768], [597,344]),
	new CatPic("cat5.jpg", [1024,768], [453,466]),
	new CatPic("cat6.jpg", [1024,768], [397,443]),
	new CatPic("cat7.jpg", [1024,768], [472,413]),
	new CatPic("cat8.jpg", [1024,768], [538,271]),
	new CatPic("cat9.jpg", [1024,768], [632,395]),
	new CatPic("cat10.jpg", [1024,768], [560,384]),
	new CatPic("cat11.jpg", [1024,768], [608,455]),
	new CatPic("cat12.jpg", [1024,768], [617,433]),
	new CatPic("cat13.jpg", [1024,768], [301,305]),
	new CatPic("cat14.jpg", [1024,768], [436,438]),
	new CatPic("cat15.jpg", [1024,768], [575,446]),
	new CatPic("cat16.jpg", [1024,768], [411,417])
];
for (i in kittenPics) {
	kittenPics[i].filename = chrome.extension.getURL("images/" + img_location + kittenPics[i].filename);
}


// applies "convert" to all non-cat images on the page
function toggle_on() {
	$("img:not([old-src])").each(function() {
		if (this.complete) {
			convert($(this));
		} else {
			$(this).one("load", function() {
				convert($(this));
			});
		}
	});
}

// applies "deconvert" to all cat images on the page
function toggle_off() {
	$("img[old-src]").each(function() {
		deconvert($(this));
	});
}


// Takes a jQuery img tag object as an argument
function convert(img) {
	if (img.hasClass("cat")) { return; }
	var catImg = kittenPics[Math.floor(Math.random() * kittenPics.length)];
	
	if (img.attr("class")) { img.prop("hadclass", true); }
	if (img.attr("style")) { img.prop("hadstyle", true); }
	
	img.attr("old-src", img.attr("src"));
	img.attr("src", placeholder);
	img.css("background-image", "url('" + catImg.filename + "')");
	img.css("background-repeat", "no-repeat");
	
	var imgheight = img.height();
	if (img.attr("height")) {
		img.prop("hadheight", true);
	} else {
		img.attr("height", imgheight);
	}
	
	var imgwidth = img.width();
	if (img.attr("width")) {
		img.prop("hadwidth", true);
	} else {
		img.attr("width", imgwidth);
	}
	
	var xresize = imgwidth / catImg.size[0];
	var yresize = imgheight / catImg.size[1];
	if (xresize > yresize) { //vertical crop
		img.css("background-size", "100% auto");
		var yshift = imgheight / 2 - catImg.faceCenter[1] * xresize;
		yshift = Math.min(0, Math.max(yshift, (catImg.faceCenter[1] - catImg.size[1]) * xresize));
		img.css("background-position-y", parseInt(yshift) + "px");
	} else { //horizontal crop
		img.css("background-size", "auto 100%");
		var xshift = imgwidth / 2 - catImg.faceCenter[0] * yresize;
		xshift = Math.min(0, Math.max(xshift, (catImg.faceCenter[0] - catImg.size[0]) * yresize));
		img.css("background-position-x", parseInt(xshift) + "px");
	}
	img.one("load", function(){ $(this).addClass("cat"); });
}

// Takes a jQuery img tag object as an argument
function deconvert(img) {
	if (!img.hasClass("cat")) { return; }
	// revert src
	img.attr("src", img.attr("old-src"));
	img.removeAttr("old-src");
	// revert class
	if (!img.prop("hadclass")) {
		img.removeAttr("class");
	} else {
		img.removeClass("cat");
	}
	// revert style
	if (!img.prop("hadstyle")) {
		img.removeAttr("style");
	} else {
		img.css("background-image", "")
			.css("background-repeat", "")
			.css("background-size", "")
			.css("background-position-x", "")
			.css("background-position-y", "");
	}
	// revert dimensions
	if (!img.prop("hadwidth")) { img.one("load", function(){ $(this).removeAttr("width"); })}
	if (!img.prop("hadheight")) { img.one("load", function(){ $(this).removeAttr("height"); })}
}