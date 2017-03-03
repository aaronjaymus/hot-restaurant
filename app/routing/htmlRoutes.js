// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  console.log(__dirname);
  app.get("/", function(req, res){
  	res.sendFile(path.join(__dirname, "../public", "home.html"));
  });

  app.get("/reserve", function(req, res){
  	res.sendFile(path.join(__dirname, "../public", "reserve.html"));
  });

  app.get("/tables", function(req, res){
  	res.sendFile(path.join(__dirname, "../public", "tables.html"));
  });
  // Add some routes to get the three HTML files
};
