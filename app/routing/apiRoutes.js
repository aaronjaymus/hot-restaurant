
var path = require("path");
var waiting = require("../data/waitingList.js");
var tables = require("../data/tableData.js");

// ===============================================================================
// ROUTING
// ===============================================================================


module.exports = function(app) {

	app.post("/api/reserve", function(req, res){
		var newCustomer = req.body;
		newCustomer.customerObjectId = newCustomer.customerObjectId.replace(/\s+/g, "").toLowerCase();
	
		console.log(newCustomer);

		if(tables.length<5){
			tables.push(newCustomer);
			res.json(true);
		}else{
			waiting.push(newCustomer);
			res.json(false);
		}
	});

	app.get("/api/tables", function(req, res){
		var allTables = [];
		allTables.push(tables, waiting);
		res.json(allTables);
	});
};