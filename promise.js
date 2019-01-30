const fs = require('fs') 

//read("data.txt").then(data => write("data.txt", data.toString()).then(data2 => read("data.txt")));

let dataList = ["data.txt", "data2.txt", "data3.txt"];

function read(url){
return new Promise( (resolve, reject) => {
	fs.readFile(url, (err, data) => { 

    if (err) reject(err); 
	console.log(data.toString())	
	let newData = data + " --- oh alo ha"
	resolve(newData);

 	});
} );
}


function write(url, newData){
return new Promise( (resolve, reject) => {
	fs.writeFile(url, newData, (err) => { 

    if (err) reject(err);   

	resolve("Saved");

 	});
} );
}

const arr = dataList.map(x => read(x));
Promise.all(arr).then(values => {
  write("rs.txt", values.join(' | ')).then(data2 => read("rs.txt"))
});