// Q1
function add(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        if(typeof(arguments[i]) != 'number'){
            console.log('NaN');
            return;
        }
        sum += arguments[i];

    }
    console.log(sum);
}
// add(1,2,5,1);

// Q2
function overloading(){
    if(arguments.length == 2){
        if(typeof(arguments[0]) == 'string' && typeof(arguments[1]) == 'string'){
            console.log(`Both args are string`);
        }else if(typeof(arguments[0]) == 'number' && typeof(arguments[1]) == 'number'){
            console.log(`Both args are numbers`);
        }else if(typeof(arguments[0]) == 'number' && typeof(arguments[1]) == 'string'){
            console.log(`One is string and other is number`);
        }
    }else if(arguments.length == 3){
        console.log(`All three are numbers`);
    }
}

// overloading('a',1)