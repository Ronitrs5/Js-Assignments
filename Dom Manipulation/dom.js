function $(id){ return document.getElementById(id); }

//modify HTML paragraph
$('changeTextButton').addEventListener('click', ()=>{
    $('text').innerHTML = 'Modified Text';
})

//add elements to the unordered list
$('appendUl').addEventListener('click', addItemToUl);
let count = 1;
function addItemToUl(){
    let newLi = document.createElement('li');
    $('ul1').appendChild(newLi).innerHTML = count++;
}

//pops elements from the unordered list
$('popUl').addEventListener('click', popLastItemFromUl);
function popLastItemFromUl(){
    let ul = $('ul1');
    if(ul && ul.lastElementChild){
        ul.removeChild(ul.lastElementChild);
        count --;
    }
}

//change color of a div
$('changeColor').addEventListener('click', changeBackgroundColor);
function changeBackgroundColor(){
    $('divColorChange').style.backgroundColor = 'green';
    $('divColorChange').style.padding = '2px';
    $('pColorChange').style.color = 'white';
}


//validate a form
$('validateFormButton').addEventListener('click', validateForm);
function validateForm(){
    let email = $('formEmail').value.trim();
    let password = $('formPassword').value.trim();

    if(!password || !email){
        alert('Fields cannot be empty');
        return;
    }
    validateEmail(email);
}
function validateEmail(str){
    let n = str.length;
    if(str.substring(n - 4) != '.com'){
        alert('Invalid email. Must end with .com only.')
        return;
    }
    alert('Validation successful')
}


//toggle visibilty
$('toggleVisButton').addEventListener('click', toggleVisibility);

function toggleVisibility(){
    let div = $('toggleDiv');
    if($('toggleDiv').checkVisibility()){

        $('toggleDiv').hide()
        
    }
}