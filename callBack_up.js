const fs = require('fs') 

let dataList = ["data.txt", "data2.txt", "data3.txt"];

let check = [];

dataList.forEach(function(element) {
  read(element, (data)=>{
	//write("result.txt" ,data, () => { read("result.txt", ()=>{})})
	
	check.push(data.toString());
	if(check.length === dataList.length){
		write("result.txt", check.join(' , '), () => { read("result.txt", ()=>{})});
	}
})
});

// read.js

function read(url,callback){

	fs.readFile(url, (err, data) => { 

    if (err) throw err; 	

    console.log("Read of: " + data.toString());

	//newData = data + " --- oh my Idol";
	
	callback(data)

 	});

}

// writefile.js

function write (url, newData, callback){

	fs.writeFile(url, newData, (err) => {  

    if (err) throw err;

    console.log("Data saved!");

	callback();

	});

}


