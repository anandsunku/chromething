chrome.tabs.onUpdated.addListener(

	function(tabId, changeInfo, tab) 
	{
		if (changeInfo.status == 'complete') {
			//tabs.sendMessage is to reach content.js from background.js 
			//chrome.tabs.sendMessage(tab.id, {type: "colors-div", color: "#F00"});
		}
	}
);




//listening for an event / one-time requests
// coming from the popup
chrome.extension.onMessage.addListener(

	function(request, sender, sendResponse){
		switch(request.type){
			case "color-divs":
				colorDivs();
			break;
		}
		return true;
	}
);



//todo: listening for an event / long-lived connections
// coming from devtools
// send a message to the content script
var colorDivs = function() {
	chrome.tabs.getSelected(null, function(tab){

		chrome.tabs.sendMessage(tab.id, {type: "colors-div", color: "#F00"});
		//setting a badge
		chrome.browserAction.setBadgeText({text: "!"});

		chrome.browserAction.getPopup()
	});
}





