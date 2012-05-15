var toggled_on = false;

chrome.tabs.onUpdated.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "jquery.min.js"});
	chrome.tabs.executeScript(null, {file: "toggle_helper.js"});
	chrome.tabs.executeScript(null, {code: "color_kittens = " + localStorage.color});
	chrome.tabs.executeScript(null, {code: "toggled_on = " + toggled_on});
});

chrome.browserAction.onClicked.addListener(function(tab) {
	toggled_on = !toggled_on;
	chrome.tabs.executeScript(null, {code: "toggled_on = " + toggled_on});
	chrome.tabs.executeScript(null, {file: "toggle.js"});
});