var cleandata = require('../data/cleandata.json');

exports.viewProject = function(req, res) { 
	cleandata["viewAlt"] = false;
	res.render("comparator", cleandata);
};

exports.viewAlt = function(req, res){
	cleandata["viewAlt"] = true;
	res.render("comparator", cleandata);
};
