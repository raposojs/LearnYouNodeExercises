var fs = require('fs')

var count = 0;

var filecheck = fs.readFile(process.argv[2], function(err, data){
	if (err){
		throw err
	} else {
		var info = (data.toString().split(" "))

		for(var i = 0; i < info.length; i++){
			if(info[i].indexOf("\n") >= 0){
				count++
			}
		}

		console.log(count)
	}
})





console.log(filecheck)
