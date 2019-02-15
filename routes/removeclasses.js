exports.viewProject = function(req, res) { 
	res.render("removeclasses", { 
		"classes" : [ 
			{ "courseid" : "COGS",
			 "coursenumber" : ["1"] },
			 { "courseid" : "COGS",
			 "coursenumber" : ["120"]},
		    { "courseid" : "CSE",
			 "coursenumber" : ["170"]}
		]			 
	});
};
