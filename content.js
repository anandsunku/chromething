Array.prototype.contains = function(v) 
{
     for(var i=0; i< this.length; i++) 
     {
	     if(this[i] === v) return true;
     }
     
     return false;
};

Array.prototype.unique = function () {

   var arr = [];
   for (var i=0; i< this.length; i++) {
         if(!arr.contains(this[i])) {
              arr.push(this[i]);
           }
    }
    return arr;
}


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
				var resStats = {
					googleres: fromGoogle
				};

				sendResponse(resStats);

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

		var head = document.querySelectorAll("th")
		var stringSearch = [];
		var secstring = [];
		head.forEach(function(h1){
		  if(h1.textContent.trim().indexOf("acct_num") > -1)
		   { 
		    // console.log(h1.nextSibling.nextSibling.textContent.trim());
		     stringSearch.push(h1.nextSibling.nextSibling.textContent.trim());
		   }
		   if(h1.textContent.trim().indexOf("counter_party") > -1) {
		   	  secstring.push(h1.nextSibling.nextSibling.textContent.trim());
		   }

		});

		var uniques = stringSearch.unique();
		var partyunique = secstring.unique();
		console.log(uniques);
		console.log(stringSearch);

		var resStats = {
			googleres: uniques,
			party:partyunique
		};

		response(resStats);	
	}
});










