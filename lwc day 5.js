let object1 = 
{
firstName : 'Numan',
lastname : 'Ahmad',
Age : 47,
Attributes : ['eyes','nose','ear','etc']
};
object1.dateOFBirth = '1029';
object1['dateOFDeath']= '1100';
let lived = 'Lived';
object1[lived]=1100-1029;
console.log(object1);

let string_Conversion =JSON.stringify(object1);

console.log(string_Conversion);

let object_Conversion =JSON.parse(string_Conversion);

console.log(object_Conversion);

// Spread Operator
    // 1 - Array Concatination
let a = [1,2,3];
let b = [4,5,6];
let c =[...a, ...b];
console.log(c);
    //2 - Expanding Strings
let str = 'Numan Ahmad';
console.log(...str);
    //3 - Adding Element in array
let d = [...a, 10,11,...b, 17,19, ...c];
console.log(d);
    //4 - Adding Objects
let obj1 = {fName : 'Numann',
            lName : 'Ahmadd'
        }
let obj2 = {
            City : 'Nanana',
            Country : 'Pak'
        }
let obj3 = {...obj1,...obj2};
console.log(obj3);
    //Coping an Array Or Object

let e = ['Numan','Ali'];
let f = e;
f.push('Raza');
console.log(e);
console.log(f);

// This same result in js is known as deep Copy. Changing Array f is affecting array e.So, to solve this we have spread oprator

let g = ['Numan','Ali'];
let h = [...g]; // this shallow copy of an array
h.push('Raza');
console.log(g);
console.log(h);

// Same concept Goes with Objects with a minor change of brakkets

let i = {aa : 1 ,bb : 2};
let j = i;
j.cc = 3;
console.log(i);
console.log(j);

// This same result in js is known as deep Copy. Changing Array f is affecting array e.So, to solve this we have spread oprator

let k = {aa : 1 ,bb : 2};
let l = {...k};
l.cc = 3;
console.log(k);
console.log(l);
