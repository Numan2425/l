// fetching data from user api using promise
/*
function fetchingApiPractice(){
    fetch('https://reqres.in/api/users')
    .then((response)=>response.json())
    .then((data)=> console.log(data));

}
fetchingApiPractice();
*/

// fetching data from user api using async await
/*
async function fetchingApiPractive1(){
let response = await fetch('https://reqres.in/api/users');
let data = await response.json();
console.log(data);
}
fetchingApiPractive1();
*/

// Random cat api call without header
/*
async function ramdomCat(){
let response = await fetch('https://api.thecatapi.com/v1/images/search');
let data = await response.json();
console.log(data);
let url = data[0].url;
let element = document.querySelector(".catclass");
element.src = url;
}
ramdomCat();
*/


// Coin Api call with header
/*
async function coinApi()
{
    let response = await fetch('https://rest.coinapi.io/v1/exchangerate/BTC/USD',
    {method:"GET",
    headers: {
        'X-CoinAPI-Key': 'FC4A499C-1BFB-4E22-9457-B26E5251A79B'
    }
    }
    );
    
    let data = await response.json();
    console.log(data);

}
coinApi();


*/

// Below code is for debugging purpose

function arrSumCalculator(arr)
{
    debugger;
   let sum = 0;
    for(let i = 0; i< arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum;
}



const arr = [1,2,3,4,5,6];
const arraysum = arrSumCalculator(arr);
console.log(arraysum);