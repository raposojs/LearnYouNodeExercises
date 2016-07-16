var fs = require('fs')

var filecheck = fs.readFileSync(process.argv[2]).toString().split(" ")

var count = 0;

for(var i = 0; i < filecheck.length; i++){
	if(filecheck[i].indexOf("\n") >= 0){
		count++
	}
}



console.log(count)
