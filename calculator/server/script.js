const displaybox=document.getElementById("displaybox")
const btnvalue=parseInt(document.getElementById("btnvalue"))
function appendToDisplay(num) {
    displaybox.value+=num
}
function clearDisplay(){
    displaybox.value=''

}

function calculate(){
    try{
            displaybox.value=eval(displaybox.value)

    }
    catch(error){
        displaybox.value='Error'

    }

}
