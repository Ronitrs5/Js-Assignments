// Q1-----------------------------------------------------------------------------------
// function wait(duration) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve(`Operation completed after ${duration} milliseconds`);
//             reject(`Operation failed after ${duration} milliseconds`);

//         }, duration);
//     });
// }
// wait(1000)
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     });



// Q2-----------------------------------------------------------------------------------
function task1(){
    return new Promise((res, rej) =>{
        setTimeout(()=>{
            res(`Task 1 resolved.`)
        }, 1000);
    });
}

function task2(){
    return new Promise((res, rej) =>{
        setTimeout(()=>{
            res(`Task 2 resolved.`)
        }, 1000);
    });
}

function task3(){
    return new Promise((res, rej) =>{
        setTimeout(()=>{
            res(`Task 3 resolved.`)
        }, 1000);
    });
}

task1()
    .then((result1) => {
        console.log(result1);
        return task2();
    })
    .then((result2) => {
        console.log(result2);
        return task3();
    })
    .then((result3) => {
        console.log(result3);
    })
    .catch((e) => {
        console.log(e);
    });
