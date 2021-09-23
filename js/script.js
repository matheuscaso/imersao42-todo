const inputBox = document.querySelector(".inputfield input");
const btnAdd = document.querySelector(".inputfield button");
const todoList = document.querySelector(".todolist");

inputBox.onkeyup = () => {
    let dataUser = inputBox.value;
    if(dataUser.trim() !=0){
        btnAdd.classList.add("active");
    }else{
        btnAdd.classList.remove("active");
    }
}
showTasks();

btnAdd.onclick = () =>{
    let dataUser = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
        if(getLocalStorage == null){
            Arraylist = [];
        }else{
            Arraylist = JSON.parse(getLocalStorage);
        }
    Arraylist.push(dataUser);
    localStorage.setItem("New Todo" , JSON.stringify(Arraylist));
    showTasks();
}

// Adicionar uma Tarefa no ToDo List Imersão 42
function showTasks(){

    let getLocalStorage = localStorage.getItem("New Todo");
        if(getLocalStorage == null){
            Arraylist = [];
    }   else{
            Arraylist = JSON.parse(getLocalStorage);
    }
    
    const qtdNumbers = document.querySelector(".qtdNumb");
    qtdNumbers.textContent = Arraylist.length;

    let newTask = '';
    Arraylist.forEach((element, index) => {
        newTask += `<li>${element} <button onclick="deleteTask(${index})"; >-</button></li>`;
        
    });

    todoList.innerHTML = newTask;
    inputBox.value = "";
}

// Deletar uma Tarefa no ToDo List Imersão 42 

function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo");
    Arraylist = JSON.parse(getLocalStorage);
    Arraylist.splice(index, 1);
    localStorage.setItem("New Todo" , JSON.stringify(Arraylist));
    showTasks();

}