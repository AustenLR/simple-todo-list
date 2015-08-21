document.addEventListener("DOMContentLoaded", function(){


//with the submit button ontop of the list
	// document.querySelector("form").addEventListener("submit", function(event){
	// 	event.preventDefault();
	// 	var value = document.querySelector("input").value;
	// 	var newLi = document.createElement("li");
	// 	newLi.innerText = value;
	// 	document.querySelector("ul").appendChild(newLi);
	// })


	//button under the list
	document.querySelector("button").addEventListener("click",function(event){
		event.preventDefault();
		var value = document.querySelector("input").value;
		var newLi = document.createElement("li");
		newLi.innerText = value;
		document.querySelector("ul").appendChild(newLi);
		newLi.addEventListener("click",function(){ //can click on list item to put line through
			newLi.setAttribute("class", "completed"); 
		})
	});
})