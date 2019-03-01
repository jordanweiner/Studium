var cleandata = require('../data/cleandata.json');

exports.viewProject = function(req, res) { 
	cleandata["viewAlt"] = false;
	res.render("comparator", cleandata);
};

exports.viewAlt = function(request, response){
	cleandata["viewAlt"] = true;
	res.render("comparator", cleandata);
};
