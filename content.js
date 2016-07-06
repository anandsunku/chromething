chrome.extension.onMessage.addListener(
	function(message, sender, sendResponse){
		switch(message.type) 
		{
			case "colors-div":
				// var divs = document.querySelectorAll("div");
				// if(divs.length == 0){
				// 	alert("there are no divs in the page.");
				// } else {
				// 	for (var i=0; i<divs.length; i++) {
				// 		divs[i].style.backgroundColor = message.color;
				// 	}
				// }
				
				// var div = document.querySelectorAll
				
	
			    // var btn = document.createElement("BUTTON")
			    // var t = document.createTextNode("CLICK ME");
			    // btn.appendChild(t);
			    // btn.innerHTML = "swamy";

			    // //Appending to DOM 
			    // document.body.appendChild(btn);

			    // working code starts here
			    // var googletxt = document.getElementById("hplogo");
			    // googletxt.style.width = 426;
			    // googletxt.style.height = 320;
			    // googletxt.style.backgroundSize = "426px 320px";
			    // googletxt.style.background = "url(https://lh3.googleusercontent.com/-pLwzY7ohA3I/VMWvNRh72RI/AAAAAAAABFo/XPJVxoBGEeg/w426-h320/1293979034) no-repeat";
			    //element.style.property
			    //googletxt.innerHTML = "vinayaka here";
			    // working code ends here

			    // family photo code starts here
			    // var googletxt = document.getElementById("lga");
			    // googletxt.innerHTML = "<h1> Jai vinayaka ithu namma area </h1><img src='https://lh3.googleusercontent.com/-pLwzY7ohA3I/VMWvNRh72RI/AAAAAAAABFo/XPJVxoBGEeg/w426-h320/1293979034'></img>";
				// family photo code ends here
		
				var targetmyframe = document.getElementById("lu_pinned_rhs");
				console.log("jai sri ram");
				//targetmyframe.innerHTML =  "<img src='http://yellowpages.sulekha.com/photos/869603/1083444.jpg'></img>";

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
				break;

				var thing = document.querySelectorAll("div#resultStats");
				thing.forEach(function(tt)
					{
						tt.textContent = "jai vinayaka!!!";
					}
				);
		}
	}
);




