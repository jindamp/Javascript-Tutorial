function render(id,filePath,data) {
    
    $.get(filePath,(fileContent)=>{
    
        var readHTMLFile = fileContent;
         
        var keyArr = Object.keys(data);        
        
        keyArr.forEach((val)=>{
            readHTMLFile =  readHTMLFile.replace("${"+val+"}", data[val]);
        })

        $(id).html(readHTMLFile);
    });

}

var json = {
    name: "Pavan Jindam",
    mobile: "8121525304"
}

render('#content',"./text.html",json);