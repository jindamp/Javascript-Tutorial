//  self Executing function
(
    function() {
        console.log("self executing function");
    }
)();



var str = "Hi! i am pavan";

(
    function(val) {
        console.log(val);
    }
)(str);



// ==============================================

// document.getElementById("two").style.display = "none";
// $("#two").hide();

// var arr = document.getElementsByClassName("one");
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     element.style.display = "none";    
// }

// $(".one").hide();

$(".one button").click((e)=>{
    // console.log(e.target.getAttribute("jp"));
    console.log($(e.target).attr('jp'));
});


$.get("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1", function(data, status){

        if(status==="success"){
            console.log(data);
        }
    
  });