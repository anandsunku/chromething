
//omnibox
chrome.omnibox.onInputChanged.addListener(

	function(text, suggest){
		suggest([
			{content:"color-divs", description: "make everything red"}
		]);
	});

chrome.omnibox.onInputEntered.addListener(

	function(text) 
	{
		if(text =="color-divs") colorDivs();
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

chrome.tabs.onUpdated.addListener(

	function(tabId, changeInfo, tab) 
	{
		if (changeInfo.status == 'complete') {
			chrome.tabs.sendMessage(tab.id, {type: "colors-div", color: "#F00"});
		}
	}
);

//todo: listening for an event / long-lived connections
// coming from devtools


// send a message to the content script
var colorDivs = function() {
	chrome.tabs.getSelected(null, function(tab){

		console.log("samy am i there");
		console.log(tab.id);
		console.log(tab.url);

		chrome.tabs.sendMessage(tab.id, {type: "colors-div", color: "#F00"});
		//setting a badge
		chrome.browserAction.setBadgeText({text: "baaa!"});	
	});
}





