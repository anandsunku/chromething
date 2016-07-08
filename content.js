chrome.extension.onMessage.addListener(
	function(message, sender, sendResponse){
		switch(message.type) 
		{
			case "colors-div":
		
				var targetmyframe = document.getElementById("lu_pinned_rhs");
				console.log("jai sri ram");

				var divs = document.querySelectorAll("div");
				if(divs.length === 0) {
					alert("There are no any divs in the page.");
				} 
				else 
				{
					for(var i=0; i<6; i++) {
						divs[i].style.backgroundColor = "#f00";
					}
				}
				

				var thing = document.querySelectorAll("div#resultStats");
				thing.forEach(function(tt)
					{
						tt.textContent = "jai vinayaka!!!";
					}
				);

				//todo: i need to pass a message to background script.

				break;
		}
	}
);


chrome.runtime.onMessage.addListener(function (msg,sender, response) {
	if((msg.from === 'popup') && (msg.subject ==="getStats")) {

		var thing = document.querySelectorAll("div#resultStats");
		var fromGoogle;

		thing.forEach(function(tt)
			{
				fromGoogle = tt.textContent;
			}
		);

		console.log("i got the message");

		var resStats = {
			googleres: fromGoogle
		};

		response(resStats);	
	}
});




