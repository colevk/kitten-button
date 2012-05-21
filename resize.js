// Class for storing locations of the cat pictures
// faceRect is the x, y, height, width of the important part of the picture
CatPic = function(filename, size, faceCenter) {
	this.filename = filename;
	this.size = size;
	this.faceCenter = faceCenter;
}

var kittenPics = [
	new CatPic("cat1.jpeg", [1024,768], [461,379]), 
	new CatPic("cat2.jpeg", [1024,768], [556,447]),
	new CatPic("cat3.jpeg", [1024,768], [321,447]),
	new CatPic("cat4.jpeg", [1024,768], [597,344]),
	new CatPic("cat5.jpeg", [1024,768], [453,466]),
	new CatPic("cat6.jpeg", [1024,768], [397,443]),
	new CatPic("cat7.jpeg", [1024,768], [472,413]),
	new CatPic("cat8.jpeg", [1024,768], [538,271]),
	new CatPic("cat9.jpeg", [1024,768], [632,395]),
	new CatPic("cat10.jpeg", [1024,768], [560,384]),
	new CatPic("cat11.jpeg", [1024,768], [608,455]),
	new CatPic("cat12.jpeg", [1024,768], [617,433]),
	new CatPic("cat13.jpeg", [1024,768], [301,305]),
	new CatPic("cat14.jpeg", [1024,768], [436,438]),
	new CatPic("cat15.jpeg", [1024,768], [575,446]),
	new CatPic("cat16.jpeg", [1024,768], [411,417])
];


// Takes a jQuery img tag object as an argument
function convertToKitten(img) {
	var catImg = kittenPics[0];
	img.attr("old-src", img.attr("src"));
	img.attr("src", "images/placeholder.png");
	img.css("background-image", "url(images/" + catImg.filename + ")");
	img.css("background-repeat", "no-repeat");
	
	var imgheight = img.height();
	var imgwidth = img.width();
	var xresize = imgwidth / catImg.size[0];
	var yresize = imgheight / catImg.size[1];
	if (xresize > yresize) { //image is being cropped horizontally
		img.css("background-size", "100% auto");
		var yshift = parseInt(imgheight / 2 - catImg.faceCenter[1] * xresize);
		// coerce to between 0 and (catImg.faceCenter[0] - catImg.size[0]) * xresize
		img.css("background-position-y", yshift + "px");
	} else { //image is being cropped vertically
		img.css("background-size", "auto 100%");
		var xshift = parseInt(imgwidth / 2 - catImg.faceCenter[0] * yresize);
		// coerce to between 0 and (catImg.faceCenter[0] - catImg.size[0]) * xresize
		img.css("background-position-x", xshift + "px");
	}
}