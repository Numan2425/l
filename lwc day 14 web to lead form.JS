// en_AU my locale got from org

function beforesubmit(){
    let outputElement =  document.querySelector(".outputdate");
    let inputElement = document.querySelector(".inputdate");
 
    let formattedDate = new Date(inputElement.value).toLocaleDateString("en-AU");
    outputElement.value = formattedDate;
}