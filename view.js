function setOutput(){
	document.getElementById("outputData").value = finalOutput;
}

function refreshInputs(){
	if(selectedFn && selectedFn.extraInputs.length){
		var inputArea = document.getElementById('inputArea');
		for(i in selectedFn.extraInputs){
			var cInput = selectedFn.extraInputs[i];
			if(cInput){
				var newInput = document.createElement("input");
				var newLabel = document.createElement("label");
				
				newLabel.innerHTML = cInput.name;
				
				newInput.setAttribute("id","input"+i);
				newInput.setAttribute("class","form-control");
				
				document.getElementById("inputArea").appendChild(newLabel);
				document.getElementById("inputArea").appendChild(newInput);
			}
		}
	}
}

/*document.addEventListener("DOMContentLoaded", function(event) {
	var names = Object.keys(hash);
	console.log(names);
	for(i in names){
		var newOption = document.createElement("option");
		newOption.value = names[i];
		newOption.innerHTML = names[i];
		document.getElementById("functionInput").appendChild(newOption);
	}
});*/


/**
Seleccionammos la función escogida por el usuario en el input de function
**/
var input = document.getElementById('functionInput');
input.addEventListener('change', function(){
	console.log("me ejecuto");
	if(input.value){
		//Limpiamos las input previas
		var myNode = document.getElementById("inputArea");
		while (myNode.firstChild) {
			myNode.removeChild(myNode.firstChild);
		}
			
		console.log(input.value);
		selectedFn = functions.find(function(element){
			if(element.names.indexOf(input.value)>-1){
				return true;
			}
		});
		console.log(selectedFn);
	}
	
	/**
	Creamos dinámicamente los campos de las inputs si la fn seleccionada las tuviese
	**/
	refreshInputs();
	
});