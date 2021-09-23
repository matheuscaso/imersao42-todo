
let array = JSON.parse(localStorage.getItem('tarefa'));
console.log(array);

console.log(array[0].tarefa);

//let array = JSON.parse(localStorage.getItem('tarefa'));
  //  console.log(array);

    for (let i = 0; i < array.length; i++) {
    var data = new Date(array[i].creatAt);
    var strData = data.getDate()+ "/" + (data.getMonth()+1) + "/" + data.getFullYear() 
    $('#tabelaTarefas > tbody').append(
       '<tr><td>' + array[i].tarefa + '</td>' +
       '<td>' + array[i].dataInicial + '</td>' +
       '<td>' + array[i].dateFinal + '</td>' +
       '<td>' + array[i].tag + '</td>' +
       '<td>' + array[i].status + '</td>' 
       
       )
    
    
    }



function listarTarefas(){

    let array = JSON.parse(localStorage.getItem('tarefa'));
    console.log(array);

    for (let i = 0; i < array.length; i++) {
    var data = new Date(array[i].creatAt);
    var strData = data.getDate()+ "/" + (data.getMonth()+1) + "/" + data.getFullYear() 
    $('#tabelaTarefas > tbody').append(
       '<tr><td>' + array[i].tarefa + '</td>' +
       '<td>' + array[i].dataInicial + '</td>' +
       '<td>' + array[i].dateFinal + '</td>' +
       '<td>' + array[i].tag + '</td>' +
       '<td>' + array[i].status + '</td>' )
    
    
    }
    

}