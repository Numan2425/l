// custom event
document.addEventListener("msgten",(eventfromhtml1)=>{
    console.log(eventfromhtml1.detail.message)
});
function changefunc(eventfromhtml)
{
    let value = eventfromhtml.target.value;
    console.log("some change happen"+value);
    console.log(value);

    if(value==10)
    {
        const eventName = new CustomEvent("msgten",{
            detail:{
                message : "value 10 detected"
            }
        });
        document.dispatchEvent(eventName);
    }
}

setTimeout(()=>{
    console.log("set time out func execution one time after 5 sec")
},5000);

let intervall = setInterval(()=>{
    console.log("set interval func execution after every 5 sec")
},5000)

setTimeout(() => {
    clearInterval(intervall)
}, 10000);