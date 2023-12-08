console.log('Day 10');

//1 Capitalizing First Letters of a String
function FirstLetterCapital (inputStr ){
let res =inputStr.split(" ");
let res1 = res.map((currentItem) => currentItem[0].toUpperCase()+currentItem.slice(1)); 
//currentItem[0].toUpperCase() This Will capitilize all first items 
//currentItem.slice(1) will concatinate remaning characters of each item
console.log(res1);

// performing above operation like waooo
let resOfChaining = inputStr.split(" ")
.map((currItem) => currItem[0].toUpperCase()+currItem.slice(1))
.join(" ");
console.log(resOfChaining);

}
FirstLetterCapital('i am numan ahmad');

//2 Reversing a string
 const reverseFunc = (inputString) => 
 {
    let reverse = inputString.split("");
    reverse=reverse.reverse().join(" ");
    console.log(reverse);


   let reversestr = inputString.split("").reverse().join(" ");
   console.log(reversestr);
 }
 reverseFunc('Numan Ahmad');

 //3 Counting characters in a string

const CharCount = (stringToCount) => 
{
let stringArr = stringToCount.split("");
console.log(stringArr);
let output = {};
for(let currentItem1 of stringArr)
{
    if(output.hasOwnProperty(currentItem1))
    {
        output[currentItem1]=output[currentItem1] + 1;
    }else
    {
        output[currentItem1]=1;
    }
    
}
console.log(output);
}
CharCount('Numan Ahmad Ali Raza');

// Creating User name based On First Character
// e.g Ali Raza Nadeem = ARN 

const userName = (InputStrr)=>
{
let userNameStr = InputStrr.toUpperCase().split(" ").map((curItm)=> curItm[0]).join("") ;
console.log(userNameStr);
};
userName('ali raza nadeem');

//////Events in JS////////////////
// DOM Manupulation

function clickme()
{
    alert("Helppppppppp!!!!!!!!!!");
}

function mouseover()
{
    console.log('mouse over');
    let element = document.querySelector(".element");
    element.style.display = "none";
}
function mouseout()
{
    let element = document.querySelector(".element");

    element.style.display = "";
    console.log('mouse out');

}


function change(input)
{
    console.log(input.target.value);
    console.log(input.target.name);
    console.log(input.target.type);
}

















