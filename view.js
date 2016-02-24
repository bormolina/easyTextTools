var view = new Object();

view.fnSelector = "functionInput";
view.outputSelector = "outputData";
view.inputAreaSelector = "inputArea";

view.fnField = document.getElementById(view.fnSelector);
view.outputField = document.getElementById(view.outputSelector);
view.inputAreaField =  document.getElementById(view.inputAreaSelector);

function setOutput(){
	view.outputField.value = finalOutput;
}

function refreshInputs(){
	if(selectedFn.extraInputs.length){
		for(i in selectedFn.extraInputs){
			var cInput = selectedFn.extraInputs[i];
			if(cInput){
				var newInput = document.createElement("input");
				var newLabel = document.createElement("label");
				
				newLabel.innerHTML = cInput.name;
				
				newInput.setAttribute("id","input"+i);
				newInput.setAttribute("class","form-control");
				
				view.inputAreaField.appendChild(newLabel);
				view.inputAreaField.appendChild(newInput);
			}
		}
	}
}

/**
function testSetInput(){
	
	if(selectedFn.input){
		
	}
	else{
		
	}
}
**/

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
A ejecutar cada vez que el usuario cambie de función.
**/

$("#"+view.fnSelector).on("select2:select", function (e) { 
	if(view.fnField.value){
		console.log(view.fnField.value);
		//Limpiamos las input previas
		var myNode = view.inputAreaField;
		while (myNode.firstChild) {
			myNode.removeChild(myNode.firstChild);
		}
			
		selectedFn = functions.find(function(element){
			if(element.names.indexOf(view.fnField.value)>-1){
				console.log()
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
