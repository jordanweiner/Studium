exports.viewProject = function(req, res) { 

	var info = require('../data/cleandata.json');	
	res.render('courseprofinfo', info);
};
