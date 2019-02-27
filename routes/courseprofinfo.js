exports.viewProject = function(req, res) { 

	var info = require('../data/cleandata.json');
	console.log(info)	
	res.render('courseprofinfo', info);
};
