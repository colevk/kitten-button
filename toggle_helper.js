var hide_images = $(document.createElement("style"))
	.attr("id", "cathider")
	.attr("type", "text/css")
	.text("img { visibility: hidden; } img.cat { visibility: visible !important; }");
var color_kittens;
var toggled;

function getKittenURL(width, height) {
	var modifier = color_kittens ? "" : "g/";
	return "http://www.placekitten.com/" + modifier + width + "/" + height;
}
