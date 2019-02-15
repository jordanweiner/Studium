exports.viewProject = function(req, res) { 
	res.render("addclasses", { 
		"classes" : [ 
			{ "courseid" : "AAS",
			 "coursenumber" : ["10"] },
		    {
		    "courseid" : "ANAR" ,
			"coursenumber" : ["100", "143", "153", "154", "156", "164"] }, 
			
			{
			"courseid" : "ANBI",
			"coursenumber" : ["100", "111", "116", "133", "135", "139", "140", "141", "143", "145", "159", "173"] },

			{
			"courseid" : "ANSC",
			"coursenumber" : ["101", "105", "106", "118", "120", "121", "122", "124", "125", "131", "135", "136", "137", "140", "142", "146", "147", "148", "150", "155", "162", "166", "175", "178", "180", "181", "185", "186"]},

			{
			"courseid" : "ANTH" ,
			"coursenumber" :  ["1", "2", "3", "21", "23", "43", "101", "102", "103"], "AWP": ["1", "2B"], "BENG": ["2", "100", "102", "103B", "110", "112A", "112B", "119A", "119B", "120", "122A", "123", "125", "128A", "128B", "130", "133", "134", "135", "140A", "140B", "141", "147A", "147B", "152", "160", "161A", "161B", "162", "166A", "168", "169A", "169B", "172", "181", "182", "183", "186A", "186B", "187D", "189", "193"] },		 
		    {
		    "courseid" : "AWP",
		    "coursenumber" : ["1", "2B"] },
		    {
		    "courseid" : "BENG",
		    "coursenumber" : ["2", "100", "102", "103B", "110", "112A", "112B", "119A", "119B", "120", "122A", "123", "125", "128A", "128B", "130", "133", "134", "135", "140A", "140B", "141", "147A", "147B", "152", "160", "161A", "161B", "162", "166A", "168", "169A", "169B", "172", "181", "182", "183", "186A", "186B", "187D", "189", "193"]},
		    {
			"courseid": "BIBC",
			"coursenumber" : ["100", "102", "103", "120", "140", "194"] }, 
			{
			"courseid": "BICD",
			"coursenumber" : ["100", "101", "110", "112", "123", "130", "136", "140", "145", "194"]},
			{
		    "courseid" : "BIEB",
		    "coursenumber": ["100", "102", "121", "123", "126", "128", "130", "135", "140", "143", "146", "150", "152", "154", "166", "174", "176"]},
		    {
		   	"courseid": "BILD",
		   	"coursenumber" : ["1", "2", "3", "4", "7", "10", "12", "18", "20", "22", "26", "38", "51", "60"]},
		   	{
		   	"courseid" : "BIMM",
		   	"coursenumber" : ["100", "101", "110", "112", "114", "116", "118", "120", "121", "122", "124", "134", "140", "143", "164", "171", "171A", "171B", "181", "185", "194"]},
		   	{
		   	"courseid" : "BIPN",
		   	"coursenumber": ["100", "102", "105", "106", "108", "120", "134", "140", "142", "144", "146", "148", "150", "152", "194"]},
		   	{
		   	 "courseid": "BISP",
		   	 "coursenumber": ["170", "194"] }, 
		   	 {
		   	 "courseid" : "CAT",
		   	 "coursenumber" : ["1", "2", "3", "124", "125", "125R"]},
		   	 {
		   	  "courseid" :"CENG",
		   	  "coursenumber" : ["15", "100", "101A", "101B", "101C", "102", "113", "114", "120", "122", "124A", "124B", "134", "157", "176A", "176B"]}, 
		   	 {
		   	  "courseid" : "CGS",
		   	   "coursenumber" : ["2A", "2B", "100", "101", "103", "105", "106", "107", "111", "112", "114"]},
		   	 {
		   	 	"courseid" : "CHEM",
		   	     "coursenumber" : ["4", "6A", "6AH", "6B", "6BH", "6C", "6CH", "7L", "7LM", "11", "12", "13", "40A", "40B", "40BH", "40C", "40CH", "43A", "96", "100A", "100B", "105A", "108", "109", "111", "113", "114A", "114B", "114C", "114D", "118", "120A", "120B", "125", "126", "127", "130", "131", "132", "140A", "140B", "140BH", "140C", "140CH", "143A", "143AM", "143B", "143C", "151", "152", "154", "157", "164", "167", "168", "171", "172", "173", "174"]},
		   	 {
		   	  "courseid" :"CHIN",
		   	  "coursenumber" : ["10AD", "10AM", "10AN", "10BD", "10BM", "10BN", "10CD", "10CM", "10CN", "20AD", "20AM", "20AN", "20BN", "20CD", "20CN", "100AM"] },
		   	 { 
		   	   "courseid" : "COGS",
		   	   "coursenumber" : ["1", "3", "8", "9", "10", "11", "12", "13", "14A", "14B", "15", "17", "100", "101A", "101B", "101C", "102A", "102B", "102C", "107A", "107B", "107C", "108", "109", "110", "115", "118A", "118B", "118C", "118D", "120", "121", "122", "123", "143", "144", "151", "152", "153", "154", "155", "156", "157", "160", "163", "164", "170", "171", "171GS", "172", "174", "174GS", "175", "176", "177", "178", "179", "181", "185", "187A", "187B", "188", "189"]},
		   	 { 
		   	 	"courseid" : "COMM",
		   	 	"coursenumber" : ["10", "100A", "100B", "100C", "101", "101M", "101N", "101T", "102C", "102D", "102M", "102P", "103D", "103E", "103F", "104E", "104G", "105G", "106A", "106C", "106F", "106G", "106I", "106V", "107", "108D", "108G", "109D", "109N", "109P", "110M", "110P", "110T", "111A", "111C", "111D", "111F", "111G", "111P", "111T", "112C", "113T", "114D", "114E", "114F", "114G", "114I", "114J", "114N", "114P", "114T", "120M", "120N", "120W", "124A", "124B", "126", "127", "131", "132", "133", "134", "135", "136", "137", "140", "143", "144", "145", "146", "151", "152", "153", "155", "158", "159", "160", "162", "163", "166", "168", "170", "171", "173", "176", "179", "181", "190"]},
		   	 { 
		   	 	"courseid" : "CSE",
		   	 	"coursenumber ": ["3", "5A", "7", "8A", "8B", "11", "12", "15L", "20", "21", "30", "100", "101", "103", "105", "107", "110", "112", "118", "120", "123", "124", "125", "127", "130", "131", "132A", "132B", "134B", "135", "136", "140", "140L", "141", "141L", "143", "145", "150", "151", "152", "158", "160", "163", "165", "166", "167", "168", "169", "170", "176A", "180", "181", "185", "190", "191"]},
		   	 { 
		   	   "courseid": "DOC",
		   	   "coursenumber" : ["1", "2", "3", "100D"]},
		   	 { 
		   	   "courseid": "DSC",
		   	   "coursenumber" : ["10", "20", "30"] },
		   	   
		   	  {
			   "courseid" :  "DSGN",
			   "coursenumber" : ["1", "100"] },
			   {
		   	    "courseid" :"ECE",
		   	    "coursenumber" : ["5", "15", "16", "25", "30", "35", "45", "65", "100", "101", "102", "103", "107", "109", "111", "115", "120", "121", "121A", "121B", "123", "125A", "125B", "134", "135A", "136L", "140A", "140B", "143", "145BL", "153", "154A", "154B", "154C", "158A", "158B", "161A", "161B", "161C", "163", "164", "165", "166", "171A", "171B", "172A", "174", "175A", "175B", "180", "182", "183", "187", "188", "191"] },
		   	   {
		   	    "courseid" :"ECON",
		   	    "coursenumber": ["1", "2", "3", "4", "5", "100A", "100B", "100C", "101", "102", "103", "105", "107", "109", "110A", "110B", "111", "113", "116", "120A", "120B", "120C", "125", "130", "131", "132", "135", "136", "138", "139", "140", "142", "143", "144", "145", "146", "147", "150", "151", "152", "159", "162", "164", "165", "167", "171", "172A", "172B", "173A", "173AL", "173B", "174", "176", "178"]},
		   	   {
		   	   "courseid" : "EDS",
		   	   "coursenumber" : ["39", "111", "112", "113", "114", "115", "117", "118", "119", "124AR", "125", "126", "128A", "128B", "129A", "129B", "129C", "130", "131", "136", "137"]}, 
		   	   {
		   	   "courseid" : "ELWR",
		   	   "coursenumber" : ["1", "2B"]}, 
		   	   {
		   	   	"courseid" :"ENG",
		   	   "coursenumber" : ["10", "100B", "100D", "100L"]},
		   	   { 
		   	    "courseid" :"ENVR",
		   	   "coursenumber" : ["30", "102", "110", "120", "140"]},
		   	   {
		   	   	"courseid": "ERC",
		   	   "coursenumber" : ["190GS", "192A"]},
		   	     { "courseid" :"ESYS",
		   	     "coursenumber" : ["10", "101", "102", "103", "190B"]},
		   	     {

		   	     "courseid" : "ETHN",
		   	     "coursenumber" : ["1", "2", "3", "20", "100A", "100B", "100C", "101", "102", "103", "104", "105", "106", "110", "111", "113", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "126", "127", "129", "137", "140", "142", "143", "151", "152", "155", "160", "164", "174", "178", "182", "185", "187", "189"]},
		   	     { "courseid" :"FMPH",
		   	     "coursenumber" : ["40", "101", "102", "110", "120", "130", "191", "196A"]}, 
		   	     { "courseid" :"FPMU",
		   	     "coursenumber" : ["40", "101", "102", "110", "120", "130"]},
		   	      { "courseid" :"GLBH",
		   	      "coursenumber" : ["20", "113", "148", "150A", "150B", "160", "181"]},
		   	      { "courseid" :"HDP",
		   	      "coursenumber" : ["1", "110", "111", "120", "121", "122", "133", "150", "171", "181", "191"]},
		   	       { "courseid" :"HIAF",
		   	       "coursenumber" : ["111", "112", "113"]},
		   	       {"courseid": "HIEA",
		   	       "coursenumber" : ["112", "115", "124", "126", "131", "132", "133", "137", "138", "140", "144", "150", "151", "153"]}, 
		   	       { "courseid" :"HIEU",
		   	       "coursenumber" : ["101", "102", "103", "106", "107", "109", "115", "116A", "116B", "116C", "117GS", "120", "121GS", "122", "123", "127", "128", "137", "139", "140", "141", "142", "143", "144", "145", "146", "148", "150", "153", "154", "154GS", "156", "158"]},
		   	        { "courseid" :"HILA",
		   	        "coursenumber" : ["100", "101", "102", "103", "114", "121A", "121B", "122", "123", "124", "131", "132", "144"]}, 
		   	        { "courseid" :"HILD",
		   	        "coursenumber" : ["2A", "2B", "2C", "7A", "7B", "7C", "10", "11", "12", "14", "30"]}, 
		   	        { "courseid" :"HINE",
		   	        "coursenumber" :["102", "108", "109", "114", "116", "118", "119", "120", "126", "145"]},
		   	         { "courseid" :"HISC",
		   	         "coursenumber" : ["105", "106", "107", "108", "110", "115", "116", "117", "131"]}, 
		   	         { "courseid" :"HITO",
		   	         "coursenumber" : ["114", "133", "136", "155"]},
		   	          { "courseid" :"HIUS",
		   	          "coursenumber" : ["103", "104", "108A", "111", "112", "113", "123", "125", "126", "130", "131", "133", "136", "141", "142A", "144", "145", "146", "148", "150", "151", "156", "157", "158"]},
		   	           { "courseid" :"HUM",
		   	           "coursenumber" : ["1", "2", "3", "3GS", "4", "4GS", "5"]}, 
		   	           { "courseid" :"ICAM",
		   	           "coursenumber" :["110", "120", "160A", "160B"]},
		   	            { "courseid" :"INTL",
		   	            "coursenumber" :["101", "102", "190"]},
		   	            { "courseid" :"JAPN",
		   	            "coursenumber" : ["10A", "10B", "10C", "20A", "20B", "20C", "130A"]},
		   	             { "courseid" :"LATI",
		   	             "coursenumber" :["50"]}, 
		   	             { "courseid" :"LAWS",
		   	             "coursenumber" : ["101"]}, 
		   	             { "courseid" :"LIGN",
		   	             "coursenumber" : ["4", "5", "7", "8", "17", "101", "105", "110", "111", "112", "118", "119", "120", "121", "130", "143", "144", "146", "148", "150", "154", "155", "160", "165", "170", "171", "174", "175", "176", "177", "179", "180", "181"]}, 
		   	             { "courseid" :"LIHL",
		   	             "coursenumber" : ["112F", "112P", "114F", "114P", "114W", "117P", "119", "119P", "119W", "124W", "132F", "132P"]},
		   	              { "courseid" :"LTAM",
		   	              "coursenumber" : ["110"]}, 
		   	              { "courseid" :"LTCH",
		   	              "coursenumber" : ["101"]}, 
		   	              { "courseid" :"LTCS",
		   	              "coursenumber" :["50", "52", "110", "110GS", "111GS", "125", "130", "131", "133", "150", "165", "170"]}, 
		   	              { "courseid" :"LTEA",
		   	              "coursenumber" :["110A", "110B", "110C", "120A", "120B", "120C", "132", "138", "138GS", "140", "141", "142", "143"]}, 
		   	              { "courseid" :"LTEN",
		   	              "coursenumber" : ["21", "22", "23", "25", "26", "27", "28", "29", "107", "110", "112", "113", "124", "127", "140", "148", "149", "154", "159", "172", "174", "175A", "175B", "176", "178", "181", "185", "189"]}, 
		   	              { "courseid" :"LTEU",
		   	              "coursenumber" :["105", "154", "158"]},
		   	              {"courseid" : "LTFR",
		   	              "coursenumber" : ["2A"], "LTGK": ["1", "2", "3"]}, 
		   	              { "courseid" :"LTGM",
		   	              "coursenumber" : ["2A", "2B"]}, 
		   	              { "courseid" :"LTIT",
		   	              "coursenumber" : ["2A", "2B"]}, 
		   	              { "courseid" :"LTKO",
		   	              "coursenumber" : ["2A", "100", "149"]}, 
		   	              { "courseid" :"LTLA",
		   	              "coursenumber" : ["1", "2", "3"]}, 
		   	              { "courseid" :"LTRU",
		   	              "coursenumber" : ["1A", "1B", "1C", "2A"]}, 
		   	              { "courseid" :"LTSP",
		   	              "coursenumber" : ["2B", "2C", "2E", "135B", "136", "138", "140", "142", "171", "176"]}, 
		   	              { "courseid" :"LTTH",
		   	              "coursenumber" : ["115", "150"], "LTWL": ["19A", "19B", "19C", "100", "110B", "114", "116", "120", "124", "135", "157", "172", "172GS", "175GS", "176", "180", "180GS", "181", "183", "184"]}, 
		   	              { "courseid" :"LTWR",
		   	              "coursenumber" :["8A", "8B", "8C", "100", "102", "106", "110", "113", "114", "115", "120", "121", "122", "129", "140", "143", "148"]}, 
		   	              { "courseid" :"MAE",
		   	              "coursenumber" :["2", "3", "5", "8", "11", "20", "21", "101A", "101B", "101C", "104", "105", "107", "108", "110A", "110B", "113", "118", "119", "120", "122", "123", "124", "126A", "126B", "130A", "130B", "130C", "131A", "131B", "133", "140", "142", "143A", "143B", "143C", "144", "145", "150", "154", "155A", "155B", "156A", "156B", "160", "166", "170", "171A", "175A", "180A", "181"]},
		   	               { "courseid" :"MATH",
		   	               "coursenumber" : ["2", "3C", "4C", "10A", "10B", "10C", "11", "15A", "18", "20A", "20B", "20C", "20D", "20E", "20F", "31AH", "31BH", "31CH", "95", "100A", "100B", "100C", "102", "103A", "103B", "104A", "104B", "109", "110A", "111A", "120A", "120B", "121A", "121B", "130A", "140A", "140B", "140C", "142A", "142B", "150A", "152", "153", "154", "155A", "155B", "157", "163", "168A", "170A", "170B", "170C", "171A", "171B", "174", "179", "180A", "180B", "180C", "181A", "181B", "181C", "181E", "183", "184A", "185", "186", "187", "187A", "187B", "189", "190", "193A", "193B", "194"]},
		   	                { "courseid" :"MGT",
		   	                "coursenumber" : ["3", "4", "5", "12", "16", "18", "45", "103", "105", "106", "112", "117", "119", "121A", "121B", "127", "128R", "129", "131A", "131B", "132", "133", "134", "135", "136", "137", "139", "143", "146", "153", "162", "164", "166", "167", "172", "173", "174", "181", "183", "184", "185", "187"]},
		   	                 { "courseid" :"MMW",
		   	                 "coursenumber" : ["11", "12", "13", "14", "14GS", "15", "15GS", "121", "122"]}, 
		   	                 { "courseid" :"MUS",
		   	                 "coursenumber" : ["1A", "1B", "1C", "2A", "2B", "2C", "4", "5", "6", "8", "8GS", "9", "11", "12", "13", "13AF", "13AM", "13AS", "14", "15", "16", "17", "20", "95C", "95E", "95JC", "95K", "95L", "95W", "101A", "101B", "101C", "111", "113", "114", "115", "120A", "120B", "120C", "126", "127", "127A", "127B", "130", "137A", "150", "153", "170", "171", "172", "173", "174A", "174B", "174C", "175"]},
		   	                  { "courseid" :"NANO",
		   	                  "coursenumber" : ["15", "100L", "101", "102", "103", "104", "106", "107", "108", "110", "111", "112", "120A", "120B", "134", "141A", "148", "150", "156", "158", "161", "164"]},

		   	                   { "courseid" :"PHIL",
		   	                   "coursenumber" : ["1", "10", "12", "13", "14", "15", "25", "26", "27", "28", "28GS", "31", "32", "33", "50", "90", "100", "101", "102", "108", "110", "111", "112", "120", "122", "130", "131", "132", "134", "136", "137", "138", "145", "146", "147", "148", "149", "150", "151", "152", "155", "160", "161", "162", "163", "164", "164GS", "165", "166", "167", "168", "169", "170", "173", "175", "181", "185"]},
		   	                    { "courseid" :"PHYS",
		   	                    "coursenumber" : ["1A", "1AL", "1B", "1BL", "1C", "1CL", "2A", "2B", "2BL", "2C", "2CL", "2D", "2DL", "4A", "4B", "4C", "4D", "4E", "5", "7", "9", "10", "11", "13", "100A", "100B", "100C", "105A", "105B", "110A", "110B", "120", "122", "124", "130A", "130B", "130C", "133", "140A", "160", "161", "162", "163", "164"]}, 
		   	                    { "courseid" :"POLI",
		   	                    "coursenumber" : ["5D", "10", "10D", "11", "11D", "12", "12D", "13", "13D", "27", "28", "30", "30D", "100A", "100B", "100C", "100DA", "100E", "100F", "100G", "100H", "100I", "100M", "100O", "102C", "102D", "102L", "103A", "103B", "104A", "104B", "104D", "104E", "104F", "104G", "104I", "104J", "104M", "104N", "104P", "105A", "108", "110A", "110B", "110C", "110H", "111D", "112A", "113A", "113B", "113C", "114B", "117", "119A", "120A", "120B", "120C", "120D", "120E", "120G", "120H", "120I", "120N", "120P", "121", "122", "122D", "123", "124", "125", "125B", "126", "126AA", "126AB", "127", "129", "130B", "131", "132", "133A", "133G", "133J", "134AA", "134D", "136", "136A", "137A", "138D", "140B", "140C", "140D", "142A", "142D", "142I", "142J", "142K", "142L", "142M", "142P", "143A", "144", "144D", "144F", "145A", "145C", "146A", "147B", "150A", "151", "153", "160AA", "163", "164", "165", "170A", "171", "194"]},
		   	                     { "courseid" :"PSYC",
		   	                     "coursenumber" : ["1", "2", "3", "4", "6", "7", "60", "70", "71", "81", "100", "101", "102", "104", "105", "106", "108", "110", "111A", "111B", "114", "115A", "116", "117", "120", "121", "122", "124", "125", "128", "129", "130", "133", "134", "137", "138", "141", "142", "144", "145", "147", "148", "150", "151", "152", "153", "154", "155", "156", "157", "158", "161", "162", "164", "166", "168", "169", "171", "172", "174", "176", "178", "179", "180", "181", "181GS", "182", "188", "190", "191", "193", "193GS", "193L", "194A", "194C"]}, 
		   	                     { "courseid" :"RELI",
		   	                     "coursenumber" : ["1", "2", "101", "149", "150", "188"]}, 
		   	                     { "courseid" :"SE",
		   	                     "coursenumber" : ["1", "2", "3", "9", "101A", "101B", "101C", "102", "103", "104", "104L", "110A", "110B", "115", "120", "121", "121A", "121B", "125", "130A", "130B", "131", "140", "140A", "140B", "142", "143A", "143B", "150", "151A", "151B", "152", "154", "160A", "160B", "163", "171", "180", "181", "182", "184"]},
		   	                      { "courseid" :"SIO",
		   	                      "coursenumber" : ["1", "3", "10", "12", "15", "16", "20", "25", "30", "35", "40", "45", "45GS", "50", "100", "101", "102", "103", "104", "105", "106", "108", "109", "110", "113", "117", "119", "120", "121", "123", "126", "127", "128", "131", "132", "133", "134", "136", "138", "141", "147", "160", "170", "170L", "180", "181", "183", "184", "187", "188", "189", "190"]}, 
		   	                      { "courseid" :"SOCI",
		   	                      "coursenumber" : ["1", "2", "10", "20", "30", "40", "50", "60", "70", "100", "102", "104", "104Q", "107", "109M", "111", "112", "113", "115", "116", "117", "118", "118E", "119", "121", "122", "123", "124", "125", "126", "127", "129", "131", "132", "134", "135", "136E", "136F", "137", "138", "139", "140", "141", "142", "143", "144", "145", "146", "147", "148", "148E", "149", "150", "152", "153", "157", "159", "160", "160E", "162", "163", "165", "165A", "172", "173", "178", "179", "180", "181", "182", "184", "185", "187", "187E", "188D", "188E", "188G", "188I", "188M", "189"]}, 
		   	                      { "courseid" :"TDAC",
		   	                      "coursenumber" : ["1", "101", "102", "103A", "103B", "107", "111", "115", "122"]}, 
		   	                      { "courseid" :"TDDE",
		   	                      "coursenumber" : ["1", "111"]}, 
		   	                      { "courseid" :"TDDM",
		   	                      "coursenumber" : ["1"]}, 
		   	                      { "courseid" :"TDDR",
		   	                      "coursenumber" : ["101", "111"]}, 
		   	                      { "courseid" :"TDGE",
		   	                      "coursenumber" : ["1", "3", "5", "10", "11", "25", "100", "122", "124", "125", "127", "131"]}, 
		   	                      { "courseid" :"TDHT",
		   	                      "coursenumber" : ["21", "22", "23", "101", "102", "103", "104", "105", "107", "109", "114", "120"]},
		   	                       { "courseid" :"TDMV",
		   	                       "coursenumber" : ["1", "2", "3", "11", "20", "110", "120", "123", "130", "138", "140", "142", "143", "144", "146", "148"]}, 
		   	                       { "courseid" :"TDPF",
		   	                     "coursenumber" : ["161"]}, 
		   	                        { "courseid" :"TDPR",
		   	                        "coursenumber" : ["6"]},
		   	                        { "courseid" :"TDPW",
		   	                        "coursenumber" : ["104"]}, 
		   	                       { "courseid" :"TDTR",
		   	                       "coursenumber" : ["10"]}, 
		   	                      
		   	                       { 
		   	                       	"courseid": "TWS" ,
		   	                        "coursenumber": ["21", "21GS", "22", "23", "24", "25", "26"]},
		   	                        {
		   	                        "courseid": "USP" ,
		   	                        "coursenumber": ["1", "2", "3", "5", "15", "100", "120", "124", "131", "133", "137", "141B", "143", "144", "145", "147", "150", "152", "170", "171", "172", "173", "175", "177", "179", "180", "186", "187", "189", "191"] },
		 {
		 	"courseid" :" VIS" ,
		 	"coursenumber": ["1", "2", "3", "10", "11", "20", "21A", "21B", "22", "30", "40", "41", "60", "70N", "80", "84", "100", "102", "105A", "105B", "105D", "106A", "106B", "107A", "111", "120A", "120B", "121AN", "122D", "124BN", "124CN", "124D", "124E", "125A", "125BN", "125C", "125DN", "126AN", "126BN", "126HN", "126I", "126K", "126P", "126Q", "127A", "127B", "127C", "127I", "127N", "127P", "128A", "128C", "135", "140", "141A", "142", "143", "145A", "147A", "151", "152D", "154", "158", "159", "164", "165", "167", "168", "171", "174", "175", "176", "177", "178", "180A", "180B", "181", "182", "183A", "183B", "194S"] },
         
         {
		 "courseid" : "WCWP",
		 "coursenumber" : ["10A", "10B", "100"] }




		]


			

			 
	});
};
