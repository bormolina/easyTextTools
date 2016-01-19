function setOutput(val){
	document.getElementById("outputData").value = val;
}

function listReplace(){
	var rawList1 = document.getElementById("listParams1").value;
	var rawList2 = document.getElementById("listParams2").value;
	var list1 = rawList1.split(",");
	var list2 = rawList2.split(",");
	
	var input = document.getElementById("inputData").value;
	var output = input;
	
	
	for(i in list1){
		elem = list1[i];
		elem2 = list2[i];
		console.log(elem, elem2);
		
		if(elem && elem2){
			output = output.replace( new RegExp(elem,"g"), elem2)
		}
	}
	
	setOutput(multiLine);
}

function upperCase(){
	var input = document.getElementById("inputData").value;
	var output = input.toUpperCase();
	setOutput(output);
}

function lowerCase(){
	var input = document.getElementById("inputData").value;
	var output = input.toLowerCase();
	setOutput(output);
}

function expandTwigAngularBracesBinding(){
	var output = `
{{ '{{myModelName}}' }}	
	`;
	
	setOutput(output);
}

function expandCssInclude(){
	var output = `
<link rel="stylesheet" type="text/css" href="mystyle.css">
	`;
	
	setOutput(output);
}

var functions = [
	{
		names : ["listReplace"],
		inputs : [
			{
				name : "List1",
				description : "not yet",
				type : "list",
				required : true,
				defVal : "0",
				regexp : ""
			},
			{
				name : "List2",
				description : "not yet",
				type: "list",
				required : true,
				defVal : "0",
				regexp : ""
			}
		],
		fn : listReplace,
		description : "lalilou"
	},
	{
		names : ["upperCase"],
		inputs : [],
		fn : upperCase,
		description : "lalilou"
	},
	{
		names : ["lowerCase"],
		inputs : [],
		fn : lowerCase,
		description : "lalilou"
	},
	{
		names : ["expandTwigAngularBracesBinding"],
		inputs : [],
		fn : expandTwigAngularBracesBinding,
		description : "lalilou"
	},
	{
		names : ["expandCssInclude"],
		inputs : [],
		fn : expandCssInclude,
		description : "lalilou"
	}
]