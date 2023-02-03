// ________________________________________Dark Mode Logic__________________________
// get dark mode button
let getDarkModeButton = document.querySelector(".move-bar")

// get dark button container to change backgroud color
let getDarkButtonContainer = document.querySelector(".dark")

// get text area
let getTextArea = document.querySelector("#text")


//add click event on dark mode button
getDarkModeButton.addEventListener("click", function(){
    getDarkModeButton.classList.toggle("active")

    // condition to check active class in darkmode button if has then run if statement
    if(getDarkModeButton.classList.contains("active")){
        document.body.style.backgroundColor = "black";
        getDarkModeButton.style.background = "black"
        getDarkButtonContainer.style.background = "white"
        getTextArea.style.background = "white"
        getTextArea.style.color = "black"
    }

    // otherwise run else statement
    else{
        document.body.style.background = "white";
        getDarkModeButton.style.background = "white "
        getDarkButtonContainer.style.background = "black"
        getTextArea.style.background = "black"
        getTextArea.style.color = "white"
    }
})

//_________________________________Dark Mode Logic End________________________________


//_______________________________keyBoard Custom Color Logic Start_____________________

// get custom button
let getCustomButton = document.querySelector(".btn") 

// get custom color parent container
let getCustomParentContainer = document.querySelector(".container")

// get custom popup screen
let getCustomPopUpScreen = document.querySelector(".color")

// get changed save button
let getSaveCustomColor = document.querySelector(".save")

// get keys-container to change background color
let getKeysContainer = document.querySelector(".keys-container")    


// add click event on custom button
getCustomButton.addEventListener("click", function(){
    getCustomParentContainer.classList.add("active")
    getCustomPopUpScreen.classList.add("active")
})


// add click event on save button
getSaveCustomColor.addEventListener("click", function(){
    getCustomParentContainer.classList.remove("active")
    getCustomPopUpScreen.classList.remove("active")
})


// function to get color value and set color
function myColor(){
    let red = document.querySelector("#red").value
    let green = document.querySelector("#green").value
    let blue = document.querySelector("#blue").value

    let color = 'rgb('+ red+', '+green+', '+blue+')';

    getKeysContainer.style.background = color;

    // using for loop to give key color
    for(let i = 0; i<getKeyboardKeys.length; i++){
        getKeyboardKeys[i].style.color = color;
    }
    document.querySelector('#box').value = color;

}

document.querySelector("#red").addEventListener("input", myColor)
document.querySelector("#green").addEventListener("input", myColor)
document.querySelector("#blue").addEventListener("input", myColor)

// _______________________________Custom Color Logic End____________________________________


// _________________________________Key board keys logic start_______________________________

for(let i = 0; i<16*4-4; i++){
    getKeysContainer.insertAdjacentHTML("beforeend", `<div class='key key${i}'></div>`)
}

// get keyboard keys 
let getKeyboardKeys = document.querySelectorAll(".key")



// store keyboard keys
let storeKeyboardKeys = ['`','1', '2', '3', '4', '5', '6', '7', '8', '9','0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\'', 'CapsLock', 'A' ,'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift','Enter', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Fn', 'Ctrl']



// using for loop to set innerHTML
for(let i = 0; i<getKeyboardKeys.length; i++){
    
    getKeyboardKeys[i].innerHTML = storeKeyboardKeys[i]
    
}

// __________________________________keys logic end________________________________



// _________________________________add keyboard work logicstart___________________________
let storePressKeyIndex = ""

function removeClassses(){
    setTimeout(function(){
        for(let i = 0; i<getKeyboardKeys.length; i++){
            if(getKeyboardKeys[i].classList.contains("active")){
                getKeyboardKeys[i].classList.remove("active")

            }

        }
    }, 300)
}


getTextArea.addEventListener("keydown", function(e){
    
    
    if(e.key.length == 1){        
        // created variable to store indexes
        storePressKeyIndex = storeKeyboardKeys.indexOf(e.key.toUpperCase())
        
        getKeyboardKeys[storePressKeyIndex].classList.add("active")

        removeClassses()
    }

    
    else{
        
        
        if(e.key == 'Control'){
            getKeyboardKeys[54].classList.add("active")
            removeClassses()
        }
        else{
            storePressKeyIndex = storeKeyboardKeys.indexOf(e.key)

            getKeyboardKeys[storePressKeyIndex].classList.add("active")
            
        removeClassses()
        }
        

        }
})





// using for loop to know where user is clicked
for(let i = 0; i<getKeyboardKeys.length; i++){
    getKeyboardKeys[i].addEventListener("click", function(){
        let getValue = getTextArea.value // store previous value
        
        // condition to check the index length of an array
        if(storeKeyboardKeys[i].length == 1){

            // to be character upper
            if(getKeyboardKeys[28].classList.contains("caps")){
                getTextArea.value = getValue+storeKeyboardKeys[i]
            }

            // to be character lower
            else{
                getTextArea.value = getValue+storeKeyboardKeys[i].toLocaleLowerCase()
            }

            
        }
        
        else if(storeKeyboardKeys[i] == 'Enter'){
            getTextArea.value = getValue+'\n'
            
        }
        else if(storeKeyboardKeys[i] == 'Backspace'){
            getTextArea.value = getValue.slice(0, getValue.length-1)
        }
        
        else if(storeKeyboardKeys[i] === 'Tab'){
            getTextArea.value = getValue+'\t'
        }

        else if(storeKeyboardKeys[i] == 'CapsLock'){
            getKeyboardKeys[i].classList.toggle("caps")
        }
    })   
}