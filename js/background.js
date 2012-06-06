var toggled_on = false;

function truth(str) {
	return str == "true";
}

function load_helper_scripts() {
	chrome.tabs.executeScript(null, {file: "js/jquery.min.js"});
	chrome.tabs.executeScript(null, {code: "color_kittens = " + localStorage.color});
	chrome.tabs.executeScript(null, {file: "js/toggle.js"});
}

function apply_toggle() {
	if (toggled_on) {
		chrome.tabs.executeScript(null, {code: "toggle_on();"});
	} else {
		chrome.tabs.executeScript(null, {code: "toggle_off();"});
	}
}

function toggle() {
	toggled_on = !toggled_on;
	if (toggled_on) {
		chrome.browserAction.setIcon({"path": "icon_active.png"});
	} else {
		chrome.browserAction.setIcon({"path": "icon.png"});
	}
}

chrome.tabs.onUpdated.addListener(function(tab) {
	if(!toggled_on) { chrome.tabs.insertCSS(null, {file: "css/unhider.css"}); }
	load_helper_scripts();
	apply_toggle();
});

chrome.tabs.onActivated.addListener(function(tab) {
	if(!toggled_on) { chrome.tabs.insertCSS(null, {file: "css/unhider.css"}); }
	load_helper_scripts();
	apply_toggle();
});

chrome.browserAction.onClicked.addListener(function(tab) {
	if(!toggled_on) { chrome.tabs.insertCSS(null, {file: "css/unhider.css"}); }
	toggle();
	apply_toggle();
});