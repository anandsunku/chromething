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
				break;
		}
	}
);




