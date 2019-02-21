exports.viewProject = function(req, res) { 
	res.render('courseprofinfo', { 
		"professors" : [ 
			{ "name" : "David Andrews"},
			{ "name" : "George Scott"},
			{ "name" : "Scott Klemmer"},
			{ "name" : "Philip Guo"},
			{ "name" : "Jeremy Prestholdt"},
			{ "name" : "Jim Magagna"},
			{ "name" : "Professor"},
			{ "name" : "Professor"},
		]			 
	});
};
