var toggled_on = false;

function load_helper_scripts() {
	chrome.tabs.executeScript(null, {file: "js/jquery.min.js"});
	chrome.tabs.executeScript(null, {code: "color_kittens = " + localStorage.color});
	chrome.tabs.executeScript(null, {file: "js/toggle_helper.js"});
}

function load_toggle_scripts() {
	if (toggled_on) {
		chrome.tabs.executeScript(null, {file: "js/on.js"});
	} else {
		chrome.tabs.executeScript(null, {file: "js/off.js"});
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
	load_helper_scripts();
	load_toggle_scripts();
});

chrome.tabs.onActivated.addListener(function(tab) {
	load_helper_scripts();
	load_toggle_scripts();
});

chrome.browserAction.onClicked.addListener(function(tab) {
	toggle();
	load_toggle_scripts();
});