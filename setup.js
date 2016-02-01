$('#functionInput').select2({
	placeholder: "Select a function",
	allowClear: true,
	data: Object.keys(hash)
});

$('#functionInput').on("select2:select", function (e) { 
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