var toggled_on = false;

chrome.tabs.onUpdated.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "js/jquery.min.js"});
	chrome.tabs.executeScript(null, {file: "js/toggle_helper.js"});
	chrome.tabs.executeScript(null, {code: "color_kittens = " + localStorage.color});
	if (toggled_on) {
		chrome.tabs.executeScript(null, {file: "js/on.js"});
	} else {
		chrome.tabs.executeScript(null, {file: "js/off.js"});
	}
});

chrome.tabs.onActivated.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "js/jquery.min.js"});
	chrome.tabs.executeScript(null, {file: "js/toggle_helper.js"});
	chrome.tabs.executeScript(null, {code: "color_kittens = " + localStorage.color});
	if (toggled_on) {
		chrome.tabs.executeScript(null, {file: "js/on.js"});
	} else {
		chrome.tabs.executeScript(null, {file: "js/off.js"});
	}
});

chrome.browserAction.onClicked.addListener(function(tab) {
	toggled_on = !toggled_on;
	if (toggled_on) {
		chrome.tabs.executeScript(null, {file: "js/on.js"});
		chrome.browserAction.setIcon({"path": "icon_active.png"});
	} else {
		chrome.tabs.executeScript(null, {file: "js/off.js"});
		chrome.browserAction.setIcon({"path": "icon.png"});
	}
});