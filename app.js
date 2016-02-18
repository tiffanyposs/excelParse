var fs = require('fs');
var parseXlsx = require('excel');

var readfile = process.argv[2] ? process.argv[2] + '.xlsx' : 'sample.xlsx';
var deleteRow = process.argv[3] ? process.argv[3] : 0;
var deleteColumn = process.argv[4] ? process.argv[4] : 0;

//checks if file exists
fs.stat(readfile, function(err, stat) {
    if(err == null) {
        getData(readfile);        
    } else if(err.code == 'ENOENT') {
    	console.log('That file does not exist /\nEnter an existing file name or name your file sample.xlsx');
    } else {
        console.log('An Error Occured: ', err.code);
    }
});

//gets data from the spreadsheet
var getData = function(filename){
	parseXlsx(filename, function(err, data) {
	  if(err) throw err
	  makeArray(data, deleteRow, deleteColumn)
	  return data
	});
}

//row to remove (optional)
//column to remove (optional)
var makeArray = function(data, row, column){
	var row = row || 0;
	var column = column || 0;
	var newData = data;
	if(!!row && !!newData[row]){
		newData = newData.splice(row);
	}
	if(!newData[row]){
		console.log("that row doesn't exist");
	}
	if(!!column && !!newData[0][column]){
		newData.forEach(function(each, index){
			var removed = each.splice(column);
			newData[index] = removed;
		});
	}
	if(!newData[0][column]){
		console.log("that column doesn't exist");
	}
	writeData(newData)
	return newData
}


var writeData = function(data){
	fs.writeFile("sample.json", JSON.stringify(data), function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    console.log("The file was saved!");
	}); 
}


