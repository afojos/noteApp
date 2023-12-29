const noteContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".create_btn");
let note = document.querySelectorAll(".note_space");


function showNote(){
    noteContainer.innerHTML = localStorage.getItem("note");
}
 showNote();

function saveNote(){
    localStorage.setItem("note", noteContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let del = document.createElement("img");
    inputBox.className = "note_space";
    inputBox.setAttribute("contenteditable", "true");
    del.src = "delete-removebg-preview.png";
    noteContainer.appendChild(inputBox).appendChild(del);
});


//FOR SAVINDG AND REMOVING
noteContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        saveNote();
        }
        else if(e.target.tagName === "P")
        {
        note = document.querySelectorAll(".note_space");
        note.forEach(nt => 
            {
        nt.onKeyup = function()
        {
        saveNote(); 
        }
            })
        }
})

//FOR ENTER KEY TO WORK GOING TO ANOTHER LINE

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
