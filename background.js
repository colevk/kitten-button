var toggled; = false;

chrome.tabs.onUpdated.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "jquery.min.js"});
	chrome.tabs.executeScript(null, {file: "toggle_helper.js"});
	chrome.tabs.executeScript(null, {code: "color_kittens = " + localStorage.color});
	chrome.tabs.executeScript(null, {code: "toggled = " + toggled});
});

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "toggle.js"});
	toggle = !toggle;
});