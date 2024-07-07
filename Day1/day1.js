//reverse string
function reverseString(str){
    let reversed= '';
    let j = str.length - 1;

    while(j >= 0){
        reversed+= str[j];
        j--;
    }
    console.log(reversed);

    // return str.split('').reverse().join('');
}
reverseString('hello how are you');


//largest number
function largestNumber(arr){
    let largest = -Infinity;
    for(let i in arr){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    console.log(largest);
}
largestNumber([2,4,3,1]);


//palindrome or not
function checkPalindrome(str){
    let i = 0;
    let j = str.length - 1;

    while(i < j){
        if(str[i] != str[j]){
            console.log(`${str} is not palindrome`);
            return;
        }
        i++;
        j--;
    }
    console.log(`${str} is palindrome`);
}
checkPalindrome('malayalam')


//filter array based on conditions
function filterArray(arr){
    let ansArr = [];

    for(let i in arr){
        if(arr[i].age >= 18){
            ansArr.push(arr[i]);
        }
    }
    console.log(ansArr);
}
filterArray( [
    {name: 'Ronit', age: 22},
    {name: 'Harsh', age: 17},
    {name: 'Kevin', age: 18},
    {name: 'Jason', age: 12},
    {name: 'Mathew', age: 15},
    {name: 'Elson', age: 30},
    {name: 'Steve', age: 29},
]);


//sum of all elements
function sum(arr){
    let sum = 0;
    for (const i of arr) {
        sum+=i;
    }
    console.log(sum);
}
sum([1,2,3,4,4,1]);


//remove duplicates
function removeDuplicates(arr){
    let ansArr = [];

    for (const i in arr) {
        if(!ansArr.includes(arr[i])){
            ansArr.push(arr[i]);
        }
    }
    console.log(ansArr);
}
removeDuplicates([1,2,3,4,4,1,5,4,1]);


//intersection of 2 arrays
function intersectionOfTwoArrays(a1, a2){
    return a1.filter((val) =>{
        return a2.includes(val);
    });
}
let ans = intersectionOfTwoArrays([1,2,3,4], [3,4,5,6,7,78,2])
console.log(ans);