function createHash(){
	var hash = {};
	for(i in functions){
		var cFuntion = functions[i];
		for(j in cFuntion.names){
			var name = cFuntion.names[j];
			hash[name] = cFuntion.fn;
		}
	}
	return hash;
}

var hash = createHash();

var selectedFn = null;

document.addEventListener("DOMContentLoaded", function(event) {
	var names = Object.keys(hash);
	for(i in names){
		var newOption = document.createElement("option");
		newOption.value = names[i];
		document.getElementById("functionsList").appendChild(newOption);
	}
});

/**
Seleccionammos la función escogida por el usuario en el input de function
**/
var input = document.getElementById('functionInput');
input.addEventListener('change', function(){
	
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
	if(selectedFn.inputs.length){
		var inputArea = document.getElementById('inputArea');
		for(i in selectedFn.inputs){
			var cInput = selectedFn.inputs[i];
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
});


function execute(){
	console.log("conye");
	if(selectedFn){
		selectedFn.fn();
	}
}