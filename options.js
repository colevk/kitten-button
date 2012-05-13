if (typeof localStorage["color"] == "undefined") {
	localStorage.color = false;
}

function save_options() {
	localStorage.color = document.getElementById("color").checked;
}

function load_options() {
	document.getElementById("color").checked = (localStorage.color == "true");
}

document.addEventListener("DOMContentLoaded", function(){
	load_options();
	document.getElementById("color").addEventListener("click", save_options);
});