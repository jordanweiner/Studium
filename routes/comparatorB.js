exports.viewProject = function(req, res) { 
	
	var cleandata = require('../data/cleandata');

	res.render("comparatorB", cleandata);
};



