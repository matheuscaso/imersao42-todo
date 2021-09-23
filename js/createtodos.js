

//let arrayList = JSON.parse(localStorage.getItem('tarefa'));


function btnAdd () {

    let array = JSON.parse(localStorage.getItem('tarefa'));

    let tarefa = document.getElementById('tarefa').value;
    let tag = document.getElementById('tag').value;
    var dateFinal = document.getElementById('dataFinal').value;

    var dateCreate = new Date();
    
    console.log(dateCreate);
    
    let dataInicial = dateCreate.getDate()+ "/" + (dateCreate.getMonth()+1) + "/" + dateCreate.getFullYear();
    
    const object = { tarefa, dataInicial, dateFinal,tag,status: "incompleto" }
    
    array.push(object)
    localStorage.setItem('tarefa', JSON.stringify(array))

    alert('Tarefa Adicionada com Sucesso!');
    

}







