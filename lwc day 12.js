// call back hell = call out inside another call out
/*
setTimeout(()=>{
    console.log("hello a");

    setTimeout(()=>{
        console.log("hello b");
    },5000);

},5000)
*/


/* Creating a promise and handling it using .then and .catch method
// How to create a promise

function firstfunc(message)
{
    return new Promise((resolve,reject)=>{
        if(!message){
            reject("Message is Empty");
        }else{
            setTimeout(()=>{
                console.log(message);
                resolve();
            },5000)
        }
    })

}

// How to handle a promise

firstfunc("print some thing after 5 seconds").then(()=>{
    console.log("Promise 1 is successfully Resolved");
})

firstfunc("print some thing after 5 seconds").then(()=>{
    console.log("Promise 2 is successfully Resolved");
})

firstfunc().then(()=>{
   console.log("successfully Resolved")
}).catch((rejectMsgPlaceHolder)=>{   //rejectMsgPlaceHolder this place after catch is reserved for error genrated by reject()
    console.log("Rejected",rejectMsgPlaceHolder);
})
*/


//Creating a promise and handling it using async await
/*
function generatefunc(msg){
    return new Promise((resolve,reject)=>{
        if(!msg){
            reject("No Msg");
        }else{
            setTimeout(()=>{
            console.log(msg);
            resolve();
            },2000)
            
        }
    })
}

async function generatediffpromises(){
   try{
    generatefunc("First promise successfull");
    generatefunc("Seconf promise successfull");
    generatefunc();
   }catch(error){
    console.log(error);
   }
}
generatediffpromises();
*/



// Promise.all practice below
/*
function successfull(value,delay){
    return new Promise((resolve)=>setTimeout(()=>{
        resolve(value)
    },delay));
}

function unsuccessfull(value,delay){
    return new Promise((resolve,reject)=>setTimeout(()=>{
        reject(value)
    },delay));
}

async function funcToInvokePromises(){
    
   let promise1 = successfull("Call Successfull",4000);
   let promise2 = successfull("Call Successfull 1",4000);
   let promise3 = unsuccessfull("Loading Failed",5000);

   const allPromises =Promise.all([promise1,promise2,promise3]);

   try{
    const result = await allPromises;
    console.log(result);
   }catch(error){
    console.log(error);
   }
}
funcToInvokePromises();
*/

// Promise.any practice below = code is same as promise.all with then minor change or promis.any and whole functionality changes
/*
function successfull(value,delay){
    return new Promise((resolve)=>setTimeout(()=>{
        resolve(value)
    },delay));
}

function unsuccessfull(value,delay){
    return new Promise((resolve,reject)=>setTimeout(()=>{
        reject(value)
    },delay));
}

async function funcToInvokePromises(){
    
   let promise1 = successfull("Call Successfull",4000);
   let promise2 = successfull("Call Successfull 1",4000);
   let promise3 = unsuccessfull("Loading Failed",5000);

   const allPromises =Promise.any([promise1,promise2,promise3]);

   try{
    const result = await allPromises;
    console.log(result);
   }catch(error){
    console.log(error);
   }
}
funcToInvokePromises();

*/

// Promise.race practice below = code is same as promise.all with then minor change or promis.race and whole functionality changes

function successfull(value,delay){
    return new Promise((resolve)=>setTimeout(()=>{
        resolve(value)
    },delay));
}

function unsuccessfull(value,delay){
    return new Promise((resolve,reject)=>setTimeout(()=>{
        reject(value)
    },delay));
}

async function funcToInvokePromises(){
    
   let promise1 = successfull("Call Successfull",4000);
   let promise2 = successfull("Call Successfull 1",4000);
   let promise3 = unsuccessfull("Loading Failed",3000);

   const allPromises =Promise.race([promise1,promise2,promise3]);

   try{
    const result = await allPromises;
    console.log(result);
   }catch(error){
    console.log(error);
   }
}
funcToInvokePromises();