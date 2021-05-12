var todoInput = document.getElementById('todoInput');
var todoItems = document.getElementById("todo-items");
var todoInputValue;

var todoLists = [
    {
        id: 1,
        text: "first todo item",
        status: false
    },
    {
        id: 3,
        text: "third todo item",
        status: false
    },
    {
        id: 2,
        text: "second todo item",
        status: false
    },
    
]



function addTodoBtn(){
    todoInputValue = todoInput.value;

    todoLists.push({
        id: getId(),
        text: todoInputValue,
        status:false
    })

    appendTodoListToTodoItems();

}




function appendTodoListToTodoItems() {

    if(todoItems){
        todoItems = document.getElementById("todo-items");
    }

    todoItems.innerHTML = "";


    todoLists.forEach((val,i,arr)=>{
        var newItem = `
                <div class="todo-item">
                    
                `;

        if(val.status){
            newItem += `
                <input checked onchange="onCheckboxChange(${val.id})" type="checkbox" name="todo-item-cb" id="1" />
                    <span> ${val.id} : </span>
                    <span class="todo-text checked"> ${val.text} </span>`
        }else {
            newItem += `
                <input onchange="onCheckboxChange(${val.id})" type="checkbox" name="todo-item-cb" id="1" />
                    <span> ${val.id} : </span>
                    <span class="todo-text"> ${val.text} </span>`
        }
        


        newItem += `</div>`;


        todoItems.innerHTML += newItem;
        
    });

}

function getId(){

    var max = 0;

    todoLists.forEach((val)=>{

        if (val.id > max){
            max = val.id;
        }

    })


    return max + 1;
}

appendTodoListToTodoItems();


function onCheckboxChange(id){
    
    for(var i=0; i<todoLists.length ; i++ ){
        
        var item = todoLists[i];
        
        if(item.id === id){
            todoLists[i].status = !todoLists[i].status
        }

    }
    
    appendTodoListToTodoItems();
    
}