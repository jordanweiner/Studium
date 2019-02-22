exports.viewProject = function(req, res) { 

	var info = require('../data/data.json');	
	res.render('courseprofinfo', profinfo);
};
