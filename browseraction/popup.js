

window.onload = function() {
	document.getElementById("button").onclick = function() {
		// message now sent will be received by 
		//  	content.js 		: chrome.extension.onMessage.addListener(
		//		background.js	: chrome.extension.onMessage.addListener(
		chrome.extension.sendMessage({type: "color-divs"});

		chrome.tabs.getSelected(null, function(tab){
			document.getElementById("summa").value = tab.url;

		});
	}
}