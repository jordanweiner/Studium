exports.viewProject = function(req, res) { 

	var info = require('../data/cleandata.json');

	//var showLess(info);
	res.render('courseprofinfo');//, //info);
};

function showLess(info) {
	var i;
	var instr;
	for (i = 0; i < info.Instructor.length; i++) {
		instr = info.Instructor[i];
		console.log(instr.name);
	}
}
