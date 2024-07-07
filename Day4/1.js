function $(id){
    return document.getElementById(id);
}

$('getbtn').addEventListener('click', getData);
$('postbtn').addEventListener('click', postData);
$('getall').addEventListener('click', getAllData);
$('deleteBtn').addEventListener('click', deleteData);

function getData(){
    let uid = $('input').value.trim();

    if(uid === ''){
        alert('Enter a valid number');
        return;
    }

    let http = new XMLHttpRequest();
    const URL = `https://jsonplaceholder.typicode.com/posts/${uid}`;


    http.onreadystatechange = () => {
        if (http.readyState == 4) {
            try {
                if (http.status == 200) {
                    let res = JSON.parse(http.responseText);
                    $('uid').innerText = `USER ID: ${res.userId}`;
                    $('title').innerText = `TITLE: ${res.title}`;
                    $('body').innerText = `BODY: ${res.body}`;
                    console.log(http.responseText);
                } else if (http.status == 404) {
                    alert(`User ID ${uid} not found`);
                } else {
                    alert(`Error: ${http.status} - ${http.statusText}`);
                }
            } catch (e) {
                console.error('An error occurred:', e);
                alert(`An error occurred: ${e}`);
            }
        }
    };
    
    http.open('GET', URL, true);

    http.send();
}

function postData(){
    let title = $('ptitle').value.trim();
    let body = $('pbody').value.trim();
    let uid = $('puid').value.trim();

    if(!title || !body || !uid){
        alert('All fields are mandatory');
        return;
    }

    let URL = 'https://jsonplaceholder.typicode.com/posts';
    let http = new XMLHttpRequest();

    http.onreadystatechange = ()=>{
        if(http.readyState == 4){
            try{
                if(http.status <= 299 && http.status >= 200){
                    console.log(http.responseText);
                }else{
                    console.log('Something went wrong');
                    console.log(http.responseText)
                    console.log(http.status)
                }
            }catch(e){
                console.log(e);
            }
        }
    }
    http.open('POST', URL, true);
    http.setRequestHeader('Content-Type','application/json;charset=UTF-8');
    http.send(JSON.stringify({
        userId: uid,
        title: title,
        body: body
    }));

}

function getAllData(){
    const URL = 'https://jsonplaceholder.typicode.com/posts'

    let http = new XMLHttpRequest();

    http.open('GET', URL, true);

    http.onreadystatechange = ()=>{
        if(http.readyState == 4){
            try{
                if(http.status >= 200 && http.status <=299){
                    // let ;
                    
                    let response = http.responseText;
                    let titles = JSON.parse(response);

                    for(let i in titles){
                        let li1 = document.createElement('li');
                        let li2 = document.createElement('li');
                        let li3 = document.createElement('li');
                        li1.textContent = `Title: ${titles[i].title}`;
                        li2.textContent = `UserId: ${titles[i].id}`;
                        li3.textContent = `Body: ${titles[i].body}`;
                        let ul = $('subList').appendChild(li1);
                        ul.appendChild(li2);
                        ul.appendChild(li3);

                        $('itemList').appendChild(ul);

                    }

                    console.log(http.responseText);
                }else{
                    console('Else block')
                }
            }catch(e){
                console.log('Error: '+e);
            }
        }
    }
    http.send();
}

function deleteData(){
    
    let input = $('deleteInput').value.trim();

    if(input === ''){
        alert('Enter a valid number');
        return;
    }

    const URL = `https://jsonplaceholder.typicode.com/posts/${input}`;

    let http = new XMLHttpRequest();

    http.onreadystatechange = ()=>{
        if(http.readyState == 4){
            try{
                if(http.status <= 299 && http.status >= 200){
                    console.log(`Object with ${input} deleted!`);
                    console.log(http.responseText);
                }else{
                    console.log(`Something went wrong`);
                }
            }catch(e){
                console.log(`Error: ${e}`);
            }
        }
    }
    
    http.open('DELETE', URL, true);
    http.send();

}