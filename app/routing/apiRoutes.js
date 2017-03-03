
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

		if(tables.tableArray.length<5){
			tables.tableArray.push(newCustomer);
		}else{
			waiting.waitingArray.push(newCustomer);
		}
	});

	app.get("/api/tables", function(req, res){
		var allTables = [];
		allTables.push(tables.tableArray, waiting.waitingArray);
		res.json(allTables);
	});
};