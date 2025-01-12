function addCard() {
    var list = document.getElementById("list");
    var card = document.createElement("div");
    card.classList.add("card");
    var cardTitle = document.createElement("p");
    cardTitle.innerText = "New Card";
    card.appendChild(cardTitle);
    list.appendChild(card);
}

function addList() {
    document.getElementById("addListButton").hidden = true;
    document.getElementById("addListForm").hidden = false;
    document.getElementById("newListTitleInput").focus();
}

function cancelAddNewList() {
    document.getElementById("newListTitleInput").value = "";
    document.getElementById("addListButton").hidden = false;
    document.getElementById("addListForm").hidden = true;
}

function createNewList() {
    const kanbanBoardDiv = document.getElementById("kanbanBoard");
    const listTemplate = document.getElementById("template_list");
    const titleForNewList = document.getElementById("newListTitleInput").value;
    const titleIDFormat = titleForNewList.toLowerCase().replace(" ", "_");

    cancelAddNewList();

    // Clone template list
    var newList = listTemplate.cloneNode(true);

    // Set all "template" placeholders with list title
    var newListTitle = newList.querySelector("#template_title_p");
    var newListAddCardButton = newList.querySelector("#template_add_card_button");

        // IDs
    newList.id = newList.id.replace("template", titleIDFormat);
    newListTitle.id = newListTitle.id.replace("template", titleIDFormat);
    newListAddCardButton.id = newListAddCardButton.id.replace("template", titleIDFormat); 

        // Visible elements
    newListTitle.innerText = titleForNewList;

    // Add list to beginning of kanban board
    newList.hidden = false;
    kanbanBoardDiv.insertBefore(newList, kanbanBoardDiv.firstChild);
}