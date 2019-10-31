const fs = require('fs');
const parseXlsx = require('excel').default;

const readfile = process.argv[2] ? process.argv[2] + '.xlsx' : 'sample.xlsx';
const key = process.argv[3] || 0;

//checks if file exists, if so it inits
fs.stat(readfile, (err, stat) => {
    if(err == null) {
        init(readfile, key);
    } else if(err.code == 'ENOENT') {
    	console.log('That file does not exist /\nEnter an existing file name or name your file sample.xlsx');
    } else {
      console.log('An Error Occured: ', err.code);
    }
});

// turns the array into an object
const createRowObject = (row, keys) => {
  return row.reduce((acc, cell, cellIndex) => {
    acc[keys[cellIndex]] = cell;
    return acc;
  }, {});
}

// creates the spreadsheet object
const createSpreadsheetObject = (data, keys, key = 0) => {
  return data.reduce((acc, row) => {
    const rowData = createRowObject(row, keys);
    const keyName = row[key];
    acc[keyName] = rowData;
    return acc;
  }, {});
}

// gets data from the spreadsheet
// transforms it into an object
// triggers save
const init = function(filename, key) {
  parseXlsx(filename).then((data) => {
    const keys = data[0];
    data.shift(); // remove first elem from data
    const obj = createSpreadsheetObject(data, keys, key);
	  return writeData(obj);
  });
}

// writes the object to a json file
const writeData = data => {
	fs.writeFile("sample.json", JSON.stringify(data), err => {
	    if(err) {
	        return console.log(err);
	    }
	    console.log("The file was saved!");
	});
}
