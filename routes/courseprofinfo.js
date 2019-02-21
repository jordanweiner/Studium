exports.viewProject = function(req, res) { 

	var profinfo = require('../data/data.json');
	res.render('courseprofinfo',profinfo);
};
