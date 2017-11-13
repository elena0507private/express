const express              = require("express");
const app                  = express();
let   paramLength          = 0;
const DEFAULT_PARAMS_COUNT = 3;
let operationSign          = "+";  

app.get("/path?", (req, res) => {
	const defaultParams = true;
	if ( Object && typeof req.query != "undefined" && typeof Object.keys(req.query) != "undefined" && Object.keys(req.query)) {
		paramLength = parseInt(Object.keys(req.query).length);
	}

	if ( paramLength == DEFAULT_PARAMS_COUNT 
		 && (isNaN(req.query["number1"]) || isNaN(req.query["number2"])) 
    ){
		res.status(400);
		res.send('Incorrect Params');
		return;
	}

	let number1   = (typeof req.query["number1"] != "undefined" && paramLength ==  DEFAULT_PARAMS_COUNT)? 
			parseInt(req.query["number1"]) : 0;
	let number2   = (typeof req.query["number2"] != "undefined" && paramLength ==  DEFAULT_PARAMS_COUNT)? 
			parseInt(req.query["number2"]) : 0;
	let operation = (typeof req.query["operation"] != "undefined" && paramLength ==  DEFAULT_PARAMS_COUNT)? 
			req.query["operation"] : 'add';
	let result    = "Not defined";

	switch(operation) { 
	   case "add": { 
		  result        = number1 + number2;
		  operationSign = "+";  
		  break; 
	   } 
	   case "sub": { 
		  result = 	number1 - number2;
		  operationSign = "-";  
		  break; 
	   } 
	   default: { 
		  res.status(400);
		  res.send('Operations should be add/sub only');
		  return;
		  break; 
	   } 
}
  res.send(`${number1} ${operationSign} ${number2} = ${result}`);
});


app.listen(3000);
