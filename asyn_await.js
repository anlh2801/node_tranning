const fs = require('fs') 

//read("data.txt").then(data => write("data.txt", data.toString()).then(data2 => read("data.txt")));

let dataList = ["data.txt", "data2.txt", "data3.txt"];
let check = [];
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

async function writeArr() {	
	for (let i = 0; i < dataList.length; i++) {
		let data = await read(dataList[i]);
		check.push(data.toString());
	}
	await write("result.txt", check.join(' | '));
	read("result.txt");
}

writeArr();
   
 
   
   