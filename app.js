let addBtn = document.getElementById("add-btn");
let userList = document.getElementById("user-list");
let inputGear = document.getElementById("input-gear");
const items = []


addBtn.addEventListener("click", function() {
    createRow();  
})

function createRow() {
    let gear = document.createElement("div"); 
    addParagraph(gear);
    addDeleteBtn(gear);
    addEditBtn(gear);
    addSaveBtn(gear);
    userList.appendChild(gear)
    items.push(gear)
    console.log(items)
}


function addParagraph(gear){
    let gearText = document.createElement("p");
    gearText.innerText = inputGear.value;
    gear.appendChild(gearText);
}

function addDeleteBtn(gear){
    // adds delete-button to gear in user list
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    gear.appendChild(deleteBtn);
    
    // delete-button: when clicked, removes gear item from user list
    deleteBtn.addEventListener("click", function () {
        userList.removeChild(gear);
    });
}

function addEditBtn(gear){
    // adds edit-button to gear in user list
    let editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    gear.appendChild(editBtn);

    // edit-button: when clicked, makes gear item text editable
    editBtn.addEventListener("click", function () {
        gearText.contentEditable = true;
    });
}

function addSaveBtn(gear){
    // adds save-button to save changes made with edit button
    let saveBtn = document.createElement("button");
    saveBtn.textContent = "save";
    gear.appendChild(saveBtn);

    // save-button: when clicked makes gear text not editable
    saveBtn.addEventListener("click", function () {
        gearText.contentEditable = false;
    });
}
