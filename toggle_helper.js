var hide_images = $(document.createElement("style")).attr("src", "hide.css")
var color_kittens;
var toggled;

// color_kittens is defined in the options
function getKittenURL(width, height) {
	var modifier = color_kittens ? "" : "g/";
	return "http://www.placekitten.com/" + modifier + width + "/" + height;
}
