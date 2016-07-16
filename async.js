var fs = require('fs')
var data;


function counter(cb){
	fs.readFile(process.argv[2], function doneReading(error, fileConts){
		data = fileConts;
		cb()
	})
}

function logMyInfo(){
	var count = 0;

	data = (data.toString().split(" "))

			for(var i = 0; i < data.length; i++){
				if(data[i].indexOf("\n") >= 0){
					count++
				}
			}
			console.log(count)
}

counter(logMyInfo)
