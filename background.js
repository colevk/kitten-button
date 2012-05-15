var toggled_on = false;

chrome.tabs.onUpdated.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "jquery.min.js"});
	chrome.tabs.executeScript(null, {file: "toggle_helper.js"});
	chrome.tabs.executeScript(null, {code: "color_kittens = " + localStorage.color});
	if (toggled_on) {
		chrome.tabs.executeScript(null, {file: "on.js"});
	} else {
		chrome.tabs.executeScript(null, {file: "off.js"});
	}
});

chrome.tabs.onActivated.addListener(function(tab) {
	chrome.tabs.executeScript(null, {code: "color_kittens = " + localStorage.color});
	if (toggled_on) {
		chrome.tabs.executeScript(null, {file: "on.js"});
	} else {
		chrome.tabs.executeScript(null, {file: "off.js"});
	}
});

chrome.browserAction.onClicked.addListener(function(tab) {
	toggled_on = !toggled_on;
	if (toggled_on) {
		chrome.tabs.executeScript(null, {file: "on.js"});
	} else {
		chrome.tabs.executeScript(null, {file: "off.js"});
	}
});