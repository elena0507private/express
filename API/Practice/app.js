const express    = require("express");
const bodyParser = require("body-parser");

const app = express();

let tasks = [
	{"id": "1", "description" : "to do 1", "date_create": "01-01-2014" ,"status" : "0", },
	{"id": "2", "description" : "to do 2", "date_create": "01-02-2017" ,"status" : "1", },
	{"id": "3", "description" : "to do 3", "date_create": "01-03-2013" ,"status" : "0", },
];
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use((req, res, next) => {
   let method = req.method;
   let url = req.url;
   console.log(`${method} ${url}`);
   next();
});

app.get("/resource/:id", (req, res) => {

   switch(req.params.id){
	case 'date':
		tasks.sort((a,b) => new Date(a.date_create).getTime() - new Date(b.date_create).getTime());
		res.json(tasks);
		break;
	case 'status':
		tasks.sort((a,b) => a.status > b.status);
		res.json(tasks);
		break;
	case 'done':
		let allowed = ['1'];

		let filtered = Object.keys(tasks)
		  .filter(key => allowed.includes(key))
		  .reduce((obj, key) => {
		    obj[key] = tasks[key];
		    return obj;
		  }, {});

		console.log(filtered);
		res.json(filtered);
		break;
	case 'open':
		let arr = [];		
		for (var val of tasks) {
			if (val.status == '0') {
				arr.push(val);
			}
		}
		res.json(arr);
		break;
	default:
		let arr1 = [];		
		for (var val of tasks) {
			if (parseInt(val.id) == parseInt(req.params.id)) {
				arr1.push(val);
			}
		}
		res.json(arr1);
		break;
   }
   
});


app.post("/resource", (req, res) => {
   tasks.push(req.body);
   console.log('tasks = ', tasks);
   
   res.status(200);
   res.end();
});

app.put("/resource/:id", (req, res) => {
   let id = req.params.id;
   let data = tasks.map((item, index) => {
	if (item.id.toString() == id.toString())  {
		item.description = "Changed Description";
	}
	console.log('tasks=', tasks)
   
   return item;
});
   
   res.end();
});
app.delete("/resource/:id", (req, res) => {
   let id = req.params.id;
	console.log('id', id);
   let removeIndex = tasks.map(function(item) { return item.id; }).indexOf(id.toString());
	console.log('removeIndex', removeIndex);
   tasks.splice(removeIndex, 1);
	console.log('tasks = ', tasks);
   res.end();
});

app.listen(3000);
