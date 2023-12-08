console.log('Day 6');
let names = ['Numan','Ali','Ahmad','Adeel','Asad'];

for(let i=0; i<names.length; i++)
{
    let template1 = `${i+1}. ${names[i]}`;
    console.log(template1);
}

let j=0;
while(j < names.length)
{
    let template1 = `${j+1}. ${names[j]}`;
    j++;
    console.log(template1);
}

do
{
console.log('Do While loop runs the code at least one time even the condition is false');
}while(1==2);

// For off loop
console.log('For Of Loop')
for(let currentItem1 of names)
{
    console.log(currentItem1);
}

console.log('For Of Loops With entries and deStructuring');

for(let [index,item] of names.entries())
{
    console.log(`${index+1}. ${item}`);
}

// for of loop in objects
let myInfo = {
    myName : 'Numan Ahmad',
    Age : 26
};
for(let values of Object.values(myInfo)){
    console.log(values);
}

for(let keys of Object.keys(myInfo)){
    console.log(keys);
    //with the help of key we can drive values
    console.log(myInfo[keys]);
}

for(let[key,value] of Object.entries(myInfo)){
    console.log(key,value);
}
console.log('---------');
let arr= ['numan','ali'];
for(let key in arr){
    console.log(key, arr[key]);
}

for(let key in myInfo){
    console.log(key, myInfo[key]);
}
console.log('-------');

let timeTable = {
    mon : {start :'10am', end : '9pm'},
    tue : {start :'11am', end : '10pm'},
    wed : {start :'12am', end : '11pm'}
}
for(let keysOfTimetable in timeTable){
    console.log(keysOfTimetable);
    console.log(timeTable[keysOfTimetable]);
    let{start,end} = timeTable[keysOfTimetable];
    console.log(`ON ${keysOfTimetable} my office start at ${start} and ends at${end}`);
}
console.log('Using For Of Loop');
for(let[Day, time] of Object.entries(timeTable))
{
    console.log(Day);
    console.log(time); // now although time is value but it is hold an obj
    
    let {start,end}=time;
    console.log(`ON ${Day} my office start at ${start} and ends at${end}`);
}
console.log('Experienced Solution');
for(let[Day, {start,end}] of Object.entries(timeTable))
{
    console.log(`ON ${Day} my office start at ${start} and ends at${end}`);

}

//MAps In JS

let map1 = new Map([
    ['name', 'numan'],
    ['city', 'nankana'],
    ['country', 'pakistan']
    ]);

for(let [keym,valuem] of map1){
    console.log(keym);
    console.log(valuem);
}
for(let keyy of map1.keys()){
    console.log(keyy);
}
for(let keyyy of map1.values()){
    console.log(keyyy);
}

let ArrT= ['numan', 'Ali', 'Asad','Adeel'];
let Arrtt=ArrT.slice(1,4);
console.log(ArrT);
console.log(Arrtt);




























































