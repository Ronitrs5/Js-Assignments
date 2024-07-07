function $(id){
    return document.getElementById(id);
}

$('addTodoButton').addEventListener('click', addToList);
let count = 1;
function addToList(){
    let li = document.createElement('li');
    
    let inputList = $('todokInput').value.trim();
    if(!inputList){
        alert('Task cannot be empty');
        return;
    }

    let remBtn = document.createElement('button');
    remBtn.textContent = 'Completed';
    remBtn.style.backgroundColor = 'green';
    remBtn.style.border = 'transparent';
    remBtn.style.padding = '10px';
    remBtn.style.color = 'white';
    remBtn.style.cursor = 'pointer';
    remBtn.style.borderRadius = '4px'
    remBtn.addEventListener('click', function(){
        li.remove();
        count--;
        $('counterP').innerHTML = `${count} items`;

    })
    li.appendChild(document.createTextNode(inputList))
    li.appendChild(remBtn);
    

    $('todoList').appendChild(li)   ;
    count ++;
    $('todokInput').value = '';
}