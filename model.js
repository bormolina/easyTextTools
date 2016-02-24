var functions = [
	{
		names : ["upperCase"],
		input : true,
		extraInputs : [],
		fn : upperCase,
		description : "lalilou",
		sampleInput : ""
	},
	{
		names : ["lowerCase"],
		input : true,
		extraInputs : [],
		fn : lowerCase,
		description : "lalilou",
		sampleInput : ""
	},
	{
		names : ["listReplace"],
		input : true,
		extraInputs : [
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
		description : "lalilou",
		sampleInput : ""
	},
	{
		names : ["expandTwigAngularBracesBinding"],
		input : false,
		extraInputs : [],
		fn : expandTwigAngularBracesBinding,
		description : "lalilou",
		sampleInput : ""
	},
	{
		names : ["expandCssInclude"],
		input : false,
		extraInputs : [],
		fn : expandCssInclude,
		description : "lalilou",
		sampleInput : ""
	}
]

function getInputs(){
	var x = 1;
	var y = 2;
	var allInputs = [];
	var i = 0;
	var cInput = "input0";

	while(document.getElementById(cInput)){
		allInputs.push(document.getElementById(cInput));
		i += 1;
		cInput = "input"+i;
	}
	return allInputs;
}

function listReplace(){
	var rawInputs = getInputs();
	
	var rawList1 = rawInputs[0].value;
	var rawList2 = rawInputs[1].value;
	
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
	
	finalOutput = output;
}

function upperCase(){
	var input = document.getElementById("inputData").value;
	var output = input.toUpperCase();
	finalOutput = output;
}

function lowerCase(){
	var input = document.getElementById("inputData").value;
	var output = input.toLowerCase();
	finalOutput = output;
}

function expandTwigAngularBracesBinding(){
	var output = `
{{ '{{myModelName}}' }}	
	`;
	
	finalOutput = output;
}

function expandCssInclude(){
	var output = `
<link rel="stylesheet" type="text/css" href="mystyle.css">
	`;
	
	finalOutput = output;
}

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
var selectedFn = functions[0];
var finalOutput = "";
