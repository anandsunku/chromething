function setStats(info){
	document.getElementById("summa").value = info.googleres;
}

window.onload = function() {


	document.getElementById("button").onclick = function() {

		chrome.extension.sendMessage({type: "color-divs"});

		chrome.tabs.getSelected(null, function(tab){
			document.getElementById("summa").value = tab.url;

		});
	}

	document.getElementById("getres").onclick = function() {
		chrome.tabs.query
		(	{
				active: true,
				currentWindow: true
			}, function(tabs){
				chrome.tabs.sendMessage(
					tabs[0].id,
					{from: 'popup', subject: 'getStats'},
					setStats);
			}
		);
	}
}