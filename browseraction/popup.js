

window.onload = function() {
	document.getElementById("button").onclick = function() {
		chrome.extension.sendMessage({type: "color-divs"});

		chrome.tabs.getSelected(null, function(tab){
			document.getElementById("summa").value = tab.url;

		});
	}
}