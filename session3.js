function fun1(x){
    x();
}

const fun2 = function(){
    console.log("fun 2");
}

const fun3 = function(){
    console.log("fun 3");
}


fun1(fun2);
fun1(fun3);
fun1(function(){
    console.log("internal function");
})



function test1(x){
    x(10,20);
}

const test2 = function(x,y){
    console.log(x + " : "+ y);
}

const test3 = function(x){
    console.log("output: " + x);
}


test1(test2);
test1(test3);



 
// =================================
//              For Each Loop
// =================================


var arr = [1,2,3,4,5,6];

// var loop1 = function(value){
//     console.log("value: "+value);
// }

arr.forEach(function(value){
    console.log("value: "+value);
});

var loop2 = (val, index, arr) => {
    console.log("loop2 : "+val);
}
arr.forEach(loop2);


arr.forEach((val,index,arr)=>{
    console.log(val);
})


// =================================
//              OnClick Events
// =================================

function handleClick(){
    console.log("button clicked");
}