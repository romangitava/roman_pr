// get create Note Button
let getCreateNoteButton = document.querySelector(".create-note-btn")

// get notes-popup-background to write notes
let getNotesPopUpBackground = document.querySelector(".notes-popup-background")


// add click event on create note button
getCreateNoteButton.addEventListener("click", function(){
    getNotesPopUpBackground.classList.add("active")
})



// get cancel button to remove the popup screen
let getCancelButton = document.querySelector(".cancel")

// add click event on cancel button
getCancelButton.addEventListener("click", function(){
    getNotesPopUpBackground.classList.remove("active")
})



// get save button
let getSaveButton = document.querySelector(".save")

// get notes-container to store all notes
let getNotesContainer = document.querySelector(".notes-container")

// created variable to increase the row
let row = 2;


// get notes text
let getNotesText = document.querySelector("#writing-place")


// add click event on save button
getSaveButton.addEventListener("click", function(){
    getNotesContainer.insertAdjacentHTML("beforeend", "<div class='note'></div>")
    let getNotes = document.querySelectorAll(".note")

    // generate random number from -5 to 5
    let generateRandomNum = Math.floor(Math.random() * 11)-5
    
    // Generate random color
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    // console.log(`#${randColor.toUpperCase()}`) //
    

    // get last index of notes
    let getLastIndexOfNotes = getNotes.length-1
    getNotes[getLastIndexOfNotes].style.transform = `rotateZ(${generateRandomNum}deg)` // set card rotation 
    getNotes[getLastIndexOfNotes].style.background = `#${randColor.toUpperCase()}`; // set background color
    
    // create p tag and insert text there
    getNotes[getLastIndexOfNotes].insertAdjacentHTML("afterbegin", `<textarea class='text' disabled>${getNotesText.value}</textarea>`)

    // add notes color on textarea color
    document.querySelectorAll(".text")[getLastIndexOfNotes].style.background = `#${randColor.toUpperCase()}`;


    // condition to increase row
    // For Laptop
    if(window.innerWidth >= 1200){
        console.log("work")
        if(getNotes.length % 4 == 0){
            let saveIncreamentValue = row++
            getNotesContainer.style.gridTemplateRows = `repeat(${saveIncreamentValue}, 250px)`
            // console.log(saveIncreamentValue)
        }
    }

    // For Tablet
    else if(window.innerWidth <=1150 && window.innerWidth >900){
        console.log("yes work")
        if(getNotes.length % 3 == 0){
            let saveIncreamentValue = row++
            getNotesContainer.style.gridTemplateRows = `repeat(${saveIncreamentValue}, 250px)`
            console.log(saveIncreamentValue)
        }
    }

    // For iPad 

    else if(window.innerWidth <=900 && window.innerWidth>650){
        console.log("yes yes work")
        if(getNotes.length % 2 == 0){
            let saveIncreamentValue = row++
            getNotesContainer.style.gridTemplateRows = `repeat(${saveIncreamentValue}, 250px)`
            console.log(saveIncreamentValue)
        }
    }

    // For Mobile

    else if(window.innerWidth <= 650){
        console.log("work ho raha hai")
        let saveIncreamentValue = row++
        getNotesContainer.style.gridTemplateRows = `repeat(${saveIncreamentValue}, 250px)`
        console.log(saveIncreamentValue)
    }
    // at the end remove popup screen
    getNotesPopUpBackground.classList.remove("active")

})