const fs = require('fs') 



read("data.txt", (data)=>{
	write(data, () => { read("data.txt", ()=>{})})
})



// read.js

function read(url,callback){

	fs.readFile(url, (err, data) => { 

    if (err) throw err; 	

    console.log("Old: " + data.toString());

	newData = data + " --- oh my Idol";

	callback(newData)

 	});

}



// writefile.js

function write (newData, callback){

	fs.writeFile("data.txt", newData, (err) => {  

    if (err) throw err;

    console.log('Data saved!');

	callback()

	});

}
