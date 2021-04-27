// 'use strict';

var promise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		reject();
	}, 10000)
});

promise.then(()=>{
	console.log("resolve method called");
}).catch(()=>{
	console.log("reject method called");
});


var getUserDetailsPromise = new Promise((resolve,reject)=>{
	// send api request
	setTimeout(()=>{
		resolve("test");
	},10000)
})


function onbuttonClick(){
	getUserDetailsPromise.then((data)=>{
		console.log(data);
	});
}


//  Calling external api from javascript


var httpPromise = new Promise(function(resolve,reject){
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var response = this.responseText;
			resolve(response);
		}
	};
	xmlhttp.open("GET", "https://hub.dummyapis.com/delay?seconds=5", true);
	xmlhttp.send();

});

httpPromise.then((response1)=>{
	console.log(response1);
})

console.log("last line");


// ===============================================
// 				Hoisting
// ===============================================

let x = 4;
x = 5; // Assign 5 to x
console.log(x); // Display x in the element


