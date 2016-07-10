function setStats(info){
	info.googleres.forEach(function(content1){
		document.getElementById("summa").value += content1;
		document.getElementById("summa").value += "\r\n";
	});

	document.getElementById("summa").value += "\r\ncounter_party\r\n----------\r\n";

	info.party.forEach(function(content2){
		document.getElementById("summa").value += content2;
		document.getElementById("summa").value += "\r\n";
	});
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