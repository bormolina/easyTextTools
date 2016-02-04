function execute(){
	console.log(selectedFn)
	if(selectedFn){
		selectedFn.fn();
		$("#outputData").val(finalOutput);
	}
}